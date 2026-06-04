#!/usr/bin/env node
/**
 * daily-brief.mjs — scaffold today's queue folder and print a writing brief.
 * Run by the daily job; the copy + image-spec are then filled in (by the
 * scheduled Claude run) and the image rendered. Idempotent per date.
 *
 * Usage: node daily-brief.mjs [YYYY-MM-DD]
 */
import { mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const date = process.argv[2] || new Date().toISOString().slice(0, 10);
const root = new URL('./', import.meta.url).pathname;
const topic = JSON.parse(execFileSync('node', [join(root, 'pick-topic.mjs'), date], { encoding: 'utf8' }));
const dir = join(root, 'queue', date);
mkdirSync(dir, { recursive: true });

console.log(`\n=== WRITING BRIEF · ${date} ===`);
console.log(`Niche      : ${topic.niche}`);
console.log(`Angle      : ${topic.angle}`);
console.log(`Layout     : ${topic.suggestedLayout}  (stat | headline | quote)`);
console.log(`Eyebrow    : ${topic.eyebrow}`);
console.log(`Foot tag   : ${topic.footTag}`);
console.log(`Queue dir  : queue/${date}`);
console.log(`\nNext: write queue/${date}/post.txt (neutral, personal voice, no brand),`);
console.log(`      write queue/${date}/image-spec.json (${topic.suggestedLayout} layout),`);
console.log(`      then: node render-image.mjs queue/${date}/image-spec.json queue/${date}/image.png`);
console.log(`      review, then: node publish.mjs queue/${date}\n`);

if (existsSync(join(dir, 'post.txt'))) console.log('(post.txt already exists — looks drafted)');
