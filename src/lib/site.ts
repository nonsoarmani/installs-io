// Small helpers shared by all pages. You normally never edit this file.
import { guides } from '../data/integrations';
import { tools } from '../data/tools';
import { platforms } from '../data/platforms';
import { partners } from '../data/partners';
import { config, isConfigured } from '../config';
import type { Guide, Tool, Platform, Partner } from '../data/types';

// Drafts are visible only while you work on your computer (npm run dev)
// or in a private preview build (SHOW_DRAFTS=true). They never go on the real site.
export const showDrafts: boolean =
  Boolean(import.meta.env.DEV) || process.env.SHOW_DRAFTS === 'true';

export const visibleGuides: Guide[] = guides.filter(
  (g) => g.status === 'published' || showDrafts,
);

export const guideUrl = (slug: string) => `/install/${slug}/`;
export const platformUrl = (slug: string) => `/platforms/${slug}/`;
export const toolUrl = (slug: string) => `/tools/${slug}/`;

export const toolById = (id: string): Tool => {
  const t = tools.find((x) => x.id === id);
  if (!t) throw new Error(`Unknown tool id: ${id}`);
  return t;
};
export const platformById = (id: string): Platform => {
  const p = platforms.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown platform id: ${id}`);
  return p;
};

export const guidesForTool = (toolId: string) => visibleGuides.filter((g) => g.toolId === toolId);
export const guidesForPlatform = (platformId: string) =>
  visibleGuides.filter((g) => g.platformId === platformId);

// Only tools / platforms that have at least one visible guide get their own page.
export const activeTools = tools.filter((t) => guidesForTool(t.id).length > 0);
export const activePlatforms = platforms.filter((p) => guidesForPlatform(p.id).length > 0);

export const partnerFor = (guide: Guide): Partner | undefined =>
  (guide.partnerId && partners.find((p) => p.id === guide.partnerId)) ||
  partners.find((p) => p.platformIds.includes(guide.platformId));

// The payment link, or null while it is still a TODO placeholder.
export const expressHref: string | null = isConfigured(config.express.paymentUrl)
  ? config.express.paymentUrl
  : null;

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString(config.dateLocale, {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const isoDuration = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `PT${h ? `${h}H` : ''}${m ? `${m}M` : ''}` || 'PT0M';
};

export const absoluteUrl = (path: string) => new URL(path, config.domain).toString();
