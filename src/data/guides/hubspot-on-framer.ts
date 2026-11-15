import type { Guide } from '../types';

export const hubspotOnFramer: Guide = {
  slug: 'hubspot-on-framer',
  toolId: 'hubspot',
  platformId: 'framer',
  status: 'published',
  title: 'How to Install HubSpot Tracking Code & Live Chat on Framer',
  metaDescription:
    'Add the HubSpot tracking script, live chat widget, and lead forms to your Framer website using Site Settings Custom Code and Embed components.',
  whoItsFor:
    'Framer B2B startups, agencies, and SaaS teams using HubSpot CRM to capture leads, track visitor journeys, and chat with prospects.',
  whatYouGet:
    'HubSpot visitor tracking, contact attribution, pop-up forms, and the HubSpot live chat widget active across all published Framer routes.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Framer project on a paid Site plan (Mini, Basic, Pro, or Business) required to unlock Custom Code',
    'A HubSpot account with Super Admin or Account Access permissions to copy your Portal tracking script',
    'Editor or Owner permissions inside your Framer workspace to publish changes',
  ],
  steps: [
    {
      title: 'Copy your HubSpot tracking code from Account Settings',
      body: 'Open your HubSpot portal, navigate to Settings -> Tracking & Analytics -> Tracking Code, and copy your embed snippet.',
    },
    {
      title: 'Open Custom Code in Framer Site Settings',
      body: 'Open your Framer project, click the gear icon (or Framer menu) in the top-left corner, select Site Settings, and scroll down to the Custom Code section.',
    },
    {
      title: 'Paste the HubSpot snippet into End of <body> tag',
      body: 'Paste the HubSpot loader script into the "End of <body> tag" field in Framer Site Settings, replacing YOUR_HUB_ID with your actual HubSpot Portal ID, and click Save.',
      code: {
        language: 'html',
        filename: 'Framer Site Settings -> End of <body> tag',
        code: `<script type="text/javascript" id="hs-script-loader" async defer src="//://hs-scripts.com"></script>`,
      },
    },
    {
      title: 'Embed a standalone HubSpot form on a Framer page (optional)',
      body: 'In HubSpot -> Marketing -> Forms, copy your form embed code, then open the Insert (+) panel in Framer, drag an Embed component onto your canvas, select HTML, and paste the code.',
    },
    {
      title: 'Publish your Framer site to push HubSpot tracking live',
      body: 'Click Publish in the top-right corner of the Framer editor and select Update so your HubSpot script and any embedded forms deploy to your live domain.',
    },
  ],
  verification: [
    {
      title: 'Verify installation status inside HubSpot Settings',
      body: 'Open your published Framer URL in an incognito browser tab, then return to HubSpot -> Settings -> Tracking Code and confirm the green "Tracking code installed" badge appears.',
    },
    {
      title: 'Inspect the hs-scripts.com request in Browser DevTools',
      body: 'Open Chrome DevTools -> Network tab on your live Framer site, filter by "hs-scripts", and verify your Portal ID script loads with a 200 status.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Custom Code field is locked inside Framer Site Settings',
      fix: 'Framer requires a paid Site plan (Mini, Basic, Pro, or Business) to inject custom scripts; upgrade from the Free plan before pasting the HubSpot snippet.',
    },
    {
      problem: 'HubSpot says "Tracking code not detected" after saving in Framer',
      fix: 'Click Publish -> Update in the top-right corner of Framer after saving Site Settings, then visit your live URL in an incognito tab without ad blockers.',
    },
    {
      problem: 'HubSpot live chat widget does not show up on Framer pages',
      fix: 'Open HubSpot -> Conversations -> Chatflows, ensure your website chatflow toggle is switched ON, and check that your Framer domain matches the targeting rules.',
    },
  ],
  faqs: [
    {
      question: 'Does HubSpot work on a free Framer site?',
      answer:
        'No. Framer restricts site-wide Custom Code injection to paid Site plans, though you can still embed individual HubSpot forms on a free site using Framer’s Embed component.',
    },
    {
      question: 'Can HubSpot capture leads from native Framer Forms automatically?',
      answer:
        'Once the HubSpot tracking code is live in Framer, toggle on Non-HubSpot Forms inside HubSpot Tracking Code settings, or connect native Framer Forms directly to HubSpot via webhooks.',
    },
    {
      question: 'Does the HubSpot tracking script slow down Framer page loads?',
      answer:
        'No. The HubSpot script loads asynchronously with async and defer attributes at the end of the body tag, keeping Framer animations and Core Web Vitals fast.',
    },
  ],
  relatedSlugs: [
    'hubspot-on-webflow',
    'hubspot-on-squarespace',
    'hubspot-on-wix',
  ],
  lastVerified: '2026-11-15',
};
