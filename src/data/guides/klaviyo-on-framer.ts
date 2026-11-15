import type { Guide } from '../types';

export const klaviyoOnFramer: Guide = {
  slug: 'klaviyo-on-framer',
  toolId: 'klaviyo',
  platformId: 'framer',
  status: 'published',
  title: 'How to Install Klaviyo Tracking & Signup Forms on Framer',
  metaDescription:
    'Add Klaviyo onsite tracking, popup signup forms, and embedded newsletter blocks to your Framer website using Site Settings Custom Code.',
  whoItsFor:
    'Framer e-commerce landing pages, creators, and digital brands using Klaviyo to capture email/SMS subscribers, trigger popups, and track visitor activity.',
  whatYouGet:
    'Klaviyo onsite JavaScript tracking, popup and flyout signup forms, and embedded newsletter forms active across your published Framer pages.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Framer project on a paid Site plan (Mini, Basic, Pro, or Business) required to unlock Custom Code',
    'A Klaviyo account with your 6-character Public API Key (Site ID) copied from Settings -> API Keys',
    'Editor or Owner permissions inside your Framer workspace to publish changes',
  ],
  steps: [
    {
      title: 'Copy your Klaviyo Public API Key (Site ID)',
      body: 'Log in to Klaviyo, click your organization name in the bottom-left corner, navigate to Settings -> API Keys, and copy your 6-character Public API Key.',
    },
    {
      title: 'Open Custom Code in Framer Site Settings',
      body: 'Head to Site Settings -> General -> Custom Code inside your Framer dashboard to add Klaviyo.',
    },
    {
      title: 'Paste the Klaviyo onsite script into End of <body> tag',
      body: 'Paste the Klaviyo loader snippet into the "End of <body> tag" field in Framer Site Settings, replacing YOUR_PUBLIC_API_KEY with your 6-character key, and click Save.',
      code: {
        language: 'html',
        filename: 'Framer Site Settings -> End of <body> tag',
        code: `<script async type="text/javascript" src="https://klaviyo.com"></script>`,
      },
    },
    {
      title: 'Embed an inline Klaviyo signup form on a Framer page (optional)',
      body: 'To place an inline form inside a section, open the Insert (+) panel in Framer, drag an Embed component onto your canvas, select HTML, and paste your Klaviyo form div snippet.',
    },
    {
      title: 'Publish your Framer site to activate Klaviyo tracking',
      body: 'Click Publish in the top-right corner of the Framer editor and select Update so the Klaviyo script and any embedded forms deploy to your live domain.',
    },
  ],
  verification: [
    {
      title: 'Verify Active on Site tracking with the UTM parameter test',
      body: 'Open your published Framer URL in an incognito tab with ?utm_email=test@example.com appended to the address, then check Klaviyo -> Analytics -> Metrics -> Active on Site.',
    },
    {
      title: 'Confirm a live Klaviyo popup renders on your Framer site',
      body: 'Publish a popup or flyout signup form inside Klaviyo -> Sign-up Forms, visit your live Framer URL in an incognito browser, and verify the form displays properly.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Custom Code field is locked inside Framer Site Settings',
      fix: 'Framer restricts site-wide Custom Code injection to paid Site plans; upgrade from the Free tier to at least a Mini or Basic plan before pasting the Klaviyo snippet.',
    },
    {
      problem: 'Klaviyo popup form does not trigger on my published Framer URL',
      fix: 'Click Publish -> Update in the top-right corner of Framer after saving Site Settings, and verify your form status is set to Live inside Klaviyo -> Sign-up Forms.',
    },
    {
      problem: 'Embedded Klaviyo inline form looks cramped inside a Framer frame',
      fix: 'Select the Embed component on your Framer canvas, set Width to Fill (100%), and set Height to Fit Content (or a fixed height of at least 350px) so inputs and buttons display cleanly.',
    },
  ],
  faqs: [
    {
      question: 'Does Klaviyo work on a free Framer plan?',
      answer:
        'No. Framer requires a paid Site plan (Mini, Basic, Pro, or Business) to unlock Custom Code injection in Site Settings so klaviyo.js can load across your site.',
    },
    {
      question: 'Can I sync native Framer Form submissions directly into a Klaviyo list?',
      answer:
        'Yes. You can either use Klaviyo native signup forms via klaviyo.js or connect native Framer Forms to Klaviyo using Zapier, Make, or Framer Form Webhooks.',
    },
    {
      question: 'Where do I find my Klaviyo company_id?',
      answer:
        'Log in to Klaviyo, click your account name in the bottom-left corner, open Settings -> API Keys, and copy the 6-character Public API Key listed at the top.',
    },
  ],
  relatedSlugs: [
    'klaviyo-on-shopify',
    'klaviyo-on-webflow',
    'klaviyo-on-squarespace',
  ],
  lastVerified: '2026-11-15',
};
