import type { Guide } from '../types';

export const tidioOnWebflow: Guide = {
  slug: 'tidio-on-webflow',
  toolId: 'tidio',
  platformId: 'webflow',
  status: 'published',
  title: 'How to Install Tidio Live Chat & AI Agent on Webflow',
  metaDescription:
    'Add Tidio live chat and AI chatbots to your Webflow site by pasting your Tidio installation script into Webflow Site Settings Footer Code.',
  whoItsFor:
    'Webflow startups, SaaS companies, and agencies seeking real-time visitor chat, AI replies, and lead generation.',
  whatYouGet:
    'The Tidio live chat widget integrated across your published Webflow site and linked to your Tidio inbox.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Webflow project on a paid Site plan',
    'A Tidio account with access to your installation snippet',
    'Permission to publish changes to your live Webflow domain',
  ],
  steps: [
    {
      title: 'Copy your Tidio JavaScript snippet',
      body: 'In your Tidio panel, go to Settings -> Channels -> Live Chat -> Installation, choose Manual install, and copy your JavaScript snippet.',
    },
    {
      title: 'Open Webflow Project Settings -> Custom Code',
      body: 'In Webflow Dashboard, open your project settings and navigate to the Custom Code tab.',
    },
    {
      title: 'Paste the Tidio snippet into Footer Code',
      body: 'Paste your Tidio script snippet into the Footer Code section, replacing your public key placeholder as needed.',
      code: {
        language: 'html',
        filename: 'Webflow Footer Code',
        code: '\x3Cscript src="//code.tidio.co/YOUR_TIDIO_PUBLIC_KEY.js" async>\x3C/script>',
      },
      warning: 'Ensure your 32-character public key is pasted accurately without extra spaces.',
    },
    {
      title: 'Save and publish your Webflow project',
      body: 'Save the custom code changes and publish your Webflow site to make the widget live.',
    },
    {
      title: 'Test the live chat widget',
      body: 'Open your live Webflow domain in an incognito window and test sending a message through the chat bubble.',
    },
  ],
  verification: [
    {
      title: 'Confirm Tidio widget renders live',
      body: 'Verify the chat icon appears in the corner of your published Webflow domain.',
    },
    {
      title: 'Check Tidio status',
      body: 'Confirm in Tidio installation settings that the widget displays as installed.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Chat bubble does not appear',
      fix: 'Custom Code only displays on published sites; ensure you have clicked Publish in Webflow.',
    },
    {
      problem: 'Widget overlaps with site elements',
      fix: 'Adjust the widget position settings inside your Tidio dashboard.',
    },
    {
      problem: 'Chat shows offline',
      fix: 'Check your operator status toggle and operating hours in Tidio.',
    },
  ],
  faqs: [
    {
      question: 'Can I use Tidio on a free Webflow plan?',
      answer: 'No, a paid Webflow Site plan is required to add custom footer code.',
    },
    {
      question: 'Should it go in Head Code or Footer Code?',
      answer: 'Footer Code is recommended so page content loads first.',
    },
    {
      question: 'Will it impact site speed?',
      answer: 'No, the async attribute ensures it loads asynchronously.',
    },
  ],
  relatedSlugs: [
    'tidio-on-shopify',
    'tidio-on-wordpress',
    'crisp-on-webflow',
  ],
  lastVerified: '2026-11-15',
};
