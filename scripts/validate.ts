// The quality guard. Runs automatically before every build (`npm run build`).
// If anything is wrong, the build STOPS and tells you exactly what to fix.
import { guides } from '../src/data/integrations';
import { tools } from '../src/data/tools';
import { platforms } from '../src/data/platforms';
import { partners } from '../src/data/partners';
import { config } from '../src/config';

// ---- Minimum quality rules (change numbers here if you want) ----
const MIN_STEPS = 5;
const MIN_FAQS = 3;
const MIN_TROUBLESHOOTING = 3;
const MIN_VERIFICATION = 2;
const MIN_PREREQUISITES = 2;
const MIN_STEP_BODY_CHARS = 60;
const MIN_FAQ_ANSWER_CHARS = 40;
const MIN_FIX_CHARS = 40;
const MAX_TITLE_CHARS = 70;
const META_MIN = 70;
const META_MAX = 160;

const errors: string[] = [];
const err = (where: string, msg: string) => errors.push(`[${where}] ${msg}`);

// ---- Unique ids and slugs for tools, platforms, partners ----
const seen = (label: string, items: { id: string; slug?: string }[]) => {
  const ids = new Set<string>();
  const slugs = new Set<string>();
  for (const i of items) {
    if (ids.has(i.id)) err(i.id, `Duplicate ${label} id`);
    ids.add(i.id);
    if (i.slug !== undefined) {
      if (slugs.has(i.slug)) err(i.id, `Duplicate ${label} slug "${i.slug}"`);
      slugs.add(i.slug);
      if (!/^[a-z0-9-]+$/.test(i.slug)) err(i.id, `${label} slug "${i.slug}" must be lowercase letters, numbers and dashes only`);
    }
  }
  return ids;
};
seen('tool', tools);
seen('platform', platforms);
const partnerIds = seen('partner', partners);
for (const p of partners) {
  for (const pid of p.platformIds) {
    if (!platforms.some((x) => x.id === pid)) err(p.id, `Partner references unknown platform "${pid}"`);
  }
  if (!/^https?:\/\//.test(p.url)) err(p.id, 'Partner url must start with https://');
}

const allSlugs = new Set(guides.map((g) => g.slug));
const seenSlugs = new Set<string>();
const seenText = new Map<string, string>(); // text -> first slug that used it
const today = new Date().toISOString().slice(0, 10);

for (const g of guides) {
  const s = g.slug;

  if (seenSlugs.has(s)) err(s, 'Duplicate guide slug');
  seenSlugs.add(s);

  // References
  const tool = tools.find((t) => t.id === g.toolId);
  const platform = platforms.find((p) => p.id === g.platformId);
  if (!tool) err(s, `toolId "${g.toolId}" does not exist in tools.ts`);
  if (!platform) err(s, `platformId "${g.platformId}" does not exist in platforms.ts`);
  if (tool && platform && s !== `${tool.slug}-on-${platform.slug}`) {
    err(s, `Slug must be "${tool.slug}-on-${platform.slug}"`);
  }
  if (g.partnerId && !partnerIds.has(g.partnerId)) err(s, `partnerId "${g.partnerId}" does not exist in partners.ts`);
  for (const r of g.relatedSlugs) {
    if (!allSlugs.has(r)) err(s, `relatedSlugs contains unknown guide "${r}"`);
    if (r === s) err(s, 'relatedSlugs cannot include itself');
  }

  // Required text fields
  const required: [string, string][] = [
    ['title', g.title],
    ['metaDescription', g.metaDescription],
    ['whoItsFor', g.whoItsFor],
    ['whatYouGet', g.whatYouGet],
  ];
  for (const [name, val] of required) {
    if (!val || !val.trim()) err(s, `Missing required field: ${name}`);
  }
  if (g.title.length > MAX_TITLE_CHARS) err(s, `Title is ${g.title.length} characters (max ${MAX_TITLE_CHARS})`);
  if (g.metaDescription.length < META_MIN || g.metaDescription.length > META_MAX) {
    err(s, `metaDescription is ${g.metaDescription.length} characters (must be ${META_MIN}-${META_MAX})`);
  }
  if (!(g.estimatedMinutes > 0)) err(s, 'estimatedMinutes must be greater than 0');

  // Minimum content
  if (g.prerequisites.length < MIN_PREREQUISITES) err(s, `Needs at least ${MIN_PREREQUISITES} prerequisites`);
  if (g.steps.length < MIN_STEPS) err(s, `Has ${g.steps.length} steps (minimum ${MIN_STEPS})`);
  if (g.verification.length < MIN_VERIFICATION) err(s, `Needs at least ${MIN_VERIFICATION} verification items`);
  if (g.troubleshooting.length < MIN_TROUBLESHOOTING) err(s, `Needs at least ${MIN_TROUBLESHOOTING} troubleshooting items`);
  if (g.faqs.length < MIN_FAQS) err(s, `Has ${g.faqs.length} FAQs (minimum ${MIN_FAQS})`);

  g.steps.forEach((st, i) => {
    if (!st.title.trim()) err(s, `Step ${i + 1} has no title`);
    if (st.body.trim().length < MIN_STEP_BODY_CHARS) err(s, `Step ${i + 1} body is too short (min ${MIN_STEP_BODY_CHARS} characters)`);
    if (st.code && !st.code.code.trim()) err(s, `Step ${i + 1} has an empty code block`);
    if (st.image && !st.imageAlt) err(s, `Step ${i + 1} has an image but no imageAlt text`);
  });
  g.verification.forEach((v, i) => {
    if (!v.title.trim() || !v.body.trim()) err(s, `Verification item ${i + 1} is missing a title or body`);
  });
  g.troubleshooting.forEach((t, i) => {
    if (!t.problem.trim()) err(s, `Troubleshooting item ${i + 1} has no problem text`);
    if (t.fix.trim().length < MIN_FIX_CHARS) err(s, `Troubleshooting item ${i + 1} fix is too short (min ${MIN_FIX_CHARS} characters)`);
  });
  g.faqs.forEach((f, i) => {
    if (!f.question.trim()) err(s, `FAQ ${i + 1} has no question`);
    if (f.answer.trim().length < MIN_FAQ_ANSWER_CHARS) err(s, `FAQ ${i + 1} answer is too short (min ${MIN_FAQ_ANSWER_CHARS} characters)`);
  });

  // Duplicate-content guard: the same text must not appear in two guides
  const texts: string[] = [
    ...g.steps.map((x) => x.body),
    ...g.troubleshooting.map((x) => x.fix),
    ...g.faqs.map((x) => x.answer),
  ];
  for (const t of texts) {
    const key = t.trim().toLowerCase().replace(/\s+/g, ' ');
    const first = seenText.get(key);
    if (first && first !== s) err(s, `Copied text also used in "${first}": "${t.slice(0, 50)}..."`);
    else seenText.set(key, s);
  }

  // Publishing rules
  if (g.status === 'published') {
    if (!g.lastVerified || !/^\d{4}-\d{2}-\d{2}$/.test(g.lastVerified) || isNaN(Date.parse(g.lastVerified))) {
      err(s, 'Published guides need a real lastVerified date in YYYY-MM-DD format');
    } else if (g.lastVerified > today) {
      err(s, 'lastVerified cannot be in the future');
    }
    if (JSON.stringify(g).includes('TODO')) {
      err(s, 'Still contains "TODO" text. Verify against vendor docs and remove it before publishing');
    }
  } else if (g.lastVerified) {
    err(s, 'Draft guides should have lastVerified set to null');
  }
}

if (errors.length > 0) {
  console.error('\n✖ VALIDATION FAILED. Fix these problems, then run again:\n');
  errors.forEach((e) => console.error('  - ' + e));
  console.error('');
  process.exit(1);
}

const published = guides.filter((g) => g.status === 'published').length;
console.log(`✔ Validation passed: ${guides.length} guide(s) checked (${published} published, ${guides.length - published} draft).`);

// ---- Friendly reminder (does NOT stop the build) ----
const todos: string[] = [];
const walk = (obj: unknown, path: string) => {
  if (typeof obj === 'string') {
    if (obj.includes('TODO')) todos.push(path);
  } else if (Array.isArray(obj)) {
    obj.forEach((v, i) => walk(v, `${path}[${i}]`));
  } else if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) walk(v, path ? `${path}.${k}` : k);
  }
};
walk(config, 'config');
if (todos.length > 0) {
  console.log(`⚠ src/config.ts still has ${todos.length} TODO value(s) to fill in before launch:`);
  todos.forEach((t) => console.log('    ' + t));
}
if (published === 0 && process.env.SHOW_DRAFTS !== 'true') {
  console.log('⚠ No guides are published yet, so the live site will have no guide pages. See docs/LAUNCH-GUIDE.md.');
}
