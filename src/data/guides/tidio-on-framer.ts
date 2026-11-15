import type { Guide } from '../types';

export const tidioOnFramer: Guide = {
  slug: 'tidio-on-framer',
  toolId: 'tidio',
  platformId: 'framer',
  status: 'published',
  title: 'How to Install Tidio Live Chat & Lyro AI on Framer',
  metaDescription:
    'Add the Tidio live chat widget and Lyro AI support bot to your Framer website using Site Settings Custom Code in minutes.',
  whoItsFor:
    'Framer startups, agencies, and service businesses looking to engage website visitors in real time and automate support replies with Tidio.',
  whatYouGet:
    'The Tidio live chat launcher and automated chatbot flows active across every published Framer page with live visitor tracking.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Framer project on a paid Site plan (Mini, Basic, Pro, or Business) required to unlock Custom Code',
    'A Tidio account with your chat widget colors, greeting, and public installation key configured',
    'Editor or Owner permissions inside your Framer workspace to publish changes',
  ],
  steps: [
    {
      title: 'Copy your Tidio JavaScript installation snippet',
      body: 'Log in to Tidio, navigate to Settings -> Channels -> Live Chat -> Installation -> JavaScript, and copy the script tag containing your unique public key.',
    },
    {
      title: 'Open Custom Code in Framer Site Settings',
      body: 'In your Framer editor, click Site Settings at the top right and scroll down to the Custom Code section for Tidio.',
    },
    {
      title: 'Paste the Tidio script into End of <body> tag and save',
      body: 'Paste the Tidio loader snippet into the "End of <body> tag" field inside Framer Site Settings, replacing YOUR_TIDIO_PUBLIC_KEY with your actual key, and click Save.',
      code: {
        language: 'html',
        filename: 'Framer Site Settings -> End of <body> tag',
        code: `<script src="//code.tidio.co/YOUR_TIDIO_PUBLIC_KEY.js" async></script>`,
      },
    },
    {
      title: 'Configure desktop and mobile chat visibility in Tidio',
      body: 'Return to Tidio -> Settings -> Channels -> Live Chat -> Appearance to confirm "Display chat" is enabled for both desktop and mobile viewports.',
    },
    {
      title: 'Publish your Framer website to launch the chat widget',
      body: 'Click Publish in the top-right corner of the Framer editor and select Update so the Tidio chat launcher deploys to your live domain.',
    },
  ],
  verification: [
    {
      title: 'Confirm the Tidio chat bubble renders on your live Framer URL',
      body: 'Open your published Framer domain in an incognito browser tab (not the Framer editor preview) and verify the Tidio chat launcher appears in the bottom corner.',
    },
    {
      title: 'Send a test message to your Tidio Inbox',
      body: 'Click the chat launcher on your live Framer site, type a test message, and confirm it arrives immediately inside your Tidio Inbox panel.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Custom Code field is locked inside Framer Site Settings',
      fix: 'Framer restricts site-wide Custom Code injection to paid Site plans; upgrade from the Free tier to at least a Mini or Basic plan before pasting the Tidio snippet.',
    },
    {
      problem: 'Tidio chat widget does not show up after saving in Site Settings',
      fix: 'Click Publish -> Update in the top-right corner of Framer after saving Site Settings, and verify your code.tidio.co URL has no extra spaces or typos.',
    },
    {
      problem: 'Tidio launcher overlaps with the "Made in Framer" badge or a floating button',
      fix: 'Open Tidio -> Settings -> Channels -> Live Chat -> Appearance and increase the bottom or side button offset (or switch alignment to the left) so it clears existing badges.',
    },
  ],
  faqs: [
    {
      question: 'Does Tidio work on a free Framer plan?',
      answer:
        'No. Framer requires a paid Site plan (Mini, Basic, Pro, or Business) to unlock Custom Code injection in Site Settings.',
    },
    {
      question: 'Does the Tidio chat window stay open across Framer page transitions?',
      answer:
        'Yes. Because Framer runs as a single-page React application and Site Settings Custom Code loads at the root layout level, active Tidio chats persist smoothly between pages.',
    },
    {
      question: 'Will Tidio slow down my Framer animations or page load speed?',
      answer:
        'No. The Tidio script includes the async attribute and sits at the end of the body tag, allowing your Framer layout, fonts, and motion effects to render first.',
    },
  ],
  relatedSlugs: [
    'tidio-on-shopify',
    'tidio-on-squarespace',
    'crisp-on-framer',
  ],
  lastVerified: '2026-11-15',
};
