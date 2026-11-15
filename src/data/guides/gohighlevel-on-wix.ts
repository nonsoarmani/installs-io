import type { Guide } from '../types';

export const gohighlevelOnWix: Guide = {
  slug: 'gohighlevel-on-wix',
  toolId: 'gohighlevel',
  platformId: 'wix',
  status: 'published',
  title: 'How to Install GoHighLevel Tracking & Chat Widget on Wix',
  metaDescription:
    'Add the GoHighLevel live chat widget and external tracking script to your Wix site using Wix Dashboard Custom Code settings.',
  whoItsFor:
    'Wix service businesses, consultants, and agencies using GoHighLevel to capture leads via live chat and track visitor sessions.',
  whatYouGet:
    'The GoHighLevel chat widget active across your live Wix pages alongside visitor attribution and embedded forms or calendars.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Wix website on a paid Premium plan with a connected custom domain (required to unlock Custom Code)',
    'A GoHighLevel sub-account with your Chat Widget configured under Sites -> Chat Widget',
    'Owner or Website Manager permissions inside your Wix Dashboard',
  ],
  steps: [
    {
      title: 'Copy your GoHighLevel Chat Widget snippet',
      body: 'Sign in to your GoHighLevel sub-account, navigate to Sites -> Chat Widget, adjust your bubble styling, click Save, and copy the script from Get Code.',
    },
    {
      title: 'Open Custom Code inside your Wix Dashboard',
      body: 'Open your Wix site dashboard, scroll down the left navigation menu to Settings, select Development & Integrations, and choose Custom Code.',
    },
    {
      title: 'Paste the GoHighLevel loader script into Custom Code',
      body: 'Click "+ Add Custom Code" in the upper right, paste the LeadConnector script below with your actual widget ID, and label it "GoHighLevel Chat Widget".',
      code: {
        language: 'html',
        filename: 'Wix Custom Code (Body - end)',
        code: `<script 
  src="https://leadconnectorhq.com"  
  data-resources-url="https://leadconnectorhq.com" 
  data-widget-id="YOUR_GHL_WIDGET_ID">
</script>`,
      },
    },
    {
      title: 'Select All Pages and Body - End placement',
      body: 'Under "Add Code to Pages," choose "All pages" with "Load code once" selected, then set "Place Code in" to "Body - end" and click Apply.',
    },
    {
      title: 'Embed a GoHighLevel form or calendar on a Wix page (optional)',
      body: 'In the Wix Editor, click Add Elements (+) -> Embed Code -> Embed HTML, paste your GoHighLevel iframe snippet, and resize the container to fit.',
    },
    {
      title: 'Publish your Wix website to push changes live',
      body: 'Click Publish in the top-right corner of the Wix Editor so your Custom Code container and embedded elements go live on your custom domain.',
    },
  ],
  verification: [
    {
      title: 'Confirm the chat bubble renders on your live Wix domain',
      body: 'Visit your published custom domain in an incognito window (not the Wix Editor preview) and check that the GoHighLevel chat icon appears in the corner.',
    },
    {
      title: 'Test lead capture inside GoHighLevel Conversations',
      body: 'Submit a test message through the live Wix chat widget and verify the contact record and message thread appear under GoHighLevel -> Conversations.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Custom Code option is locked inside Wix Settings',
      fix: 'Wix disables Custom Code on free sites and unverified domains; upgrade to a paid Premium plan and connect a custom domain first.',
    },
    {
      problem: 'Chat widget is missing after clicking Apply in Wix Custom Code',
      fix: 'Verify the toggle switch next to your GoHighLevel script is turned ON in Custom Code and that you published your site from the Wix Editor.',
    },
    {
      problem: 'Embedded GoHighLevel calendar displays a vertical scrollbar on Wix',
      fix: 'Select the HTML iframe box in the Wix Editor and drag its height handle to at least 750px so the full booking widget fits cleanly.',
    },
  ],
  faqs: [
    {
      question: 'Can I install GoHighLevel on a free Wix site?',
      answer:
        'No. Wix requires both a paid Premium plan and a connected custom domain before Custom Code injection becomes available.',
    },
    {
      question: 'Should I install GoHighLevel via Wix Custom Code or an HTML Embed box?',
      answer:
        'Use Wix Custom Code (set to All pages and Body - end) for the site-wide chat widget, and use Embed HTML blocks only for specific page forms or calendars.',
    },
    {
      question: 'Can I send Wix native form leads into GoHighLevel?',
      answer:
        'Yes. You can either replace native Wix forms with embedded GoHighLevel forms or connect Wix Automations to GoHighLevel via webhooks or Zapier.',
    },
  ],
  relatedSlugs: [
    'gohighlevel-on-webflow',
    'gohighlevel-on-wordpress',
    'gohighlevel-on-shopify',
  ],
  lastVerified: '2026-11-15',
};
