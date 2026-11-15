import type { Guide } from '../types';

export const gohighlevelOnFramer: Guide = {
  slug: 'gohighlevel-on-framer',
  toolId: 'gohighlevel',
  platformId: 'framer',
  status: 'published',
  title: 'How to Install GoHighLevel Chat & Forms on Framer',
  metaDescription:
    'Add the GoHighLevel live chat widget, booking calendar, and lead forms to your Framer site using Site Settings Custom Code and Embed components.',
  whoItsFor:
    'Framer agencies, startups, and service businesses using GoHighLevel to capture website leads, book discovery calls, and automate SMS/email follow-ups.',
  whatYouGet:
    'The GoHighLevel chat widget running across all published Framer pages plus embedded booking calendars or lead capture forms.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Framer project on a paid Site plan (Mini, Basic, Pro, or Business) required to unlock Custom Code',
    'A GoHighLevel sub-account with your Chat Widget configured under Sites -> Chat Widget',
    'Editor or Owner permissions inside your Framer workspace to publish updates',
  ],
  steps: [
    {
      title: 'Copy your GoHighLevel Chat Widget script',
      body: 'Log in to your GoHighLevel sub-account, open Sites -> Chat Widget, customize your chat bubble colors and greeting, click Save, and copy the code via Get Code.',
    },
    {
      title: 'Open Custom Code in Framer Site Settings',
      body: 'Open your Framer project, click the Framer menu icon (or gear icon) in the top-left corner, select Site Settings, and scroll down to the Custom Code section.',
    },
    {
      title: 'Paste the GoHighLevel snippet into End of <body> tag',
      body: 'Paste the LeadConnector loader script into the "End of <body> tag" field in Framer Site Settings, replacing YOUR_GHL_WIDGET_ID with your actual widget ID, and click Save.',
      code: {
        language: 'html',
        filename: 'Framer Site Settings -> End of <body> tag',
        code: `<script 
  src="https://leadconnectorhq.com"  
  data-resources-url="https://leadconnectorhq.com" 
  data-widget-id="YOUR_GHL_WIDGET_ID">
</script>`,
      },
    },
    {
      title: 'Embed a GoHighLevel calendar or form on a canvas (optional)',
      body: 'Open the Insert (+) panel in Framer, search for "Embed", drag the Embed component onto your page, choose HTML, and paste your GoHighLevel iframe form or calendar code.',
    },
    {
      title: 'Publish your Framer site to push changes live',
      body: 'Click the Publish button in the top-right corner of the Framer editor and select Update so your custom code and embedded widgets deploy to your live domain.',
    },
  ],
  verification: [
    {
      title: 'Confirm the chat launcher appears on your published Framer URL',
      body: 'Open your live Framer domain in an incognito browser tab (not the Framer canvas preview) and verify the GoHighLevel chat bubble renders in the bottom corner.',
    },
    {
      title: 'Verify test lead capture inside GoHighLevel Conversations',
      body: 'Send a test message through the live chat widget on your Framer site and confirm a new contact and conversation thread appear inside GoHighLevel -> Conversations.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Custom Code field is disabled or shows an upgrade prompt in Framer',
      fix: 'Framer restricts site-wide Custom Code injection to paid Site plans; upgrade your project from the Free tier to at least a Mini or Basic plan first.',
    },
    {
      problem: 'GoHighLevel chat widget does not show up after saving in Site Settings',
      fix: 'Click Publish -> Update in the top-right corner of Framer after saving Site Settings, as Custom Code edits do not go live until you re-publish the project.',
    },
    {
      problem: 'Embedded GoHighLevel booking calendar is clipped inside a Framer frame',
      fix: 'Select the Embed component on your Framer canvas, set Width to Fill (100%), and set Height to Fixed (at least 750px) so the full calendar renders without inner scrollbars.',
    },
  ],
  faqs: [
    {
      question: 'Does GoHighLevel work on a free Framer site?',
      answer:
        'No. Framer requires a paid Site plan to unlock Custom Code injection in Site Settings, though the built-in Embed component works on any plan for single-page iframes.',
    },
    {
      question: 'Does the GoHighLevel chat widget stay active across Framer page transitions?',
      answer:
        'Yes. Because Framer acts as a single-page React application and Site Settings Custom Code loads at the root layout level, the chat widget persists smoothly across route changes.',
    },
    {
      question: 'Can I connect native Framer Forms directly to GoHighLevel?',
      answer:
        'Yes. You can either embed a GoHighLevel form via Framer’s Embed component or send native Framer Form submissions directly to a GoHighLevel Inbound Webhook URL.',
    },
  ],
  relatedSlugs: [
    'gohighlevel-on-webflow',
    'gohighlevel-on-squarespace',
    'gohighlevel-on-wix',
  ],
  lastVerified: '2026-11-15',
};
