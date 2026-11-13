import type { Guide } from '../types';

export const googleAnalytics4OnWebflow: Guide = {
  slug: 'google-analytics-4-on-webflow',
  toolId: 'ga4',
  platformId: 'webflow',
  status: 'published',
  title: 'How to Install Google Analytics 4 on Webflow (Native Setup)',
  metaDescription:
    'Add Google Analytics 4 to your Webflow site in minutes by copying your G- Measurement ID into Webflow Site Settings and publishing.',
  whoItsFor:
    'Webflow designers, founders, and marketing teams who want clean visitor, scroll, and outbound click tracking without adding custom header scripts.',
  whatYouGet:
    'Native Google Analytics 4 tracking across all published Webflow pages with Enhanced Measurement enabled.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Webflow site on a paid Site plan or custom domain (or staging .webflow.io domain)',
    'A Google Analytics 4 property with a Web data stream created',
    'Access to Webflow Site Settings for your project',
  ],
  steps: [
    {
      title: 'Copy your GA4 Measurement ID',
      body: 'Log in to Google Analytics, click Admin (gear icon at the bottom left), and go to Data collection and modification -> Data streams. Click your website stream and copy the Measurement ID starting with G- (for example, G-XXXXXXXXXX).',
      note: 'Webflow only accepts GA4 Measurement IDs starting with G-. Legacy Universal Analytics IDs starting with UA- are no longer supported.',
    },
    {
      title: 'Open Webflow Site Settings',
      body: 'Log in to your Webflow Dashboard, hover over your project card, click the three dots icon, and select Settings (or open Site Settings from the top-left menu inside the Designer).',
    },
    {
      title: 'Paste your Measurement ID into Apps & Integrations',
      body: 'In Site Settings, click the Apps & Integrations tab in the left sidebar. Scroll down to the Google Analytics section and paste your G- Measurement ID into the Measurement ID field.',
    },
    {
      title: 'Save your integration settings',
      body: 'Click Save changes at the top or bottom of the Google Analytics card in Webflow.',
      warning:
        'Saving changes in Site Settings does not make tracking live. You must publish your Webflow site in the next step for the tag to take effect.',
    },
    {
      title: 'Publish your Webflow site',
      body: 'Click the Publish button in the top-right corner of Webflow, check your production domain(s), and click Publish to Selected Domains.',
    },
    {
      title: 'Verify live traffic in GA4 Realtime',
      body: 'Open your published website in a private browser tab and navigate between two pages. Open Google Analytics -> Reports -> Realtime to confirm your visit is recorded.',
    },
  ],
  verification: [
    {
      title: 'Inspect your live page source',
      body: 'Visit your published Webflow URL, right-click anywhere on the page, choose View Page Source, and press Ctrl+F (or Cmd+F) to search for your G- Measurement ID.',
    },
    {
      title: 'Confirm active users in GA4 Realtime',
      body: 'In Google Analytics Realtime, verify that at least 1 active user appears alongside page_view and scroll events.',
    },
  ],
  troubleshooting: [
    {
      problem: 'My Measurement ID is saved in Webflow, but GA4 shows no traffic',
      fix: 'Verify that you clicked Publish after saving your Site Settings, and make sure you are testing on the exact domain you published (custom domain vs. staging webflow.io domain).',
    },
    {
      problem: 'Page views are being counted twice on every visit',
      fix: 'Open Webflow Site Settings -> Custom Code -> Head Code and remove any manual Google tag (gtag.js) or Google Tag Manager script that is also loading the same GA4 property.',
    },
    {
      problem: 'Webflow form submissions are not showing as conversions',
      fix: 'In Google Analytics Admin -> Events, check if form_submit is firing automatically via Enhanced Measurement, then toggle "Mark as key event" next to form_submit.',
    },
  ],
  faqs: [
    {
      question: 'Should I use Webflow native GA4 integration or Google Tag Manager?',
      answer:
        'Use Webflow native integration if you only need standard page views, scroll depth, outbound clicks, and basic form tracking. Use Google Tag Manager if you need complex custom button triggers or multiple ad pixels.',
    },
    {
      question: 'Does Webflow automatically anonymize IP addresses with GA4?',
      answer:
        'Yes. Google Analytics 4 does not log or store individual IP addresses by default, so no extra toggle is required in Webflow.',
    },
    {
      question: 'Can I exclude my own visits while editing in Webflow?',
      answer:
        'Visits inside the Webflow Designer canvas are not tracked, and you can filter out your office or home IP address under GA4 Admin -> Data Streams -> Configure tag settings -> Define internal traffic.',
    },
  ],
  relatedSlugs: [
    'klaviyo-on-webflow',
    'crisp-on-webflow',
    'google-analytics-4-on-shopify',
  ],
  lastVerified: '2026-11-13',
};
