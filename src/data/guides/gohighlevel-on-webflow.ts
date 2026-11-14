import type { Guide } from '../types';

export const gohighlevelOnWebflow: Guide = {
  slug: 'gohighlevel-on-webflow',
  toolId: 'gohighlevel',
  platformId: 'webflow',
  status: 'published',
  title: 'How to Install GoHighLevel Chat Widget & Forms on Webflow',
  metaDescription:
    'Add the GoHighLevel live chat widget, booking calendar, and lead forms to your Webflow site using Site Settings Custom Code and Code Embeds.',
  whoItsFor:
    'Webflow startups, agencies, and service businesses using GoHighLevel to capture website leads, book calls, and automate SMS/email follow-ups.',
  whatYouGet:
    'The GoHighLevel chat widget running across all published Webflow pages plus embedded calendars or lead forms.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Webflow project on a paid Site plan (required for Custom Code and Code Embeds)',
    'A GoHighLevel sub-account with your Chat Widget configured under Sites -> Chat Widget',
    'Permission to publish changes to your live Webflow domain',
  ],
  steps: [
    {
      title: 'Copy your GoHighLevel Chat Widget code',
      body: 'Log in to your GoHighLevel sub-account, go to Sites -> Chat Widget, customize your chat bubble, save your changes, and copy the JavaScript snippet via Get Code.',
    },
    {
      title: 'Open Webflow Site Settings -> Custom Code',
      body: 'In your Webflow Dashboard, open your project Settings and click on the Custom Code tab.',
    },
    {
      title: 'Paste the GoHighLevel script into the Footer Code',
      body: 'Paste the GoHighLevel loader script into the Footer Code section, replacing YOUR_GHL_WIDGET_ID with your actual widget ID.',
      code: {
        language: 'html',
        filename: 'Webflow Footer Code',
        code: `<script 
  src="https://leadconnectorhq.com"  
  data-resources-url="https://leadconnectorhq.com" 
  data-widget-id="YOUR_GHL_WIDGET_ID">
</script>`,
      },
    },
    {
      title: 'Embed a GoHighLevel calendar or form (optional)',
      body: 'Drag a Code Embed element onto your Webflow canvas and paste your GoHighLevel iframe form or booking calendar code.',
    },
    {
      title: 'Save and deploy your Webflow project',
      body: 'Hit Save Changes at the bottom of your Webflow Custom Code settings, open the Publish dropdown in the upper right, and deploy the update to your production domain.',
    },
  ],
  verification: [
    {
      title: 'Confirm chat bubble loads on your live Webflow URL',
      body: 'Open your published domain (not the Designer preview) and verify the GoHighLevel chat bubble appears in the bottom-right corner.',
    },
    {
      title: 'Verify test message in GoHighLevel Conversations',
      body: 'Send a test message through the widget and confirm a new contact and conversation appear inside GoHighLevel -> Conversations.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Chat widget does not show after saving in Webflow',
      fix: 'Ensure you clicked Publish in Webflow after saving Custom Code, as scripts only run on published domains.',
    },
    {
      problem: 'Embedded calendar layout looks cut off on mobile',
      fix: 'Set the Webflow Code Embed wrapper width to 100% and minimum height to 700px.',
    },
    {
      problem: 'GoHighLevel chat icon covers my Webflow cookie banner or floating button',
      fix: 'Open GoHighLevel -> Sites -> Chat Widget -> Style and adjust the widget launcher padding or alignment so it clears your existing Webflow elements.',
    },
  ],
  faqs: [
    {
      question: 'Does GoHighLevel work on a free Webflow Starter plan?',
      answer:
        'No. Webflow requires a paid Site plan to unlock Custom Code and Code Embed elements.',
    },
    {
      question: 'Can I embed both a GoHighLevel calendar and chat widget on the same page?',
      answer:
        'Yes. Place the chat widget script in Site Settings -> Footer Code and embed your calendar iframe inside a Code Embed block on your booking page.',
    },
    {
      question: 'Can I connect native Webflow forms directly to GoHighLevel?',
      answer:
        'Yes. You can either embed a GoHighLevel form directly via iframe or route native Webflow form submissions into GoHighLevel using a webhook or Zapier.',
    },
  ],
  relatedSlugs: [
    'gohighlevel-on-wordpress',
    'gohighlevel-on-shopify',
    'klaviyo-on-webflow',
  ],
  lastVerified: '2026-11-14',
};
