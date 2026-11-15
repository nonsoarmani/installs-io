import type { Guide } from '../types';

export const gohighlevelOnSquarespace: Guide = {
  slug: 'gohighlevel-on-squarespace',
  toolId: 'gohighlevel',
  platformId: 'squarespace',
  status: 'published',
  title: 'How to Install GoHighLevel Chat & Forms on Squarespace',
  metaDescription:
    'Add the GoHighLevel live chat widget, booking calendar, and lead forms to your Squarespace site using Code Injection and Embed Blocks.',
  whoItsFor:
    'Squarespace service providers, coaches, and agencies using GoHighLevel to capture leads, book appointments, and automate SMS/email follow-ups.',
  whatYouGet:
    'The GoHighLevel chat widget running across your Squarespace pages alongside embedded booking calendars and lead capture forms.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Squarespace site on a Business, Commerce, Core, Plus, or Advanced plan (required for Code Injection)',
    'A GoHighLevel sub-account with your Chat Widget configured under Sites -> Chat Widget',
    'Website Owner or Administrator permissions inside your Squarespace dashboard',
  ],
  steps: [
    {
      title: 'Copy your GoHighLevel Chat Widget script',
      body: 'Log in to your GoHighLevel sub-account, go to Sites -> Chat Widget, customize your bubble colors and greeting, click Save, and copy the code from Get Code.',
    },
    {
      title: 'Open Code Injection in your Squarespace dashboard',
      body: 'Open your Squarespace site menu, navigate to Website -> Pages -> Website Tools (or Settings -> Developer Tools), and select Code Injection.',
    },
    {
      title: 'Paste the GoHighLevel script into the Footer box',
      body: 'Scroll down to the Footer field inside Code Injection, paste the LeadConnector script below with your actual widget ID, and click Save.',
      code: {
        language: 'html',
        filename: 'Squarespace Footer Code Injection',
        code: `<script 
  src="https://leadconnectorhq.com"  
  data-resources-url="https://leadconnectorhq.com" 
  data-widget-id="YOUR_GHL_WIDGET_ID">
</script>`,
      },
    },
    {
      title: 'Embed a GoHighLevel form or calendar on a page (optional)',
      body: 'Open any Squarespace page in edit mode, click Add Block -> Embed -> Code Snippet -> Embed Data, and paste your GoHighLevel form or calendar iframe code.',
    },
    {
      title: 'Test your live Squarespace domain outside the editor',
      body: 'Open your public Squarespace URL in an incognito browser tab since Squarespace disables third-party scripts while you are logged into the page editor.',
    },
  ],
  verification: [
    {
      title: 'Verify the chat bubble renders on your live Squarespace URL',
      body: 'Visit your published Squarespace domain in an incognito window and confirm the GoHighLevel chat launcher appears in the bottom-right corner.',
    },
    {
      title: 'Check incoming test leads in GoHighLevel Conversations',
      body: 'Send a test message through the chat widget on your live site and confirm a new contact and conversation thread appear inside GoHighLevel -> Conversations.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Code Injection is locked with an "Upgrade to Business" banner in Squarespace',
      fix: 'Squarespace restricts site-wide Code Injection and JavaScript embeds to Business plans and higher; upgrade your billing plan to unlock the Footer field.',
    },
    {
      problem: 'Chat widget does not show while previewing inside the Squarespace Editor',
      fix: 'Squarespace intentionally blocks custom footer scripts inside the logged-in editor frame; open your live domain in an incognito tab to view the widget.',
    },
    {
      problem: 'Embedded GoHighLevel calendar gets cut off at the bottom on Squarespace',
      fix: 'Disable "Ajax Loading" if using an older Squarespace 7.0 Brine template, and ensure the GoHighLevel iframe script includes its auto-resize script tag.',
    },
  ],
  faqs: [
    {
      question: 'Can I install GoHighLevel on a Squarespace Personal plan?',
      answer:
        'No. Squarespace Personal plans block site-wide Code Injection and strip JavaScript tags from Embed blocks, so you need at least a Business or Core plan.',
    },
    {
      question: 'Why does the GoHighLevel chat widget disappear when I edit my Squarespace site?',
      answer:
        'Squarespace automatically pauses third-party Footer scripts while you are logged into the admin editor so scripts do not interfere with drag-and-drop editing.',
    },
    {
      question: 'Can I connect native Squarespace Form Blocks directly to GoHighLevel?',
      answer:
        'Yes. You can either embed a GoHighLevel form directly via an Embed block or route native Squarespace Form submissions into GoHighLevel using Zapier or Make.',
    },
  ],
  relatedSlugs: [
    'gohighlevel-on-webflow',
    'gohighlevel-on-wix',
    'gohighlevel-on-wordpress',
  ],
  lastVerified: '2026-11-15',
};
