import type { Guide } from '../types';

export const googleTagManagerOnWebflow: Guide = {
  slug: 'google-tag-manager-on-webflow',
  toolId: 'gtm',
  platformId: 'webflow',
  status: 'published',
  title: 'How to Install Google Tag Manager on Webflow (Custom Code)',
  metaDescription:
    'Add Google Tag Manager (GTM) to your Webflow site using Site Settings Custom Code and an optional top-of-page noscript embed block.',
  whoItsFor:
    'Webflow designers, SaaS marketers, and growth teams who want to manage GA4, Meta Pixel, LinkedIn Insight Tag, and ad conversions inside one GTM container.',
  whatYouGet:
    'Google Tag Manager running site-wide across all published Webflow pages with optional noscript fallback support.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Webflow project on a paid Site plan (required to unlock Custom Code)',
    'A Google Tag Manager account and web container ID (GTM-XXXXXXX)',
    'Permission to publish changes to your live Webflow domain',
  ],
  steps: [
    {
      title: 'Copy your GTM container code snippets',
      body: 'Open ://google.com, click your container ID (GTM-XXXXXXX) in the top bar next to Workspace Changes, and copy the top <head> JavaScript snippet.',
    },
    {
      title: 'Navigate to Webflow Project Settings -> Custom Code',
      body: 'Open your Webflow Dashboard, click the gear/settings icon on your project card, and select the Custom Code tab from the left sidebar.',
    },
    {
      title: 'Paste the primary GTM script into Head Code',
      body: 'Paste the GTM <script> snippet into the Head Code input area, replacing GTM-XXXXXXX with your exact container ID.',
      code: {
        language: 'html',
        filename: 'Webflow Head Code',
        code: `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://googletagmanager.com;
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->`,
      },
      warning:
        'Do not paste the <noscript> iframe block inside Webflow Head Code—Webflow will reject or strip <iframe> tags placed inside <head>.',
    },
    {
      title: 'Add the GTM noscript fallback via Code Embed (optional)',
      body: 'If you want full noscript tracking for browsers with JavaScript disabled, open the Webflow Designer, drag a Code Embed element to the very top of your page body (or inside a shared Navbar symbol), and paste the <noscript> snippet.',
      code: {
        language: 'html',
        filename: 'Webflow Top Body Code Embed',
        code: `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://googletagmanager.com"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`,
      },
    },
    {
      title: 'Save Custom Code and deploy to your live domain',
      body: 'Click Save Changes in Webflow Site Settings, then open the Publish menu in the top-right corner and push the update to your live Webflow domain.',
    },
    {
      title: 'Test your container in Google Tag Assistant',
      body: 'In Google Tag Manager, click Preview, enter your live Webflow domain URL, click Connect, and verify that Tag Assistant detects your GTM container.',
    },
  ],
  verification: [
    {
      title: 'Confirm Tag Assistant connects to your live Webflow URL',
      body: 'Launch GTM Preview mode and verify the Tag Assistant summary window shows Container Loaded on your Webflow pages.',
    },
    {
      title: 'Inspect live HTML source for your GTM- ID',
      body: 'Open your published Webflow URL, right-click -> View Page Source, and search for your GTM-XXXXXXX ID inside <head>.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Webflow shows an error when saving Head Code',
      fix: 'Check that you only pasted the <script> portion into Head Code and did not include the <noscript><iframe> block inside <head>.',
    },
    {
      problem: 'Tag Assistant cannot connect to my Webflow site',
      fix: 'Make sure you clicked Publish after saving your Head Code, disable browser ad blockers during testing, and confirm you entered the exact live URL.',
    },
    {
      problem: 'GA4 pageviews are firing twice after installing GTM on Webflow',
      fix: 'If you previously entered a G- Measurement ID under Webflow Site Settings -> Apps & Integrations -> Google Analytics, clear that field if you are now firing GA4 through GTM.',
    },
  ],
  faqs: [
    {
      question: 'Is the GTM noscript iframe required on Webflow?',
      answer:
        'No. Over 99% of visitors run JavaScript, so pasting only the main <script> snippet in Webflow Site Settings -> Head Code is sufficient for standard analytics and ad pixels.',
    },
    {
      question: 'Can I install Google Tag Manager on a free Webflow Starter site?',
      answer:
        'No. Webflow requires a paid Site plan (Basic, CMS, Business, or Enterprise) to access Site Settings Custom Code.',
    },
    {
      question: 'How do I track Webflow form submissions inside Google Tag Manager?',
      answer:
        'Inside GTM, enable built-in Form variables, create a Form Submission trigger, and attach it to your GA4 event tag or Meta Pixel Lead tag.',
    },
  ],
  relatedSlugs: [
    'google-tag-manager-on-shopify',
    'google-tag-manager-on-wordpress',
    'google-analytics-4-on-webflow',
  ],
  lastVerified: '2026-11-14',
};
