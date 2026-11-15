import type { Guide } from '../types';

export const googleAnalytics4OnWix: Guide = {
  slug: 'google-analytics-4-on-wix',
  toolId: 'ga4',
  platformId: 'wix',
  status: 'published',
  title: 'How to Install Google Analytics 4 (GA4) on Wix',
  metaDescription:
    'Add Google Analytics 4 to your Wix website using your G- Measurement ID in Wix Marketing Integrations to track traffic and conversions.',
  whoItsFor:
    'Wix website owners, bloggers, and online store operators who want first-party visitor analytics, funnel reports, and conversion tracking in GA4.',
  whatYouGet:
    'Google Analytics 4 tracking pageviews, scroll depth, outbound clicks, form leads, and Wix Stores e-commerce events automatically.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Wix website upgraded to a paid Premium plan with a connected custom domain',
    'A Google Analytics 4 property with a Web Data Stream created in Google Analytics',
    'Admin or Editor access to your Wix Dashboard under Marketing & SEO',
  ],
  steps: [
    {
      title: 'Copy your GA4 Measurement ID from Google Analytics',
      body: 'Open Google Analytics, click Admin in the bottom-left corner, select Data Streams under Property settings, open your Web stream, and copy the G-XXXXXXXXXX Measurement ID.',
    },
    {
      title: 'Navigate to Marketing Integrations in your Wix Dashboard',
      body: 'Log in to your Wix site dashboard, select Marketing & SEO from the left sidebar, click Marketing Integrations, and locate the Google Analytics card.',
    },
    {
      title: 'Connect Google Analytics to your Wix site',
      body: 'Click Connect on the Google Analytics card, then select Connect Google Analytics in the top-right corner of the integration page.',
    },
    {
      title: 'Paste your Measurement ID and configure IP anonymization',
      body: 'Paste your G- Measurement ID into the input field, choose whether to enable IP anonymization if required by your privacy policy, and click Save.',
    },
    {
      title: 'Verify Enhanced Measurement inside GA4',
      body: 'Return to your GA4 Web Data Stream settings and confirm Enhanced Measurement is toggled on so scrolls, outbound clicks, and site search events record automatically.',
    },
  ],
  verification: [
    {
      title: 'Watch live traffic in GA4 Realtime reports',
      body: 'Open your published Wix custom domain in an incognito tab, then check Reports -> Realtime in Google Analytics to confirm your active session appears within 30 seconds.',
    },
    {
      title: 'Inspect the gtag.js network request in Browser DevTools',
      body: 'Open Chrome DevTools -> Network tab on your live Wix site, filter by "collect?v=2", and verify HTTP 200 requests are firing with your G- Measurement ID.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Google Analytics integration button is locked in Wix',
      fix: 'Wix requires a paid Premium plan and a connected primary domain before third-party analytics integrations can be enabled.',
    },
    {
      problem: 'GA4 Realtime shows zero visitors after saving the Measurement ID',
      fix: 'Disable browser ad blockers, ensure you are visiting your live custom domain rather than the Wix Editor preview, and double-check for extra spaces in your G- ID.',
    },
    {
      problem: 'Duplicate page_view events inflating GA4 session counts',
      fix: 'Remove any hardcoded gtag.js scripts from Wix Custom Code or disconnect your GA4 tag inside Google Tag Manager if Wix native integration is active.',
    },
  ],
  faqs: [
    {
      question: 'Should I connect GA4 to Wix directly or through Google Tag Manager?',
      answer:
        'Connect GA4 directly via Wix Marketing Integrations if you want automatic Wix Stores e-commerce tracking out of the box; use GTM only if you need complex custom event triggers.',
    },
    {
      question: 'Does Wix automatically send e-commerce purchase events to GA4?',
      answer:
        'Yes. When connected through Wix Marketing Integrations, Wix automatically forwards view_item, add_to_cart, begin_checkout, and purchase events with revenue data to GA4.',
    },
    {
      question: 'Can I still use an old Universal Analytics UA- tracking ID on Wix?',
      answer:
        'No. Google retired Universal Analytics, so Wix Marketing Integrations only accepts active GA4 Measurement IDs starting with G-.',
    },
  ],
  relatedSlugs: [
    'google-tag-manager-on-wix',
    'meta-conversions-api-on-wix',
    'google-analytics-4-on-shopify',
  ],
  lastVerified: '2026-11-15',
};
