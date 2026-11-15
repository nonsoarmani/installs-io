import type { Guide } from '../types';

export const googleAnalytics4OnFramer: Guide = {
  slug: 'google-analytics-4-on-framer',
  toolId: 'ga4',
  platformId: 'framer',
  status: 'published',
  title: 'How to Install Google Analytics 4 (GA4) on Framer',
  metaDescription:
    'Connect Google Analytics 4 to your Framer website using your G- Measurement ID in Framer Site Settings to track visitors and conversions.',
  whoItsFor:
    'Framer designers, startups, and content creators who want first-party visitor analytics, pageview tracking, and conversion reports in GA4.',
  whatYouGet:
    'Google Analytics 4 tracking pageviews across Framer single-page route changes alongside Enhanced Measurement scroll and click events.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'An active Framer project (the built-in Google Analytics Measurement ID field works on both Free and paid Site plans)',
    'A Google Analytics 4 property with a Web Data Stream created in Google Analytics',
    'Editor or Owner permissions inside your Framer workspace to publish changes',
  ],
  steps: [
    {
      title: 'Copy your GA4 Measurement ID from Google Analytics',
      body: 'Open Google Analytics, click Admin in the bottom-left corner, choose Data Streams under Property settings, select your Web stream, and copy the G-XXXXXXXXXX Measurement ID.',
    },
    {
      title: 'Open General Settings in Framer Site Settings',
      body: 'Open your Framer project, click the gear icon (or Framer menu) in the top-left corner, select Site Settings, and stay on the General tab.',
    },
    {
      title: 'Paste your Measurement ID into the Google Analytics field',
      body: 'Scroll down to the Google Analytics section inside Framer Site Settings, paste your G-XXXXXXXXXX Measurement ID into the input box, and click Save.',
    },
    {
      title: 'Verify Enhanced Measurement is active inside GA4',
      body: 'Return to your GA4 Web Data Stream settings and confirm Enhanced Measurement is toggled on so page changes, scrolls, outbound clicks, and file downloads record automatically.',
    },
    {
      title: 'Publish your Framer website to push tracking live',
      body: 'Click Publish in the top-right corner of the Framer editor and select Update so your GA4 configuration deploys to your live domain.',
    },
  ],
  verification: [
    {
      title: 'Confirm active traffic in GA4 Realtime reports',
      body: 'Open your published Framer URL in an incognito browser tab, then check Google Analytics -> Reports -> Realtime to verify your active session appears within 30 seconds.',
    },
    {
      title: 'Inspect collect?v=2 network requests in Browser DevTools',
      body: 'Open Chrome DevTools -> Network tab on your live Framer site, filter by "collect?v=2", and confirm HTTP 200 requests fire with your G- Measurement ID.',
    },
  ],
  troubleshooting: [
    {
      problem: 'GA4 Realtime shows zero visitors after pasting the ID in Framer',
      fix: 'Click Publish -> Update in the top-right corner of Framer after saving Site Settings, and disable browser ad blockers while testing your live URL.',
    },
    {
      problem: 'Duplicate page_view events inflating GA4 session metrics',
      fix: 'Remove any manual gtag.js snippet pasted into Framer Custom Code or disconnect your GA4 tag inside Google Tag Manager if Framer’s native field is filled.',
    },
    {
      problem: 'Client-side page transitions between Framer pages are not counted',
      fix: 'Inside GA4 -> Admin -> Data Streams -> Web Stream -> Enhanced Measurement -> Settings (gear icon), confirm "Page changes based on browser history events" is checked.',
    },
  ],
  faqs: [
    {
      question: 'Can I install Google Analytics 4 on a free Framer plan?',
      answer:
        'Yes. Framer includes the dedicated Google Analytics Measurement ID field inside Site Settings on all plans, including Free sites, without needing Custom Code.',
    },
    {
      question: 'Does Framer’s native GA4 integration track single-page route changes?',
      answer:
        'Yes. Framer injects the official Google tag, and GA4 Enhanced Measurement automatically listens for History API route changes as visitors navigate between Framer pages.',
    },
    {
      question: 'Should I use Framer’s built-in GA4 field or install GA4 via Google Tag Manager?',
      answer:
        'Use Framer’s built-in Google Analytics field for fast, zero-code setup, or use Google Tag Manager if you need custom conversion triggers and server-side tagging.',
    },
  ],
  relatedSlugs: [
    'google-tag-manager-on-framer',
    'google-analytics-4-on-webflow',
    'google-analytics-4-on-squarespace',
  ],
  lastVerified: '2026-11-15',
};
