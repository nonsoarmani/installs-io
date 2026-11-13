import type { Guide } from '../types';

export const crispOnWebflow: Guide = {
  slug: 'crisp-on-webflow',
  toolId: 'crisp',
  platformId: 'webflow',
  status: 'published',
  title: 'How to Install Crisp Live Chat on Webflow (Custom Code)',
  metaDescription:
    'Add the Crisp live chat widget to your Webflow site in minutes by copying your Crisp Website ID snippet into Webflow Site Settings.',
  whoItsFor:
    'Webflow startups, SaaS websites, and agencies that want real-time customer support chat and lead capture on their site.',
  whatYouGet:
    'The Crisp live chat widget running across all published Webflow pages, synced with your Crisp shared inbox and mobile app.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Webflow project on a paid Site plan (required for Custom Code)',
    'A free or paid Crisp account with your Website ID snippet',
    'Permission to publish your Webflow site to a custom or staging domain',
  ],
  steps: [
    {
      title: 'Copy your Crisp installation code',
      body: 'Log in to your Crisp dashboard (app.crisp.chat), click the Settings gear icon in the bottom-left sidebar, select Website Settings, click your website name, and open Setup instructions -> HTML. Copy the JavaScript snippet containing your unique CRISP_WEBSITE_ID.',
    },
    {
      title: 'Open Webflow Site Settings -> Custom Code',
      body: 'Log in to your Webflow Dashboard, open your project’s Site Settings, and click the Custom Code tab in the left menu.',
    },
    {
      title: 'Paste the Crisp snippet into the Head Code',
      body: 'Paste your Crisp JavaScript code into the Head Code section, making sure YOUR_CRISP_WEBSITE_ID matches the exact ID from your Crisp dashboard.',
      code: {
        language: 'html',
        filename: 'Webflow Head Code',
        code: `<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="YOUR_CRISP_WEBSITE_ID";(function(){d=document;s=d.createElement("script");s.src="https://crisp.chat";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>`,
      },
      warning:
        'Include the opening <script> and closing </script> tags when pasting into Webflow Custom Code, or the script will display as plain text.',
    },
    {
      title: 'Save changes and publish your Webflow site',
      body: 'Click Save Changes in Webflow Custom Code, then click Publish in the top-right corner and publish to your live domain.',
    },
    {
      title: 'Test the live chat bubble on your published site',
      body: 'Open your published Webflow URL in a new browser tab, click the Crisp chat bubble in the bottom-right corner, send a test message, and confirm it appears immediately inside your Crisp Inbox.',
    },
  ],
  verification: [
    {
      title: 'Confirm the chat widget renders on your live URL',
      body: 'Visit your published Webflow domain (not the Designer preview) and verify the Crisp chat icon appears in the bottom-right corner.',
    },
    {
      title: 'Check connection status in Crisp Settings',
      body: 'In Crisp -> Settings -> Website Settings -> Setup instructions, Crisp automatically displays a green "Connected" status once the widget loads on your domain.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Crisp chat bubble does not appear after saving in Webflow',
      fix: 'Webflow Custom Code only runs on published sites, not inside the Designer preview. Click Publish in the top-right corner of Webflow and refresh your live domain.',
    },
    {
      problem: 'Crisp widget covers a floating button or back-to-top icon on Webflow',
      fix: 'Open Crisp -> Settings -> Website Settings -> Chatbox & Email appearance -> Chatbox position to switch the widget to the left side or adjust its padding.',
    },
    {
      problem: 'My team looks offline even when we are logged into Crisp',
      fix: 'Check your Crisp Inbox availability toggle in the top-left profile menu and verify your working hours schedule under Settings -> Availability.',
    },
  ],
  faqs: [
    {
      question: 'Does Crisp work on Webflow free Starter plans?',
      answer:
        'No. Webflow requires a paid Site plan (Basic, CMS, Business, or Enterprise) to add site-wide Custom Code in Site Settings.',
    },
    {
      question: 'Will the Crisp chat widget slow down my Webflow site?',
      answer:
        'No. Crisp loads asynchronously (s.async=1) after your page content renders, so it does not block initial page load speed.',
    },
    {
      question: 'Can I hide Crisp on specific Webflow pages like checkout or legal pages?',
      answer:
        'Yes. Inside Crisp -> Settings -> Website Settings -> Chatbox & Email appearance -> Chatbox restrictions, you can add URL rules to hide the chat bubble on specific paths.',
    },
  ],
  relatedSlugs: [
    'crisp-on-wordpress',
    'klaviyo-on-webflow',
    'google-analytics-4-on-webflow',
  ],
  lastVerified: '2026-11-13',
};
