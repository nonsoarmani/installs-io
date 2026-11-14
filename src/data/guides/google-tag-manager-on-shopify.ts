import type { Guide } from '../types';

export const googleTagManagerOnShopify: Guide = {
  slug: 'google-tag-manager-on-shopify',
  toolId: 'gtm',
  platformId: 'shopify',
  status: 'published',
  title: 'How to Install Google Tag Manager on Shopify',
  metaDescription:
    'Guide to adding Google Tag Manager (GTM) to Shopify via theme.liquid and Customer Events.',
  whoItsFor:
    'Shopify merchants and analytics teams managing marketing tags.',
  whatYouGet:
    'Google Tag Manager container implementation across your Shopify storefront and checkout.',
  difficulty: 'Intermediate',
  estimatedMinutes: 20,
  prerequisites: [
    'Admin access to edit Shopify theme files',
    'Google Tag Manager web container ID (GTM-XXXXXXX)',
    'Backup copy of your Shopify theme',
  ],
  steps: [
    {
      title: 'Copy your GTM container snippets',
      body: 'Retrieve your GTM container <head> and <body> snippets from ://google.com.',
    },
    {
      title: 'Create a safety duplicate of your Shopify theme',
      body: 'Duplicate your active theme in Shopify Admin under Online Store -> Themes.',
    },
    {
      title: 'Paste the GTM head snippet into theme.liquid',
      body: 'Add the GTM primary script immediately after the opening <head> tag in layout/theme.liquid.',
    },
    {
      title: 'Paste the GTM noscript snippet after the opening body tag',
      body: 'Add the GTM noscript iframe fallback immediately after the opening <body> tag in layout/theme.liquid.',
    },
    {
      title: 'Add GTM to Shopify Customer Events for checkout tracking',
      body: 'Configure a Shopify Custom Pixel under Settings -> Customer events to track checkout conversions.',
    },
    {
      title: 'Verify container connection with Tag Assistant',
      body: 'Use Google Tag Manager Preview mode to test your live Shopify URL.',
    },
  ],
  verification: [
    {
      title: 'Confirm Tag Assistant connects to your storefront',
      body: 'Launch Preview mode and verify the Tag Assistant connection status.',
    },
    {
      title: 'Inspect page source for your GTM- ID',
      body: 'View page source to confirm GTM snippets are present.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Tag Assistant says "Could not connect" on my Shopify URL',
      fix: 'Disable password protection and pause browser ad blockers.',
    },
    {
      problem: 'Tags inside GTM do not fire on Shopify checkout or thank-you pages',
      fix: 'Use a Shopify Custom Pixel under Settings -> Customer events for checkout tracking.',
    },
    {
      problem: 'GA4 or Meta events are duplicating after adding GTM',
      fix: 'Disable native Shopify channel integrations if firing identical base tags through GTM.',
    },
  ],
  faqs: [
    {
      question: 'Do I need Shopify Plus to install Google Tag Manager?',
      answer:
        'No, GTM can be installed on standard Shopify plans via theme.liquid and Customer Events.',
    },
    {
      question: 'Should I publish my GTM container after installing the code?',
      answer:
        'Yes, submit and publish your container version in GTM so it is active live.',
    },
    {
      question: 'Can I manage GA4, Meta Pixel, and TikTok Pixel inside GTM on Shopify?',
      answer:
        'Yes, though native channel apps are an alternative unless custom dataLayer configuration is required.',
    },
  ],
  relatedSlugs: [
    'google-tag-manager-on-webflow',
    'google-tag-manager-on-wordpress',
    'google-analytics-4-on-shopify',
  ],
  lastVerified: '2026-11-14',
};
