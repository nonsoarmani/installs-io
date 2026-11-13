import type { Platform } from './types';

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
];
