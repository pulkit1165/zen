#!/usr/bin/env node
/**
 * publish.mjs — post an approved queue item to LinkedIn (personal profile).
 *
 * Usage:
 *   node publish.mjs queue/2026-06-03            # publish for real
 *   node publish.mjs queue/2026-06-03 --dry-run  # validate everything, do NOT post
 *
 * Reads from the queue dir:
 *   post.txt   — the post body (required)
 *   image.png  — the card image (optional; text-only post if absent)
 *   meta.json  — optional { altText }
 *
 * Auth: reads auth/.tokens.json (run auth/oauth.mjs first).
 * Uses the Assets + UGC Posts API, which works with the w_member_social scope.
 */
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const args = process.argv.slice(2);
const dry = args.includes('--dry-run');
const queueDir = resolve(args.find((a) => !a.startsWith('--')) || '');
if (!queueDir || !existsSync(queueDir)) { console.error('queue dir not found:', queueDir); process.exit(1); }

const TOKENS_PATH = new URL('./auth/.tokens.json', import.meta.url).pathname;
const postPath = join(queueDir, 'post.txt');
const imgPath = join(queueDir, 'image.png');
const metaPath = join(queueDir, 'meta.json');

if (!existsSync(postPath)) { console.error('missing post.txt in', queueDir); process.exit(1); }
const text = readFileSync(postPath, 'utf8').trim();
const meta = existsSync(metaPath) ? JSON.parse(readFileSync(metaPath, 'utf8')) : {};
const hasImage = existsSync(imgPath);

// ---- basic content QA before we ever touch the network ----
const problems = [];
if (text.length < 40) problems.push('post body looks too short (<40 chars)');
if (text.length > 3000) problems.push(`post body is ${text.length} chars (LinkedIn limit ~3000)`);
if (/zenvora/i.test(text)) problems.push('post mentions "Zenvora" — should be neutral for a personal post');
if (problems.length) { console.error('CONTENT QA FAILED:'); problems.forEach((p) => console.error('  •', p)); process.exit(1); }

console.log('— queue:', queueDir);
console.log('— body :', text.length, 'chars,', text.split('\n').length, 'lines');
console.log('— image:', hasImage ? imgPath : '(none — text-only)');

if (!existsSync(TOKENS_PATH)) {
  console.log('\nℹ️  No auth/.tokens.json yet — run the one-time OAuth first:');
  console.log('   LINKEDIN_CLIENT_ID=xxx LINKEDIN_CLIENT_SECRET=yyy node auth/oauth.mjs');
  if (dry) { console.log('\n[dry-run] content QA passed. Connect LinkedIn to enable real posting.'); process.exit(0); }
  process.exit(1);
}

const tok = JSON.parse(readFileSync(TOKENS_PATH, 'utf8'));
if (tok.expires_at && tok.expires_at < Math.floor(Date.now() / 1000)) {
  console.error('❌ access token expired — re-run auth/oauth.mjs'); process.exit(1);
}
const AUTH = { Authorization: `Bearer ${tok.access_token}` };
const PERSON = tok.person_urn;

if (dry) {
  console.log('\n[dry-run] content QA passed, token present, author =', PERSON);
  console.log('[dry-run] would upload image + create UGC post. No network writes performed.');
  process.exit(0);
}

// ---- 1. register image upload ----
async function registerUpload() {
  const r = await fetch('https://api.linkedin.com/v2/assets?action=registerUpload', {
    method: 'POST',
    headers: { ...AUTH, 'Content-Type': 'application/json', 'X-Restli-Protocol-Version': '2.0.0' },
    body: JSON.stringify({
      registerUploadRequest: {
        recipes: ['urn:li:digitalmediaRecipe:feedshare-image'],
        owner: PERSON,
        serviceRelationships: [{ relationshipType: 'OWNER', identifier: 'urn:li:userGeneratedContent' }],
      },
    }),
  });
  if (!r.ok) throw new Error(`registerUpload ${r.status}: ${await r.text()}`);
  const j = await r.json();
  const uploadUrl = j.value.uploadMechanism['com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest'].uploadUrl;
  return { uploadUrl, asset: j.value.asset };
}

async function uploadBytes(uploadUrl, buf) {
  const r = await fetch(uploadUrl, { method: 'PUT', headers: { ...AUTH, 'Content-Type': 'image/png' }, body: buf });
  if (!r.ok && r.status !== 201) throw new Error(`image upload ${r.status}: ${await r.text()}`);
}

// ---- 2. create the UGC post ----
async function createPost(assetUrn) {
  const media = assetUrn
    ? {
        shareMediaCategory: 'IMAGE',
        media: [{ status: 'READY', media: assetUrn, title: { text: (meta.altText || 'Field note').slice(0, 200) } }],
      }
    : { shareMediaCategory: 'NONE' };

  const body = {
    author: PERSON,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': { shareCommentary: { text }, ...media },
    },
    visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
  };
  const r = await fetch('https://api.linkedin.com/v2/ugcPosts', {
    method: 'POST',
    headers: { ...AUTH, 'Content-Type': 'application/json', 'X-Restli-Protocol-Version': '2.0.0' },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(`ugcPosts ${r.status}: ${await r.text()}`);
  return r.headers.get('x-restli-id') || (await r.json()).id;
}

try {
  let asset = null;
  if (hasImage) {
    console.log('\n→ registering image upload…');
    const reg = await registerUpload();
    console.log('→ uploading image bytes…');
    await uploadBytes(reg.uploadUrl, readFileSync(imgPath));
    asset = reg.asset;
    console.log('  asset:', asset);
  }
  console.log('→ creating post…');
  const postUrn = await createPost(asset);
  const url = `https://www.linkedin.com/feed/update/${postUrn}`;
  console.log('\n✅ published:', postUrn);
  console.log('   ', url);
  writeFileSync(join(queueDir, 'published.json'),
    JSON.stringify({ postUrn, url, at: new Date().toISOString() }, null, 2));
} catch (e) {
  console.error('\n❌ publish failed:', e.message);
  process.exit(1);
}
