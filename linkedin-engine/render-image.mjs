#!/usr/bin/env node
/**
 * render-image.mjs — turn a post spec into a branded 1200x1200 PNG via headless Chrome.
 * Usage: node render-image.mjs spec.json out.png
 *
 * spec.json fields:
 *   eyebrow   : top-left label (e.g. "META ADS")
 *   kicker    : top-right small label (e.g. "Zenvora Field Notes")
 *   mode      : "headline" | "stat"
 *   headline  : main text (headline mode). Wrap an emphasised phrase in *asterisks* for italic rust accent.
 *   stat      : big number (stat mode), e.g. "3s"
 *   statUnit  : optional smaller unit appended to stat, rendered in rust
 *   subline   : supporting sentence under headline/stat
 *   brand     : footer brand (default "Zenvora Labs" with X accent)
 *   domain    : footer domain (default "zenvoralabs.xyz")
 */
import { readFileSync, writeFileSync, mkdtempSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { spawn } from 'node:child_process';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const TEMPLATE = new URL('./templates/card.html', import.meta.url).pathname;
const TEMPLATE_DIR = dirname(TEMPLATE);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const [, , specPath, outPath] = process.argv;
if (!specPath || !outPath) { console.error('usage: node render-image.mjs spec.json out.png'); process.exit(1); }

const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// *phrase* -> italic rust accent
const accent = (s = '') => esc(s).replace(/\*([^*]+)\*/g, '<span class="accent">$1</span>');

// subline supports **bold** emphasis
const subl = (s = '') => esc(s).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
const subline = spec.subline ? `<div class="subline">${subl(spec.subline)}</div>` : '';

let bodyBlock;
if (spec.mode === 'stat') {
  const unit = spec.statUnit ? `<span class="unit">${esc(spec.statUnit)}</span>` : '';
  bodyBlock = `<div class="stat">${esc(spec.stat)}${unit}</div>` + subline;
} else if (spec.mode === 'quote') {
  bodyBlock = `<div class="mark">&ldquo;</div><div class="quote">${accent(spec.quote || spec.headline)}</div>` + subline;
} else {
  bodyBlock = `<div class="headline">${accent(spec.headline)}</div>` + subline;
}

// Inline the locally-cached font CSS with absolute file:// URLs (zero network at render time)
const fontCss = readFileSync(join(TEMPLATE_DIR, 'fonts.css'), 'utf8')
  .replace(/url\(\.\/fonts\//g, `url(file://${TEMPLATE_DIR}/fonts/`);

// De-branded footer: neutral series tag + optional right-side mark (no employer/agency).
const footL = spec.footL ?? 'Field Notes';
const footR = spec.footR ? `<span class="sq"></span>${esc(spec.footR)}` : '';

const html = readFileSync(TEMPLATE, 'utf8')
  .replaceAll('{{FONT_CSS}}', `<style>${fontCss}</style>`)
  .replaceAll('{{EYEBROW}}', esc(spec.eyebrow || ''))
  .replaceAll('{{KICKER}}', esc(spec.kicker || ''))
  .replaceAll('{{BODY_BLOCK}}', bodyBlock)
  .replaceAll('{{FOOT_L}}', esc(footL))
  .replaceAll('{{FOOT_R}}', footR);

const dir = mkdtempSync(join(tmpdir(), 'li-render-'));
const htmlPath = join(dir, 'card.html');
writeFileSync(htmlPath, html);

// Delete any pre-existing output so the existsSync() poll below detects ONLY a
// fresh write — otherwise a slow Chrome makes a stale file look like success.
try { rmSync(outPath, { force: true }); } catch {}

const child = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-sandbox',
  '--force-device-scale-factor=2', '--window-size=1200,1200',
  '--virtual-time-budget=5000', '--default-background-color=00000000',
  `--user-data-dir=${join(dir, 'cdp')}`,
  `--screenshot=${outPath}`, `file://${htmlPath}`,
], { stdio: 'ignore', detached: false });

try {
  // Poll for the screenshot; kill Chrome once it lands (or after timeout).
  let waited = 0, ok = false;
  while (waited < 25000) {
    await sleep(500); waited += 500;
    if (existsSync(outPath)) { await sleep(300); ok = true; break; }
    if (child.exitCode !== null) break;
  }
  try { child.kill('SIGKILL'); } catch {}
  if (ok && existsSync(outPath)) { console.log('rendered', outPath); }
  else { console.error('render failed: no screenshot produced'); process.exit(1); }
} finally {
  rmSync(dir, { recursive: true, force: true });
}
