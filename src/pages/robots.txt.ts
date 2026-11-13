import type { APIRoute } from 'astro';
import { config } from '../config';
import { showDrafts } from '../lib/site';

export const GET: APIRoute = () => {
  // Private preview builds must never be indexed.
  const body = showDrafts
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: /thanks/\n\nSitemap: ${config.domain}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
