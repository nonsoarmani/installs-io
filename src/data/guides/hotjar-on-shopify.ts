import type { Guide } from '../types';

export const hotjarOnShopify: Guide = {
  slug: 'hotjar-on-shopify',
  toolId: 'hotjar',
  platformId: 'shopify',
  status: 'published',
  title: 'How to Install Hotjar Heatmaps & Session Replay on Shopify',
  metaDescription:
    'Add Hotjar heatmaps, session recordings, and feedback polls to your Shopify store using theme.liquid and Shopify Customer Events.',
  whoItsFor:
    'Shopify merchants and conversion rate optimization (CRO) teams who want to watch real shopper sessions and see where visitors click or drop off.',
  whatYouGet:
    'Hotjar tracking script active across your Shopify storefront pages with automatic heatmap and session recording capture.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'Admin access to your Shopify store with permission to edit theme code',
    'A free or paid Hotjar (Contentsquare) account with your Site ID',
    'A live Shopify theme without storefront password protection',
  ],
  steps: [
    {
      title: 'Copy your Hotjar tracking snippet',
      body: 'Log in to Hotjar, navigate to your site settings, select your tracking code, and copy the JavaScript snippet containing your numeric Site ID.',
    },
    {
      title: 'Back up your live Shopify theme',
      body: 'In your Shopify Admin, duplicate your published theme under Online Store -> Themes before making code edits.',
    },
    {
      title: 'Paste the Hotjar snippet into theme.liquid',
      body: 'Open layout/theme.liquid in your theme code editor and paste your Hotjar tracking snippet right above the closing </head> tag.',
    },
    {
      title: 'Apply your theme code changes',
      body: 'Click Save in the upper-right area of the Shopify theme editor to publish the Hotjar script to your storefront.',
    },
    {
      title: 'Verify installation inside Hotjar',
      body: 'Return to your Hotjar dashboard, verify your live Shopify domain URL, and confirm Hotjar detects the active tracking script.',
    },
  ],
  verification: [
    {
      title: 'Confirm green Verified status in Hotjar',
      body: 'Verify your Shopify domain displays a green tracking active badge in your Hotjar dashboard.',
    },
    {
      title: 'Check incoming recordings in Hotjar',
      body: 'Browse your live Shopify store to confirm a session appears under Hotjar recordings.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Hotjar verification says tracking code not found on my Shopify URL',
      fix: 'Make sure your storefront password page is disabled and verify you pasted the snippet above </head> in theme.liquid.',
    },
    {
      problem: 'Heatmaps show blank white boxes where product images should be',
      fix: 'Verify your primary Shopify custom domain is listed in your Hotjar session targeting settings.',
    },
    {
      problem: 'Checkout steps do not appear in Hotjar session recordings',
      fix: 'Shopify restricts third-party session recording scripts from running on checkout screens for PCI payment security.',
    },
  ],
  faqs: [
    {
      question: 'Is there an official Hotjar app in the Shopify App Store?',
      answer:
        'Pasting the lightweight tracking snippet directly into theme.liquid is the recommended setup.',
    },
    {
      question: 'Does Hotjar have a free plan for Shopify stores?',
      answer:
        'Yes. Hotjar’s Basic plan is free forever and includes up to 35 daily sessions with unlimited heatmaps.',
    },
    {
      question: 'Will Hotjar slow down my Shopify page speed?',
      answer:
        'No. The Hotjar script loads asynchronously after your storefront renders so it does not block page load speed.',
    },
  ],
  relatedSlugs: [
    'hotjar-on-webflow',
    'hotjar-on-wordpress',
    'posthog-on-shopify',
  ],
  lastVerified: '2026-11-15',
};
