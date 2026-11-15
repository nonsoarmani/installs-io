import type { Guide } from '../types';

export const crispOnSquarespace: Guide = {
  slug: 'crisp-on-squarespace',
  toolId: 'crisp',
  platformId: 'squarespace',
  status: 'published',
  title: 'How to Install Crisp Live Chat on Squarespace',
  metaDescription:
    'Add the Crisp live chat widget and shared support inbox to your Squarespace website using Squarespace Header Code Injection.',
  whoItsFor:
    'Squarespace startups, service businesses, and online stores using Crisp to chat with visitors in real time and automate customer support.',
  whatYouGet:
    'The Crisp live chat bubble active across every published Squarespace page with real-time visitor tracking inside your Crisp workspace.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Squarespace website on a Business, Commerce, Core, Plus, or Advanced plan (required for Code Injection)',
    'A Crisp workspace with your Website ID copied from Settings -> Website Settings -> Setup Instructions',
    'Website Owner or Administrator permissions inside your Squarespace dashboard',
  ],
  steps: [
    {
      title: 'Copy your Crisp HTML chatbox script from Website Settings',
      body: 'Log in to Crisp, click the Settings gear icon in the bottom-left sidebar, select Website Settings, open Setup Instructions -> HTML, and copy the JavaScript snippet.',
    },
    {
      title: 'Open Code Injection in your Squarespace dashboard',
      body: 'Log in to Squarespace and open Website -> Pages -> Website Tools -> Code Injection to embed Crisp.',
    },
    {
      title: 'Paste the Crisp snippet into the Header box and save',
      body: 'Paste the Crisp loader code into the Header field inside Code Injection, replacing YOUR_CRISP_WEBSITE_ID with your actual Website ID, and click Save.',
      code: {
        language: 'html',
        filename: 'Squarespace Header Code Injection',
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
      title: 'Customize chatbox colors and alignment in Crisp',
      body: 'Return to Crisp -> Settings -> Website Settings -> Chatbox & Email Appearance to match the chat widget accent color and corner alignment to your Squarespace template.',
    },
    {
      title: 'Test your live Squarespace domain in an incognito window',
      body: 'Open your public Squarespace URL in an incognito browser tab because Squarespace hides Header Code Injection scripts while you are logged into the editor.',
    },
  ],
  verification: [
    {
      title: 'Confirm the Crisp chat launcher loads on your public URL',
      body: 'Visit your live Squarespace domain in an incognito browser tab and verify the Crisp chat icon renders cleanly in the bottom corner.',
    },
    {
      title: 'Send a test message to your Crisp Inbox',
      body: 'Click the chat launcher on your live site, type a test message, and confirm the conversation thread appears immediately in your Crisp Inbox.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Code Injection is locked on my Squarespace account',
      fix: 'Crisp chat installation requires a paid Squarespace Business or Commerce plan.',
    },
    {
      problem: 'Crisp chat widget disappears whenever I edit pages in Squarespace',
      fix: 'Squarespace disables Header Code Injection inside the logged-in admin editor; open your live custom domain in a separate incognito window.',
    },
    {
      problem: 'Crisp chat bubble overlaps with a Squarespace cookie banner or floating button',
      fix: 'Open Crisp -> Settings -> Website Settings -> Chatbox & Email Appearance and switch the chatbox position to the opposite corner.',
    },
  ],
  faqs: [
    {
      question: 'Can I install Crisp on a Squarespace Personal plan?',
      answer:
        'No. Squarespace Personal plans block site-wide Code Injection, so you need at least a Business or Core plan to add the Crisp JavaScript snippet.',
    },
    {
      question: 'Does Crisp slow down Squarespace page load speed?',
      answer:
        'No. The Crisp l.js loader script runs asynchronously, ensuring your Squarespace images, fonts, and page sections render without delay.',
    },
    {
      question: 'Will Crisp work on Squarespace 7.0 templates with Ajax Loading enabled?',
      answer:
        'Yes. Because the Crisp snippet lives in the persistent site-wide Header Code Injection container, the chat widget stays open across Ajax page transitions.',
    },
  ],
  relatedSlugs: [
    'crisp-on-webflow',
    'crisp-on-wix',
    'tidio-on-squarespace',
  ],
  lastVerified: '2026-11-15',
};
