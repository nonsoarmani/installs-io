import type { Guide } from '../types';

export const metaConversionsApiOnWix: Guide = {
  slug: 'meta-conversions-api-on-wix',
  toolId: 'meta-capi',
  platformId: 'wix',
  status: 'published',
  title: 'How to Set Up Meta Conversions API (CAPI) on Wix',
  metaDescription:
    'Connect Meta Conversions API and Meta Pixel to your Wix store or site using Wix Marketing Integrations for reliable server-side ad tracking.',
  whoItsFor:
    'Wix e-commerce merchants, course creators, and lead-gen brands running Facebook and Instagram ads who want resilient server-side event tracking.',
  whatYouGet:
    'First-party browser Pixel and server-side Meta Conversions API events (PageView, ViewContent, AddToCart, Lead, Purchase) synced automatically with deduplication.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Wix website on a paid Premium plan with a connected custom domain',
    'A Meta Business Suite account with admin access to your Meta Pixel (Dataset) and Ad Account',
    'Your domain verified inside Meta Business Settings -> Brand Safety and Suitability -> Domains',
  ],
  steps: [
    {
      title: 'Copy your Meta Dataset (Pixel) ID from Events Manager',
      body: 'Open Meta Events Manager, select Data Sources in the left menu, choose your Pixel dataset, and copy the 15-to-16 digit Dataset ID from Settings.',
    },
    {
      title: 'Open Marketing Integrations in your Wix Dashboard',
      body: 'Log in to your Wix site dashboard, navigate to Marketing & SEO -> Marketing Integrations, and click Connect on the Facebook Pixel & CAPI card.',
    },
    {
      title: 'Connect your Facebook account and select your Pixel',
      body: 'Click Connect Facebook Pixel, log in to your Meta Business profile when prompted, select your Business Manager, Ad Account, and Pixel ID, and confirm.',
    },
    {
      title: 'Enable Server-Side Conversions API sharing',
      body: 'During the Wix connection flow, make sure the "Share server-side events (Conversions API)" toggle is enabled so Wix sends backend events directly to Meta.',
    },
    {
      title: 'Review and save your Wix event mapping settings',
      body: 'Confirm that standard Wix events like PageView, Lead, AddToCart, InitiateCheckout, and Purchase are toggled on, then click Save to activate the integration.',
    },
  ],
  verification: [
    {
      title: 'Check Browser and Server events in Meta Test Events',
      body: 'Open Meta Events Manager -> Test Events, enter your live Wix URL, trigger a test pageview or form submission, and verify both Browser and Server events arrive.',
    },
    {
      title: 'Confirm event deduplication in Events Manager Overview',
      body: 'Wait 20 to 30 minutes after live traffic hits your site, open your Pixel Overview tab, and verify events show "Browser • Server" with deduplication active.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Conversions API toggle does not appear during Wix setup',
      fix: 'Disconnect the legacy Facebook Pixel integration in Wix Marketing Integrations, refresh the page, and reconnect using the updated Facebook Business Extension flow.',
    },
    {
      problem: 'Duplicate Purchase or Lead events inflating Meta Ads reporting',
      fix: 'Remove any manually pasted Meta Pixel base scripts from Wix Custom Code or Google Tag Manager so Wix manages both browser and server event IDs together.',
    },
    {
      problem: 'Low Event Match Quality (EMQ) score on server events',
      fix: 'Enable Automatic Advanced Matching inside Meta Events Manager -> Settings so Wix hashes customer email, phone, and name fields on checkout and form events.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a third-party app or GTM server container for Meta CAPI on Wix?',
      answer:
        'No. Wix includes a native, zero-code Meta Conversions API integration directly inside Marketing Integrations that handles server-side delivery and event deduplication automatically.',
    },
    {
      question: 'Should I keep my manual Meta Pixel script in Wix Custom Code?',
      answer:
        'No. Leaving a manual Pixel script in Wix Custom Code alongside the native integration causes duplicate events and breaks automatic event_id deduplication.',
    },
    {
      question: 'Which Wix actions are sent via Meta Conversions API?',
      answer:
        'Wix automatically transmits PageView, ViewContent, AddToCart, InitiateCheckout, Purchase, and Lead events from Wix Stores, Wix Bookings, and Wix Forms.',
    },
  ],
 relatedSlugs: [
  'meta-conversions-api-on-shopify',
  'meta-conversions-api-on-wordpress',
  'google-analytics-4-on-wix',
],

  lastVerified: '2026-11-15',
};
