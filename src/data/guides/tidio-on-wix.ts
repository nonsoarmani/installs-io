import type { Guide } from '../types';

export const tidioOnWix: Guide = {
  slug: 'tidio-on-wix',
  toolId: 'tidio',
  platformId: 'wix',
  status: 'published',
  title: 'How to Install Tidio Live Chat & Lyro AI on Wix',
  metaDescription:
    'Add Tidio live chat and Lyro AI support to your Wix store or website using either the Wix App Market integration or Custom Code.',
  whoItsFor:
    'Wix online stores, service brands, and support teams looking to answer customer questions in real time and automate FAQs with Tidio.',
  whatYouGet:
    'The Tidio live chat widget and automated chatbot flows running across your live Wix pages with visitor cart and page visibility.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'An active Wix website (paid Premium plan with custom domain required only if using the manual Custom Code method)',
    'A Tidio account with your chat widget appearance and welcome message configured',
    'Owner or Website Manager permissions inside your Wix Dashboard',
  ],
  steps: [
    {
      title: 'Choose the Wix App Market or manual Custom Code method',
      body: 'Install Tidio directly via the official Wix App Market for one-click setup, or use Wix Custom Code if you want manual control over script placement.',
    },
    {
      title: 'Add Tidio from the Wix App Market (recommended)',
      body: 'Open your Wix Dashboard, click Apps -> App Market in the left menu, search for "Tidio Live Chat & AI Chatbots", and click Add to Site.',
    },
    {
      title: 'Connect your Tidio account and authorize permissions',
      body: 'Review the Wix permission prompt, click Agree & Add, then sign in to your existing Tidio account or create a new workspace to link your widget.',
    },
    {
      title: 'Alternative: Paste your Tidio script into Wix Custom Code',
      body: 'If installing manually, copy your script from Tidio -> Settings -> Channels -> Live Chat -> Installation -> JavaScript and paste it into Wix Custom Code (Body - end).',
      code: {
        language: 'html',
        filename: 'Wix Custom Code (Body - end)',
        code: `<script src="//code.tidio.co/YOUR_TIDIO_PUBLIC_KEY.js" async></script>`,
      },
    },
    {
      title: 'Publish your Wix website to make the widget visible',
      body: 'Open the Wix Editor and click Publish in the top-right corner so the Tidio chat launcher renders on your public domain.',
    },
  ],
  verification: [
    {
      title: 'Confirm the Tidio launcher appears on your live Wix URL',
      body: 'Open your published Wix site in an incognito browser tab and verify the Tidio chat icon appears in the bottom corner.',
    },
    {
      title: 'Send a test message to your Tidio Inbox',
      body: 'Click the live chat widget on your Wix site, type a test message, and confirm it arrives immediately inside your Tidio Inbox dashboard.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Tidio chat widget does not show up after installing the Wix app',
      fix: 'Open Tidio -> Settings -> Channels -> Live Chat -> Appearance, confirm "Display chat" is enabled for both desktop and mobile, and re-publish your Wix site.',
    },
    {
      problem: 'Two Tidio chat bubbles appear on the same Wix page',
      fix: 'Remove either the Wix App Market Tidio integration or your manual code.tidio.co snippet in Wix Custom Code so only one instance loads.',
    },
    {
      problem: 'Tidio widget overlaps with Wix Chat or a back-to-top button',
      fix: 'Uninstall the built-in Wix Chat app from your Wix Editor or adjust the widget margin offset inside Tidio -> Settings -> Channels -> Live Chat -> Appearance.',
    },
  ],
  faqs: [
    {
      question: 'Do I need a paid Wix plan to install Tidio?',
      answer:
        'No. If you install Tidio using the official Wix App Market integration, it works even on free Wix sites without requiring Custom Code access.',
    },
    {
      question: 'Can Tidio see what pages or products a Wix visitor is viewing?',
      answer:
        'Yes. Once installed on Wix, Tidio displays real-time visitor browsing paths and active URLs inside your agent inbox so you can send contextual replies.',
    },
    {
      question: 'Does Tidio work with Wix mobile sites automatically?',
      answer:
        'Yes. Tidio automatically adapts its chat launcher and conversation window for mobile viewports without needing a separate Wix mobile configuration.',
    },
  ],
  relatedSlugs: [
    'tidio-on-shopify',
    'tidio-on-wordpress',
    'crisp-on-wix',
  ],
  lastVerified: '2026-11-15',
};
