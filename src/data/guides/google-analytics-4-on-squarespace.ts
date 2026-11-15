import type { Guide } from '../types';

export const googleAnalytics4OnSquarespace: Guide = {
  slug: 'google-analytics-4-on-squarespace',
  toolId: 'ga4',
  platformId: 'squarespace',
  status: 'published',
  title: 'How to Install Google Analytics 4 (GA4) on Squarespace',
  metaDescription:
    'Connect Google Analytics 4 to your Squarespace website using your G- Measurement ID in External API Keys to track visitors and sales.',
  whoItsFor:
    'Squarespace site owners, bloggers, and online stores wanting first-party traffic reports, conversion tracking, and e-commerce analytics in GA4.',
  whatYouGet:
    'Google Analytics 4 tracking pageviews, scroll depth, outbound links, form submissions, and Squarespace Commerce purchases automatically.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'An active Squarespace website (works on Personal, Business, and Commerce plans via External API Keys)',
    'A Google Analytics 4 property with a Web Data Stream created in Google Analytics',
    'Website Owner or Administrator permissions inside your Squarespace dashboard',
  ],
  steps: [
    {
      title: 'Copy your GA4 Measurement ID from Google Analytics',
      body: 'Open Google Analytics, click Admin in the bottom-left corner, choose Data Streams under Property settings, open your Web stream, and copy the G-XXXXXXXXXX Measurement ID.',
    },
    {
      title: 'Open External API Keys in your Squarespace dashboard',
      body: 'Open your Squarespace site menu, navigate to Website -> Pages -> Website Tools -> External API Keys (or Settings -> Developer Tools -> External API Keys).',
    },
    {
      title: 'Paste your Measurement ID into the Google Analytics field',
      body: 'Locate the Google Analytics input box inside External API Keys, paste your G-XXXXXXXXXX Measurement ID with no extra spaces, and click Save at the top.',
    },
    {
      title: 'Confirm Enhanced Measurement is active inside GA4',
      body: 'Return to your GA4 Web Data Stream settings and verify Enhanced Measurement is toggled on so scrolls, outbound clicks, and file downloads track automatically.',
    },
    {
      title: 'Exclude logged-in Squarespace admin traffic (optional)',
      body: 'Inside GA4 -> Admin -> Data Streams -> Configure tag settings -> Define internal traffic, add your home or office IP address so your own site edits do not skew reports.',
    },
  ],
  verification: [
    {
      title: 'Verify live visits in GA4 Realtime reports',
      body: 'Open your public Squarespace domain in an incognito browser tab, then open Google Analytics -> Reports -> Realtime to confirm your active session appears within 30 seconds.',
    },
    {
      title: 'Check the collect?v=2 network call in Browser DevTools',
      body: 'Open Chrome DevTools -> Network tab on your live Squarespace site, filter by "collect?v=2", and confirm HTTP 200 requests fire with your G- Measurement ID.',
    },
  ],
  troubleshooting: [
    {
      problem: 'GA4 Realtime shows zero active users after saving in Squarespace',
      fix: 'Visit your public domain in an incognito window without ad blockers rather than testing inside the logged-in Squarespace editor, where Squarespace suppresses analytics scripts.',
    },
    {
      problem: 'Duplicate page_view events inflating GA4 session metrics',
      fix: 'Delete any manual gtag.js snippet pasted into Squarespace Header Code Injection or disconnect your GA4 tag inside Google Tag Manager if External API Keys is enabled.',
    },
    {
      problem: 'Squarespace Commerce order revenue is missing from GA4 Monetization reports',
      fix: 'Confirm you entered a GA4 G- Measurement ID rather than a legacy UA- ID, and wait up to 24 hours for standard GA4 e-commerce attribution tables to populate.',
    },
  ],
  faqs: [
    {
      question: 'Can I install Google Analytics 4 on a Squarespace Personal plan?',
      answer:
        'Yes. Unlike Code Injection, Squarespace includes the External API Keys integration field on all plans—including Personal plans—so you can connect GA4 without upgrading.',
    },
    {
      question: 'Does Squarespace automatically send e-commerce purchase events to GA4?',
      answer:
        'Yes. When connected through External API Keys, Squarespace automatically forwards view_item, add_to_cart, begin_checkout, and purchase events with order totals to GA4.',
    },
    {
      question: 'Should I connect GA4 via External API Keys or Google Tag Manager on Squarespace?',
      answer:
        'Use Squarespace External API Keys for hassle-free e-commerce and pageview tracking, or use Google Tag Manager if you require advanced custom button triggers and consent mode rules.',
    },
  ],
  relatedSlugs: [
    'google-tag-manager-on-squarespace',
    'meta-conversions-api-on-squarespace',
    'google-analytics-4-on-wix',
  ],
  lastVerified: '2026-11-15',
};
