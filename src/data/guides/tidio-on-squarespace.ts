import type { Guide } from '../types';

export const tidioOnSquarespace: Guide = {
  slug: 'tidio-on-squarespace',
  toolId: 'tidio',
  platformId: 'squarespace',
  status: 'published',
  title: 'How to Install Tidio Live Chat & AI Chatbot on Squarespace',
  metaDescription:
    'Add the Tidio live chat widget and Lyro AI support bot to your Squarespace website using Squarespace Footer Code Injection.',
  whoItsFor:
    'Squarespace online stores, service brands, and support teams looking to answer visitor questions in real time and automate FAQs with Tidio.',
  whatYouGet:
    'The Tidio live chat launcher and automated chatbot flows running across your published Squarespace pages with live visitor tracking.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Squarespace website on a Business, Commerce, Core, Plus, or Advanced plan (required for Code Injection)',
    'A Tidio account with your chat widget appearance and welcome message configured',
    'Website Owner or Administrator permissions inside your Squarespace dashboard',
  ],
  steps: [
    {
      title: 'Copy your Tidio JavaScript installation snippet',
      body: 'Log in to Tidio, navigate to Settings -> Channels -> Live Chat -> Installation -> JavaScript, and copy your unique script tag containing your public key.',
    },
    {
      title: 'Open Code Injection in your Squarespace dashboard',
      body: 'Open your Squarespace site menu, go to Website -> Pages -> Website Tools (or Settings -> Developer Tools), and select Code Injection.',
    },
    {
      title: 'Paste the Tidio script into the Footer box',
      body: 'Scroll down to the Footer field inside Code Injection, paste the Tidio snippet below with your actual public key, and click Save.',
      code: {
        language: 'html',
        filename: 'Squarespace Footer Code Injection',
        code: `<script src="//code.tidio.co/YOUR_TIDIO_PUBLIC_KEY.js" async></script>`,
      },
    },
    {
      title: 'Configure chat visibility and mobile positioning in Tidio',
      body: 'Return to Tidio -> Settings -> Channels -> Live Chat -> Appearance to verify the widget is enabled for both desktop and mobile screens.',
    },
    {
      title: 'Test your live Squarespace site in an incognito window',
      body: 'Open your public Squarespace domain in an incognito tab because Squarespace hides Footer Code Injection scripts while you are logged into the admin editor.',
    },
  ],
  verification: [
    {
      title: 'Confirm the Tidio chat bubble loads on your public URL',
      body: 'Visit your live Squarespace domain in an incognito browser tab and verify the Tidio chat launcher renders cleanly in the bottom corner.',
    },
    {
      title: 'Send a test message to your Tidio Inbox',
      body: 'Open the chat widget on your live site, type a test message, and confirm it arrives immediately inside your Tidio Inbox panel.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Code Injection is unavailable on my Squarespace plan',
      fix: 'Squarespace restricts Footer Code Injection on Personal plans; upgrade to a Business or Core plan (or higher) to add custom JavaScript snippets.',
    },
    {
      problem: 'Tidio widget disappears whenever I edit pages in Squarespace',
      fix: 'Squarespace automatically pauses third-party Footer scripts inside the logged-in editor frame; check your public custom domain in an incognito window.',
    },
    {
      problem: 'Tidio launcher overlaps with a Squarespace announcement bar or cookie banner',
      fix: 'Open Tidio -> Settings -> Channels -> Live Chat -> Appearance and increase the bottom or side button offset so it clears your Squarespace UI elements.',
    },
  ],
  faqs: [
    {
      question: 'Does Tidio have a native Squarespace Extension or does it use Code Injection?',
      answer:
        'Tidio installs cleanly on Squarespace using your single-line JavaScript snippet inside Footer Code Injection, giving you instant access to live chat and Lyro AI.',
    },
    {
      question: 'Will Tidio work on a Squarespace Personal plan?',
      answer:
        'No. Squarespace Personal plans do not include Code Injection, so you need at least a Business or Core plan to embed the Tidio script.',
    },
    {
      question: 'Can Tidio track which Squarespace pages a visitor is currently browsing?',
      answer:
        'Yes. Once the Tidio script is active in your Squarespace Footer, your Tidio Inbox displays each visitor’s active page URL and browsing history in real time.',
    },
  ],
  relatedSlugs: [
    'tidio-on-shopify',
    'tidio-on-wix',
    'crisp-on-squarespace',
  ],
  lastVerified: '2026-11-15',
};
