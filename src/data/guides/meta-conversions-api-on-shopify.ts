import type { Guide } from '../types';

export const metaConversionsApiOnShopify: Guide = {
  slug: 'meta-conversions-api-on-shopify',
  toolId: 'meta-capi',
  platformId: 'shopify',
  status: 'published',
  title: 'How to Install Meta Pixel & Conversions API on Shopify',
  metaDescription:
    'Set up Meta Pixel and server-side Conversions API (CAPI) on Shopify using the official Facebook & Instagram channel for accurate ad tracking.',
  whoItsFor:
    'Shopify merchants running Facebook and Instagram ads who want server-side purchase tracking that bypasses iOS privacy limits and browser ad blockers.',
  whatYouGet:
    'Both browser-side Meta Pixel and server-side Conversions API (CAPI) running natively on Shopify with automatic event deduplication.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'Admin access to your Shopify store',
    'A Meta Business Suite account with Admin access to your Ad Account and Meta Pixel (Dataset)',
    'A live Shopify domain without storefront password protection',
  ],
  steps: [
    {
      title: 'Install the Facebook & Instagram sales channel',
      body: 'In your Shopify Admin, search for "Facebook & Instagram" (published by Meta) in the top search bar or Shopify App Store, and click Install.',
    },
    {
      title: 'Connect your Meta account and Business Portfolio',
      body: 'Open the Facebook & Instagram channel in your Shopify left menu and click Start setup. Sign in with your Facebook profile and select the Business Portfolio, Facebook Page, and Ad Account connected to your store.',
    },
    {
      title: 'Set Data Sharing to Maximum for Conversions API',
      body: 'Inside the Facebook & Instagram channel, go to Settings -> Share data settings. Toggle Enable data-sharing ON, then select Maximum as your data-sharing level.',
      note: 'Selecting Maximum activates Meta Conversions API (server-side tracking) alongside the browser Pixel, sending hashed customer details like email and city to improve ad match quality.',
    },
    {
      title: 'Connect your Meta Pixel (Dataset)',
      body: 'In the pixel list below the data-sharing level, find your store Pixel ID (a 15- to 16-digit number from Meta Events Manager) and click Connect, then click Confirm to finish setup.',
    },
    {
      title: 'Remove duplicate manual pixel scripts',
      body: 'Check Online Store -> Themes -> Edit code -> theme.liquid and Settings -> Customer events to ensure you do not have an old Meta Pixel base code pasted manually.',
      warning:
        'Running both the native Facebook & Instagram channel and a manual theme.liquid pixel script will double-count conversions and distort your Meta Ads ROAS.',
    },
    {
      title: 'Test browser and server events in Meta Events Manager',
      body: 'Open Meta Events Manager -> Datasets, select your Pixel, and click the Test Events tab. Enter your store URL, browse a product, and confirm that events appear with both Browser and Server connection methods.',
    },
  ],
  verification: [
    {
      title: 'Confirm Maximum data sharing in Shopify',
      body: 'In Shopify Admin -> Facebook & Instagram -> Settings -> Share data settings, verify that your Pixel ID shows as Connected and the level is set to Maximum.',
    },
    {
      title: 'Check Event Match Quality in Meta Events Manager',
      body: 'In Meta Events Manager -> Overview, click on your Purchase or InitiateCheckout event after receiving real traffic. You should see both Browser and Server listed under Connection Method with deduplication active.',
    },
  ],
  troubleshooting: [
    {
      problem: 'My Pixel ID is grayed out or missing in Shopify setup',
      fix: 'Open Meta Business Settings -> Data Sources -> Datasets (or Pixels), select your pixel, and verify that your personal Facebook user profile is assigned Full Control permissions.',
    },
    {
      problem: 'Meta Events Manager shows duplicate Purchase events',
      fix: 'Remove any third-party Facebook pixel apps from your Shopify Apps list and delete any manual fbq("init") code inside theme.liquid or custom pixels.',
    },
    {
      problem: 'Server events are not showing up in Test Events',
      fix: 'Ensure your data-sharing level is set to Enhanced or Maximum (Standard only sends browser events) and wait 15 to 20 minutes after connecting for server events to initialize.',
    },
  ],
  faqs: [
    {
      question: 'Does Shopify Conversions API handle event deduplication automatically?',
      answer:
        'Yes. When connected through the official Facebook & Instagram channel on Maximum data sharing, Shopify automatically sends matching event IDs so Meta deduplicates browser and server events.',
    },
    {
      question: 'Do I need to pay for a third-party CAPI app on Shopify?',
      answer:
        'For most stores, no. Shopify’s free official Facebook & Instagram channel includes server-side Conversions API out of the box when set to Enhanced or Maximum.',
    },
    {
      question: 'What is the difference between Enhanced and Maximum data sharing?',
      answer:
        'Both send server-side events, but Maximum sends additional hashed customer parameters (such as name, location, and phone number) to give Meta higher Event Match Quality scores.',
    },
  ],
  relatedSlugs: [
    'google-analytics-4-on-shopify',
    'klaviyo-on-shopify',
    'meta-conversions-api-on-wordpress',
  ],
  lastVerified: '2026-11-13',
};
