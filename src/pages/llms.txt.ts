import type { APIRoute } from 'astro';
import { config } from '../config';
import { visibleGuides, guideUrl, toolById, platformById, absoluteUrl, showDrafts } from '../lib/site';

// A plain-text summary of the site for AI tools. Lists published guides only.
export const GET: APIRoute = () => {
  const published = showDrafts ? [] : visibleGuides;
  const lines = [
    `# ${config.siteName}`,
    '',
    `> ${config.tagline} Step-by-step guides for installing SaaS and marketing tools on Shopify, Webflow and WordPress, plus an optional done-for-you install service.`,
    '',
    '## Install guides',
    ...published.map((g) => `- [${toolById(g.toolId).name} on ${platformById(g.platformId).name}](${absoluteUrl(guideUrl(g.slug))}): ${g.metaDescription}`),
    '',
    '## Other pages',
    `- [All tools](${absoluteUrl('/tools/')})`,
    `- [All platforms](${absoluteUrl('/platforms/')})`,
    `- [Express Install service terms](${absoluteUrl('/service-terms/')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
