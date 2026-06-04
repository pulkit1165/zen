#!/usr/bin/env node
/**
 * pick-topic.mjs — deterministic daily rotation through topics.json.
 * Usage: node pick-topic.mjs [YYYY-MM-DD]
 * Prints JSON: { date, niche, angle, key, suggestedLayout, footTag }
 *
 * Rotation is date-stable: the same date always yields the same niche,
 * so re-runs are idempotent and the schedule never repeats two days running.
 */
import { readFileSync } from 'node:fs';

const cfg = JSON.parse(readFileSync(new URL('./topics.json', import.meta.url), 'utf8'));
const rot = cfg.rotation;

const dateStr = process.argv[2] || new Date().toISOString().slice(0, 10);
// days since epoch (UTC) → stable index
const dayNum = Math.floor(Date.parse(dateStr + 'T00:00:00Z') / 86400000);

const topic = rot[((dayNum % rot.length) + rot.length) % rot.length];
// vary layout independently so the same niche isn't always the same card style
const layouts = ['stat', 'headline', 'quote'];
const suggestedLayout = layouts[((dayNum % layouts.length) + layouts.length) % layouts.length];

const out = {
  date: dateStr,
  key: topic.key,
  niche: topic.niche,
  angle: topic.angle,
  suggestedLayout,
  eyebrow: topic.niche.toUpperCase(),
  footTag: topic.key.replace(/-/g, ' '),
};
process.stdout.write(JSON.stringify(out, null, 2) + '\n');
