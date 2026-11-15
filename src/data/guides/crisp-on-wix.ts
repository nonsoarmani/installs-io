import type { Guide } from '../types';

export const crispOnWix: Guide = {
  slug: 'crisp-on-wix',
  toolId: 'crisp',
  platformId: 'wix',
  status: 'published',
  title: 'How to Install Crisp Live Chat on Wix',
  metaDescription:
    'Add the Crisp live chat widget and shared support inbox to your Wix website using Wix Custom Code settings in minutes.',
  whoItsFor:
    'Wix startups, SaaS landing pages, and online stores using Crisp to chat with visitors, share helpdesk articles, and automate support replies.',
  whatYouGet:
    'The Crisp live chat bubble active across all published Wix pages with real-time visitor presence and conversation history in your Crisp inbox.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Wix website on a paid Premium plan with a connected custom domain (required for Custom Code)',
    'A Crisp workspace with your Website ID copied from Settings -> Website Settings -> Setup Instructions',
    'Owner or Website Manager permissions inside your Wix Dashboard',
  ],
  steps: [
    {
      title: 'Copy your Crisp HTML chatbox snippet',
      body: 'Log in to Crisp, click the Settings gear icon in the bottom-left sidebar, select Website Settings, open Setup Instructions -> HTML, and copy your JavaScript snippet.',
    },
    {
      title: 'Open Custom Code in your Wix Dashboard',
      body: 'Open your Wix site dashboard, scroll down the left navigation panel to Settings, click Development & Integrations, and select Custom Code.',
    },
    {
      title: 'Paste the Crisp snippet into Wix Custom Code',
      body: 'Click "+ Add Custom Code" in the top-right corner, paste the Crisp script below with your actual Website ID, and name it "Crisp Live Chat".',
      code: {
        language: 'html',
        filename: 'Wix Custom Code (Head)',
        code: `<script type="text/javascript">
  window.$crisp=[];
  window.CRISP_WEBSITE_ID="YOUR_CRISP_WEBSITE_ID";
  (function(){
    d=document;
    s=d.createElement("script");
    s.src="https://crisp.chat";
    s.async=1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
</script>`,
      },
    },
    {
      title: 'Set placement to All Pages in Head and click Apply',
      body: 'Under "Add Code to Pages," choose "All pages" with "Load code once" selected, set "Place Code in" to "Head" as recommended by Crisp, and click Apply.',
    },
    {
      title: 'Publish your Wix site to launch the chatbox',
      body: 'Open the Wix Editor and click Publish in the upper-right corner so the Crisp chat widget deploys to your live custom domain.',
    },
  ],
  verification: [
    {
      title: 'Confirm the Crisp chat launcher appears on your live Wix site',
      body: 'Open your published Wix custom domain in an incognito browser tab and verify the blue Crisp chat icon appears in the bottom corner.',
    },
    {
      title: 'Test live messaging inside your Crisp Inbox',
      body: 'Send a test message through the chatbox on your live Wix domain and confirm the conversation pops up immediately inside your Crisp Inbox.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Crisp chat icon does not appear after saving in Wix Custom Code',
      fix: 'Confirm you clicked Publish in the Wix Editor, verify your CRISP_WEBSITE_ID has no extra quotes or spaces, and check that your site is not blocked by an ad blocker.',
    },
    {
      problem: 'Crisp chatbox collides with Wix Chat or a floating WhatsApp button',
      fix: 'Remove the built-in Wix Chat widget in the Wix Editor or switch the Crisp chatbox side from right to left under Crisp -> Settings -> Website Settings -> Chatbox & Email Appearance.',
    },
    {
      problem: 'Crisp chatbox shows offline even when agents are logged in',
      fix: 'Check your availability schedule and operator status inside Crisp -> Settings -> Website Settings -> Availability to ensure online hours are active.',
    },
  ],
  faqs: [
    {
      question: 'Does Crisp have an official plugin in the Wix App Market?',
      answer:
        'Crisp recommends installing via Wix Custom Code using your Website ID snippet, which gives you the lightest bundle size and instant access to all Crisp chatbox features.',
    },
    {
      question: 'Will Crisp slow down my Wix website load time?',
      answer:
        'No. The Crisp client script loads asynchronously via l.js, so it renders independently without blocking your Wix page layout or images.',
    },
    {
      question: 'Can I customize the Crisp chat widget colors to match my Wix branding?',
      answer:
        'Yes. You can change the chatbox color theme, welcome message, and position anytime inside Crisp -> Settings -> Website Settings -> Chatbox & Email Appearance without editing your Wix code.',
    },
  ],
  relatedSlugs: [
    'crisp-on-webflow',
    'crisp-on-shopify',
    'crisp-on-wordpress',
  ],
  lastVerified: '2026-11-15',
};
