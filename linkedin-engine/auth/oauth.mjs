#!/usr/bin/env node
/**
 * oauth.mjs — one-time LinkedIn 3-legged OAuth to obtain a w_member_social token.
 *
 * Prereqs (one-time, in the LinkedIn Developer portal — developer.linkedin.com):
 *   1. Create an App. Add the products: "Sign In with LinkedIn using OpenID Connect"
 *      and "Share on LinkedIn".
 *   2. Under Auth → Authorized redirect URLs, add EXACTLY:  http://localhost:8765/callback
 *   3. Copy the Client ID and Client Secret.
 *
 * Run:
 *   LINKEDIN_CLIENT_ID=xxx LINKEDIN_CLIENT_SECRET=yyy node auth/oauth.mjs
 *
 * It opens an authorize URL, captures the redirect on localhost:8765, exchanges the
 * code for an access token, resolves your person URN, and writes auth/.tokens.json.
 */
import { createServer } from 'node:http';
import { writeFileSync } from 'node:fs';
import { execFile } from 'node:child_process';

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const REDIRECT = 'http://localhost:8765/callback';
const SCOPE = 'openid profile w_member_social';
const TOKENS_PATH = new URL('./.tokens.json', import.meta.url).pathname;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing env. Run:\n  LINKEDIN_CLIENT_ID=xxx LINKEDIN_CLIENT_SECRET=yyy node auth/oauth.mjs');
  process.exit(1);
}

const state = 'st_' + CLIENT_ID.slice(0, 6) + '_zen';
const authUrl =
  'https://www.linkedin.com/oauth/v2/authorization?response_type=code' +
  `&client_id=${encodeURIComponent(CLIENT_ID)}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT)}` +
  `&scope=${encodeURIComponent(SCOPE)}` +
  `&state=${encodeURIComponent(state)}`;

async function exchange(code) {
  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });
  const r = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!r.ok) throw new Error(`token exchange failed ${r.status}: ${await r.text()}`);
  return r.json();
}

async function whoami(accessToken) {
  const r = await fetch('https://api.linkedin.com/v2/userinfo', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!r.ok) throw new Error(`userinfo failed ${r.status}: ${await r.text()}`);
  return r.json(); // { sub, name, given_name, ... }
}

const server = createServer(async (req, res) => {
  if (!req.url.startsWith('/callback')) { res.writeHead(404).end(); return; }
  const url = new URL(req.url, REDIRECT);
  const code = url.searchParams.get('code');
  const err = url.searchParams.get('error');
  if (err) {
    res.writeHead(400, { 'Content-Type': 'text/html' })
       .end(`<h2>Authorization failed</h2><pre>${err}: ${url.searchParams.get('error_description')}</pre>`);
    console.error('Authorization error:', err); server.close(); process.exit(1);
  }
  try {
    const tok = await exchange(code);
    const me = await whoami(tok.access_token);
    const data = {
      access_token: tok.access_token,
      expires_in: tok.expires_in,
      obtained_at: Math.floor(Date.now() / 1000),
      expires_at: Math.floor(Date.now() / 1000) + (tok.expires_in || 0),
      scope: tok.scope || SCOPE,
      person_urn: `urn:li:person:${me.sub}`,
      name: me.name,
    };
    writeFileSync(TOKENS_PATH, JSON.stringify(data, null, 2));
    res.writeHead(200, { 'Content-Type': 'text/html' })
       .end(`<h2>✅ Connected as ${me.name}</h2><p>Token saved. You can close this tab and return to the terminal.</p>`);
    console.log(`\n✅ Connected as ${me.name}`);
    console.log(`   person URN: ${data.person_urn}`);
    console.log(`   token expires in ${Math.round((tok.expires_in || 0) / 86400)} days`);
    console.log(`   saved → ${TOKENS_PATH}`);
    server.close(); setTimeout(() => process.exit(0), 200);
  } catch (e) {
    res.writeHead(500, { 'Content-Type': 'text/html' }).end(`<pre>${e.message}</pre>`);
    console.error(e.message); server.close(); process.exit(1);
  }
});

server.listen(8765, () => {
  console.log('\nOpen this URL in your browser to authorize (also trying to auto-open):\n');
  console.log('  ' + authUrl + '\n');
  execFile('open', [authUrl], () => {}); // macOS auto-open; ignore failure
  console.log('Waiting for the LinkedIn redirect on http://localhost:8765/callback ...');
});
