import type { Guide } from '../types';

export const googleTagManagerOnFramer: Guide = {
  slug: 'google-tag-manager-on-framer',
  toolId: 'gtm',
  platformId: 'framer',
  status: 'published',
  title: 'How to Install Google Tag Manager (GTM) on Framer',
  metaDescription:
    'Add Google Tag Manager to your Framer website using Site Settings Custom Code head and body fields to manage all your tracking tags.',
  whoItsFor:
    'Framer marketers, agencies, and founders who want to deploy analytics pixels, ad conversion tags, and custom event tracking from one GTM container.',
  whatYouGet:
    'Google Tag Manager installed across every published Framer page with both the primary <head> script and fallback <body> noscript tag configured.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Framer project on a paid Site plan (Mini, Basic, Pro, or Business) required to unlock Custom Code',
    'A Google Tag Manager account and Web container with your GTM-XXXXXXX snippets ready',
    'Editor or Owner permissions inside your Framer workspace to publish updates',
  ],
  steps: [
    {
      title: 'Copy both GTM snippets from Google Tag Manager',
      body: 'Log in to Google Tag Manager, click your GTM-XXXXXXX Container ID in the top-right header bar, and copy both the <head> script and <body> noscript snippets.',
    },
    {
      title: 'Open Custom Code in Framer Site Settings',
      body: 'Select Site Settings in the upper toolbar of your Framer project and navigate to Custom Code to configure GTM.',
    },
    {
      title: 'Paste the primary GTM script into Start of <head> tag',
      body: 'Paste the first Google Tag Manager snippet into the "Start of <head> tag" field in Framer Site Settings, replacing GTM-XXXXXXX with your Container ID.',
      code: {
        language: 'html',
        filename: 'Framer Site Settings -> Start of <head> tag',
        code: `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s),
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://googletagmanager.com;
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->`,
      },
    },
    {
      title: 'Paste the noscript fallback into Start of <body> tag and save',
      body: 'Paste the second GTM noscript iframe snippet into the "Start of <body> tag" field in Framer Site Settings with your Container ID, then click Save.',
      code: {
        language: 'html',
        filename: 'Framer Site Settings -> Start of <body> tag',
        code: `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://googletagmanager.com"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`,
      },
    },
    {
      title: 'Publish both your GTM container and Framer website',
      body: 'Click Submit -> Publish inside Google Tag Manager, then click Publish -> Update in the top-right corner of Framer so your live site serves the container.',
    },
  ],
  verification: [
    {
      title: 'Connect Google Tag Assistant Preview to your live Framer URL',
      body: 'Click Preview inside Google Tag Manager, enter your live Framer custom domain, click Connect, and verify Tag Assistant confirms a successful container connection.',
    },
    {
      title: 'Verify gtm.js loads with a 200 status in Browser DevTools',
      body: 'Open your published Framer site in an incognito tab, open Chrome DevTools -> Network tab, filter by "gtm.js", and confirm a 200 status response.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Custom Code fields are disabled inside Framer Site Settings',
      fix: 'Framer requires a paid Site plan (Mini, Basic, Pro, or Business) to inject custom scripts; upgrade your site plan before adding GTM.',
    },
    {
      problem: 'Tag Assistant fails to connect or gtm.js returns a 404 error',
      fix: 'Ensure you clicked Publish -> Update in Framer after saving Site Settings, and verify you clicked Submit -> Publish inside your GTM workspace at least once.',
    },
    {
      problem: 'Pageview tags only fire on the first Framer landing page',
      fix: 'Because Framer uses client-side React routing between pages, add a History Change trigger alongside All Pages in GTM if you want tags firing on every route transition.',
    },
  ],
  faqs: [
    {
      question: 'Does Framer have a built-in field for a GTM Container ID?',
      answer:
        'Framer provides a dedicated Google Analytics Measurement ID field in Site Settings, whereas Google Tag Manager is installed via the Start of <head> and Start of <body> Custom Code boxes.',
    },
    {
      question: 'How do I track Framer single-page route changes in Google Tag Manager?',
      answer:
        'In GTM, create a History Change trigger (Triggers -> New -> History Change) and attach it to your GA4 or ad pixel tags so virtual page transitions in Framer are captured accurately.',
    },
    {
      question: 'Should I remove my Framer Site Settings GA4 ID if I deploy GA4 via GTM?',
      answer:
        'Yes. Remove any Measurement ID entered inside Framer’s native Google Analytics field if you fire GA4 through GTM so pageviews are not double-counted.',
    },
  ],
  relatedSlugs: [
    'google-analytics-4-on-framer',
    'google-tag-manager-on-webflow',
    'google-tag-manager-on-squarespace',
  ],
  lastVerified: '2026-11-15',
};
