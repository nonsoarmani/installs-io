import type { Guide } from '../types';


export const googleTagManagerOnWix: Guide = {
  slug: 'google-tag-manager-on-wix',
  toolId: 'gtm',
  platformId: 'wix',
  status: 'published',
  title: 'How to Install Google Tag Manager (GTM) on Wix',
  metaDescription:
    'Connect Google Tag Manager to your Wix website using your GTM- Container ID inside Wix Marketing Integrations without manual code edits.',
  whoItsFor:
    'Marketers, analytics specialists, and Wix site owners who want to manage tracking pixels, conversion tags, and custom events from a single GTM container.',
  whatYouGet:
    'Google Tag Manager installed across every published Wix page with built-in dataLayer support for Wix Stores, Bookings, and Forms.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Wix website on a paid Premium plan with a connected custom domain',
    'A Google Tag Manager account and Web container with your GTM-XXXXXXX Container ID ready',
    'Owner or Website Manager permissions inside your Wix Dashboard under Marketing & SEO',
  ],
  steps: [
    {
      title: 'Copy your GTM Container ID from Google Tag Manager',
      body: 'Log in to Google Tag Manager, open your Workspace dashboard, and copy the Container ID formatted as GTM-XXXXXXX displayed in the top-right header bar.',
    },
    {
      title: 'Open Marketing Integrations in your Wix Dashboard',
      body: 'Sign in to your Wix site dashboard, select Marketing & SEO in the left sidebar, click Marketing Integrations, and locate the Google Tag Manager card.',
    },
    {
      title: 'Click Connect on the Google Tag Manager card',
      body: 'Select Connect on the Google Tag Manager integration card, then click the Connect Google Tag Manager button in the upper-right corner.',
    },
    {
      title: 'Paste your GTM- Container ID and save',
      body: 'Enter your GTM-XXXXXXX ID into the Container ID box (making sure there are no leading or trailing spaces) and click Save to bind the container to your site.',
    },
    {
      title: 'Publish your GTM workspace container',
      body: 'Return to Google Tag Manager, add or review your tags, and click Submit -> Publish in the top-right corner so your container serves live tags on your Wix domain.',
    },
  ],
  verification: [
    {
      title: 'Test your connection using GTM Tag Assistant Preview mode',
      body: 'Click Preview inside Google Tag Manager, enter your live Wix custom domain URL, click Connect, and verify the Tag Assistant badge confirms a successful connection.',
    },
    {
      title: 'Verify gtm.js loads in Browser DevTools',
      body: 'Open your published Wix site in an incognito tab, open DevTools -> Network tab, filter by "gtm.js", and confirm a 200 status response for your GTM- ID.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Google Tag Manager card is locked inside Wix Marketing Integrations',
      fix: 'Wix restricts Marketing Integrations to paid Premium sites with a connected custom domain; upgrade your site plan and assign your primary domain first.',
    },
    {
      problem: 'Tag Assistant fails to connect or shows a 404 for gtm.js',
      fix: 'Make sure you clicked Submit and Publish inside Google Tag Manager at least once, as brand-new unpublished GTM containers return a 404 error until published.',
    },
    {
      problem: 'Tags fire twice on every Wix page load',
      fix: 'Remove any manual GTM <head> or <body> snippets from Wix Custom Code so only the native Wix Marketing Integration injects your container.',
    },
  ],
  faqs: [
    {
      question: 'Should I install GTM via Wix Marketing Integrations or Wix Custom Code?',
      answer:
        'Use Wix Marketing Integrations because Wix automatically injects both the head and noscript snippets properly and pushes native Wix e-commerce and lead events into the dataLayer.',
    },
    {
      question: 'Does Wix push e-commerce events to the GTM dataLayer automatically?',
      answer:
        'Yes. When connected through Marketing Integrations, Wix automatically fires standard dataLayer events such as view_item, add_to_cart, begin_checkout, and purchase.',
    },
    {
      question: 'Can I run GA4, Meta Pixel, and Hotjar inside my Wix GTM container?',
      answer:
        'Yes. Once GTM is connected to Wix, you can deploy and manage GA4, Meta Pixel, Hotjar, LinkedIn Insight Tag, and custom scripts directly inside GTM without touching Wix settings.',
    },
  ],
  relatedSlugs: [
    'google-analytics-4-on-wix',
    'google-tag-manager-on-shopify',
    'google-tag-manager-on-webflow',
  ],
  lastVerified: '2026-11-15',
};
