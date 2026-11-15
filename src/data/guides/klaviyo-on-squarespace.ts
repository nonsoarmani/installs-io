import type { Guide } from '../types';

export const klaviyoOnSquarespace: Guide = {
  slug: 'klaviyo-on-squarespace',
  toolId: 'klaviyo',
  platformId: 'squarespace',
  status: 'published',
  title: 'How to Install Klaviyo Tracking & Signup Forms on Squarespace',
  metaDescription:
    'Connect Klaviyo to your Squarespace website using Code Injection to enable onsite tracking, popup forms, and automated email flows.',
  whoItsFor:
    'Squarespace Commerce brands, creators, and bloggers using Klaviyo to grow email/SMS subscriber lists, trigger popups, and track visitor activity.',
  whatYouGet:
    'Klaviyo onsite JavaScript tracking, popup and flyout signup forms, and Squarespace Commerce order syncing inside your Klaviyo workspace.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Squarespace website on a Business, Commerce, Core, Plus, or Advanced plan (required for Code Injection)',
    'A Klaviyo account with your 6-character Public API Key (Site ID) copied from Settings -> API Keys',
    'Website Owner or Administrator permissions inside your Squarespace dashboard',
  ],
  steps: [
    {
      title: 'Copy your Klaviyo Public API Key (Site ID)',
      body: 'Log in to Klaviyo, click your account name in the bottom-left corner, navigate to Settings -> API Keys, and copy your 6-character Public API Key.',
    },
    {
      title: 'Open Code Injection in your Squarespace dashboard',
      body: 'Head to Website -> Pages -> Website Tools -> Code Injection inside your Squarespace dashboard for Klaviyo.',
    },
    {
      title: 'Paste the Klaviyo onsite snippet into the Footer field',
      body: 'Scroll down to the Footer box inside Code Injection, paste the Klaviyo loader script below with your 6-character Public API Key, and click Save.',
      code: {
        language: 'html',
        filename: 'Squarespace Footer Code Injection',
        code: `<script async type="text/javascript" src="https://klaviyo.com"></script>`,
      },
    },
    {
      title: 'Connect Squarespace Commerce to sync orders (optional)',
      body: 'In Klaviyo -> Integrations -> Add Integration, search for "Squarespace", click Connect, and enter your Squarespace Commerce API key to sync customer purchases.',
    },
    {
      title: 'Embed an inline Klaviyo form on a page (optional)',
      body: 'To place an inline signup form inside a specific section, edit your Squarespace page, click Add Block -> Embed -> Code Snippet -> Embed Data, and paste your Klaviyo form div tag.',
    },
  ],
  verification: [
    {
      title: 'Confirm Active on Site tracking with the UTM parameter test',
      body: 'Open your live Squarespace domain in an incognito tab with ?utm_email=test@example.com at the end of the URL, then verify an Active on Site event appears in Klaviyo Metrics.',
    },
    {
      title: 'Verify a live Klaviyo popup triggers on your public site',
      body: 'Set a signup form to Live inside Klaviyo -> Sign-up Forms, visit your public Squarespace URL outside the admin editor, and confirm the popup renders cleanly.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Code Injection is disabled on my Squarespace account',
      fix: 'Squarespace requires a Business or Core plan (or higher) to paste custom JavaScript into Header or Footer Code Injection; upgrade your plan first.',
    },
    {
      problem: 'Klaviyo popup form does not appear while editing in Squarespace',
      fix: 'Squarespace pauses Footer Code Injection scripts inside the logged-in editor; open your live custom domain in an incognito window to test popups.',
    },
    {
      problem: 'Klaviyo signup form fonts or buttons inherit awkward Squarespace styles',
      fix: 'Open your form inside the Klaviyo Form Editor -> Styles tab and explicitly set font family, button padding, and input borders so theme CSS does not override them.',
    },
  ],
  faqs: [
    {
      question: 'Can I connect native Squarespace Newsletter Blocks directly to Klaviyo?',
      answer:
        'Squarespace Newsletter Blocks do not natively push to Klaviyo without Zapier or Make, so installing klaviyo.js and using Klaviyo native forms gives you direct list syncing and double opt-in.',
    },
    {
      question: 'Does the Squarespace Commerce integration in Klaviyo require a specific plan?',
      answer:
        'Yes. Generating a Squarespace Commerce API key to sync historical and real-time orders into Klaviyo requires a Squarespace Commerce Advanced (or Plus/Advanced) plan.',
    },
    {
      question: 'Where do I find my 6-character Klaviyo Public API Key?',
      answer:
        'Log in to Klaviyo, click your organization name in the bottom-left corner, open Settings -> API Keys, and copy the short 6-character Public API Key at the top.',
    },
  ],
  relatedSlugs: [
    'klaviyo-on-shopify',
    'klaviyo-on-webflow',
    'klaviyo-on-wix',
  ],
  lastVerified: '2026-11-15',
};
