import type { Tool } from './types';

// NOTE: affiliateUrl is the plain website for now.
// TODO: replace with your real affiliate link once you join each program.
export const tools: Tool[] = [
  {
    id: 'klaviyo',
    slug: 'klaviyo',
    name: 'Klaviyo',
    category: 'Email & CRM',
    shortDescription: 'Email and SMS marketing built for online stores.',
    longDescription:
      'Klaviyo is an email and SMS marketing platform that is popular with online stores. These guides show you how to connect it to your site so it can collect subscribers and track shopping activity.',
    logo: '/logos/klaviyo.svg',
    websiteUrl: 'https://www.klaviyo.com',
    affiliateUrl: 'https://www.klaviyo.com', // TODO: affiliate link
    affiliateDisclosure: true,
    affiliateCtaText: "Don't have a Klaviyo account yet? Start a free trial",
    officialDocsUrl: 'https://help.klaviyo.com',
  },
  {
    id: 'meta-capi',
    slug: 'meta-conversions-api',
    name: 'Meta Conversions API',
    category: 'Analytics & Pixels',
    shortDescription: 'Send ad conversion events from your server to Meta.',
    longDescription:
      'The Meta Conversions API sends purchase and lead events straight from your server to Meta, so your Facebook and Instagram ad reporting stays accurate even when browsers block the pixel.',
    logo: '/logos/meta.svg',
    websiteUrl: 'https://www.facebook.com/business',
    affiliateUrl: 'https://www.facebook.com/business', // no affiliate program; plain link
    affiliateDisclosure: false,
    affiliateCtaText: 'Need a Meta Business account? Create one here',
    officialDocsUrl: 'https://developers.facebook.com/docs/marketing-api/conversions-api',
  },
  {
    id: 'ga4',
    slug: 'google-analytics-4',
    name: 'Google Analytics 4',
    category: 'Analytics & Pixels',
    shortDescription: "Google's free website and app analytics.",
    longDescription:
      "Google Analytics 4 (GA4) is Google's free analytics tool. It shows how many people visit your site, where they come from and what they do. These guides cover connecting it to your site.",
    logo: '/logos/ga4.svg',
    websiteUrl: 'https://analytics.google.com',
    affiliateUrl: 'https://analytics.google.com', // free product; plain link
    affiliateDisclosure: false,
    affiliateCtaText: 'Need a Google Analytics account? Create one free',
    officialDocsUrl: 'https://support.google.com/analytics',
  },
  {
    id: 'crisp',
    slug: 'crisp',
    name: 'Crisp',
    category: 'Live Chat & Support',
    shortDescription: 'Live chat and shared inbox for customer support.',
    longDescription:
      'Crisp adds a live chat bubble to your website and gives your team a shared inbox for answering customers. These guides show how to get the chat widget onto your site.',
    logo: '/logos/crisp.svg',
    websiteUrl: 'https://crisp.chat',
    affiliateUrl: 'https://crisp.chat', // TODO: affiliate link if one exists
    affiliateDisclosure: true,
    affiliateCtaText: "Don't have a Crisp account yet? Try it free",
    officialDocsUrl: 'https://help.crisp.chat',
  },
  {
    id: 'posthog',
    slug: 'posthog',
    name: 'PostHog',
    category: 'Product Analytics',
    shortDescription: 'Open-source product analytics, session replay and feature flags.',
    longDescription:
      'PostHog is a product analytics tool that records what people do on your site, including funnels, session replays and feature flags. These guides show how to connect it to your site.',
    logo: '/logos/posthog.svg',
    websiteUrl: 'https://posthog.com',
    affiliateUrl: 'https://posthog.com', // TODO: affiliate link if one exists
    affiliateDisclosure: true,
    affiliateCtaText: "Don't have a PostHog account yet? Start free",
    officialDocsUrl: 'https://posthog.com/docs',
  },
];
