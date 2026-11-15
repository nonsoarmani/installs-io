import type { Platform } from './types';

const badge = (bg: string, label: string, size = 15) =>
  `data:image/svg+xml;utf8,` +
  encodeURIComponent(
    `<svg xmlns="http://` +
      `www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="${bg}"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="700" font-size="${size}">${label}</text></svg>`
  );

export const platforms: Platform[] = [
  {
    id: 'shopify',
    slug: 'shopify',
    name: 'Shopify',
    shortDescription: 'Online store platform.',
    longDescription:
      'Shopify is a platform for building and running an online store. These guides show how to add marketing, analytics and support tools to a Shopify store.',
    logo: '/logos/shopify.svg',
    websiteUrl: 'https://www.shopify.com',
  },
  {
    id: 'webflow',
    slug: 'webflow',
    name: 'Webflow',
    shortDescription: 'Visual website builder.',
    longDescription:
      'Webflow is a visual website builder. These guides show how to add tracking, chat and marketing tools to a Webflow site, usually with a small piece of custom code.',
    logo: '/logos/webflow.svg',
    websiteUrl: 'https://webflow.com',
  },
  {
    id: 'wordpress',
    slug: 'wordpress',
    name: 'WordPress',
    shortDescription: 'The most widely used website software.',
    longDescription:
      'WordPress is the most widely used website software. These guides show how to add analytics, ads tracking and chat to a WordPress site, mostly using plugins.',
    logo: '/logos/wordpress.svg',
    websiteUrl: 'https://wordpress.org',
  },
  {
    id: 'wix',
    slug: 'wix',
    name: 'Wix',
    shortDescription: 'All-in-one drag-and-drop website builder.',
    longDescription:
      'Wix is a popular drag-and-drop website builder for small businesses and online stores. These guides show how to add analytics, chat widgets, and marketing scripts using Wix Custom Code and app integrations.',
    logo: badge('#0C6EFC', 'WIX', 13),
    websiteUrl: 'https://wix.com',
  },
  {
    id: 'squarespace',
    slug: 'squarespace',
    name: 'Squarespace',
    shortDescription: 'Design-driven website and commerce platform.',
    longDescription:
      'Squarespace powers portfolios, service businesses, and online stores. These guides show how to connect tracking pixels, live chat, and CRM tools via Squarespace Code Injection.',
    logo: badge('#111111', 'SQ', 15),
    websiteUrl: 'https://squarespace.com',
  },
  {
    id: 'framer',
    slug: 'framer',
    name: 'Framer',
    shortDescription: 'Modern interactive website builder for startups.',
    longDescription:
      'Framer is a fast, modern website builder favored by SaaS startups and designers. These guides show how to add analytics, session replay, and live chat via Framer Site Settings Custom Code.',
    logo: badge('#0055FF', 'F', 18),
    websiteUrl: 'https://framer.com',
  },
];
