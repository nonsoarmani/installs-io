import type { Guide } from '../types';

export const crispOnFramer: Guide = {
  slug: 'crisp-on-framer',
  toolId: 'crisp',
  platformId: 'framer',
  status: 'published',
  title: 'How to Install Crisp Live Chat on Framer',
  metaDescription:
    'Add the Crisp live chat widget and shared support inbox to your Framer website using Site Settings Custom Code in minutes.',
  whoItsFor:
    'Framer SaaS startups, agencies, and product landing pages using Crisp to chat with visitors in real time and automate customer support.',
  whatYouGet:
    'The Crisp live chat launcher active across every published Framer page with live visitor browsing context inside your Crisp workspace.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Framer project on a paid Site plan (Mini, Basic, Pro, or Business) required to unlock Custom Code',
    'A Crisp workspace with your Website ID copied from Settings -> Website Settings -> Setup Instructions',
    'Editor or Owner permissions inside your Framer workspace to publish changes',
  ],
  steps: [
    {
      title: 'Copy your Crisp HTML chatbox snippet from Website Settings',
      body: 'Open your Crisp dashboard, go to Settings -> Website Settings -> Setup Instructions, and copy your Website ID script.',
    },
    {
      title: 'Open Custom Code in Framer Site Settings',
      body: 'From your Framer editor toolbar, open Site Settings and locate the Custom Code fields to embed Crisp.',
    },
    {
      title: 'Paste the Crisp loader code into Start of <head> tag',
      body: 'Paste the Crisp snippet into the "Start of <head> tag" field inside Framer Site Settings, replacing YOUR_CRISP_WEBSITE_ID with your actual Website ID, and click Save.',
      code: {
        language: 'html',
        filename: 'Framer Site Settings -> Start of <head> tag',
        code: `<script type="text/javascript">
  window.$crisp=[];
  window.CRISP_WEBSITE_ID="YOUR_CRISP_WEBSITE_ID";
  (function(){
    d=document;
    s=d.createElement("script");
    s.src="https://crisp.chat";
    s.async=1;
    d.getElementsByTagName("head").appendChild(s);
  })();
</script>`,
      },
    },
    {
      title: 'Customize chatbox theme color and alignment in Crisp',
      body: 'Return to Crisp -> Settings -> Website Settings -> Chatbox & Email Appearance to match the chat launcher colors and corner position to your Framer design.',
    },
    {
      title: 'Publish your Framer project to launch the chat widget',
      body: 'Click Publish in the top-right corner of the Framer editor and select Update so the Crisp chatbox deploys to your live domain.',
    },
  ],
  verification: [
    {
      title: 'Confirm the Crisp chat bubble renders on your live Framer URL',
      body: 'Open your published Framer site in an incognito browser tab (not the Framer editor preview) and verify the Crisp chat launcher appears in the bottom corner.',
    },
    {
      title: 'Test live conversation delivery in your Crisp Inbox',
      body: 'Send a test message through the chatbox on your live Framer domain and confirm the conversation thread pops up immediately in your Crisp Inbox.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Custom Code section is locked inside Framer Site Settings',
      fix: 'Framer restricts site-wide Custom Code injection to paid Site plans; upgrade from the Free tier to at least a Mini or Basic plan before pasting the Crisp snippet.',
    },
    {
      problem: 'Crisp chat widget does not show up after saving in Site Settings',
      fix: 'Click Publish -> Update in the top-right corner of Framer after saving Site Settings, and verify your CRISP_WEBSITE_ID has no extra spaces or missing quotes.',
    },
    {
      problem: 'Crisp chat launcher overlaps with a Framer floating badge or cookie banner',
      fix: 'Open Crisp -> Settings -> Website Settings -> Chatbox & Email Appearance and switch the chatbox position from right to left so it clears your Framer UI elements.',
    },
  ],
  faqs: [
    {
      question: 'Does Crisp work on a free Framer site?',
      answer:
        'No. You need an active paid Framer Site plan (Mini, Basic, Pro, or Enterprise) to inject custom scripts on a live domain.',
    },
    {
      question: 'Does the Crisp chatbox stay open when visitors navigate between Framer pages?',
      answer:
        'Yes. Because Framer operates as a single-page React app and Site Settings Custom Code loads at the root document level, Crisp persists seamlessly across route changes.',
    },
    {
      question: 'Will Crisp slow down my Framer animations or Core Web Vitals?',
      answer:
        'No. The Crisp l.js script loads asynchronously, ensuring your Framer page layout, fonts, and motion effects render immediately without blocking.',
    },
  ],
  relatedSlugs: [
    'crisp-on-webflow',
    'crisp-on-squarespace',
    'crisp-on-wix',
  ],
  lastVerified: '2026-11-15',
};
