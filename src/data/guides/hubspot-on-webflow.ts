import type { Guide } from '../types';

export const hubspotOnWebflow: Guide = {
  slug: 'hubspot-on-webflow',
  toolId: 'hubspot',
  platformId: 'webflow',
  status: 'published',
  title: 'How to Install HubSpot Tracking Code & Forms on Webflow',
  metaDescription:
    'Add HubSpot visitor tracking, live chat, and embedded lead capture forms to your Webflow website using Site Settings Custom Code.',
  whoItsFor:
    'Webflow startups, B2B websites, and marketing teams using HubSpot CRM to track visitors, capture leads, and run live chat.',
  whatYouGet:
    'HubSpot’s tracking script active across every published Webflow page plus native form capture or embedded HubSpot forms.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Webflow project on a paid Site plan (required for Custom Code)',
    'A free or paid HubSpot account with access to your Portal ID tracking code',
    'Permission to publish changes to your live Webflow domain',
  ],
  steps: [
    {
      title: 'Copy your HubSpot tracking code',
      body: 'Log in to HubSpot, click the Settings gear icon in the top navigation bar, go to Tracking & Analytics -> Tracking Code in the left sidebar, and click Copy under the Embed code box.',
    },
    {
      title: 'Open Webflow Project Settings -> Custom Code',
      body: 'In your Webflow Dashboard, open your project Settings and click on the Custom Code tab in the left menu.',
    },
    {
      title: 'Paste the HubSpot script into the Footer Code',
      body: 'Scroll to the Footer Code section (before the closing </body> tag), paste your HubSpot tracking snippet, and replace YOUR_HUB_ID with your numeric HubSpot Portal ID.',
      code: {
        language: 'html',
        filename: 'Webflow Footer Code',
        code: `<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//://hs-scripts.com"></script>
<!-- End of HubSpot Embed Code -->`,
      },
      note: 'If your HubSpot account is hosted in the EU data center, your script URL will start with //://hs-scripts.com instead of //://hs-scripts.com.',
    },
    {
      title: 'Embed a HubSpot form on a specific page (optional)',
      body: 'If you want a custom HubSpot form instead of native Webflow forms, copy the form embed snippet from HubSpot -> Marketing -> Forms -> Share -> Embed code, drag a Code Embed element onto your Webflow canvas, and paste it inside.',
    },
    {
      title: 'Save Custom Code and publish your Webflow site',
      body: 'Click Save Changes in Webflow Custom Code, then open the Publish dropdown in the top right and deploy your site to your live domain.',
    },
    {
      title: 'Verify tracking in HubSpot Settings',
      body: 'Visit your published Webflow URL in an incognito tab, then return to HubSpot -> Settings -> Tracking & Analytics -> Tracking Code to confirm your domain shows as receiving visitor data.',
    },
  ],
  verification: [
    {
      title: 'Confirm hs-script-loader in live page source',
      body: 'Open your published Webflow URL, right-click -> View Page Source, and search for "hs-script-loader" to verify your Portal ID script is active.',
    },
    {
      title: 'Test live chat or form capture in HubSpot Contacts',
      body: 'Submit a test form on your Webflow site and verify that a new contact record is created inside HubSpot -> CRM -> Contacts.',
    },
  ],
  troubleshooting: [
    {
      problem: 'HubSpot shows no visitor data after adding the script to Webflow',
      fix: 'Verify you clicked Publish in Webflow after saving Footer Code, check that your Portal ID has no extra spaces, and confirm your live domain is added under HubSpot Tracking Code -> Advanced Tracking.',
    },
    {
      problem: 'Native Webflow form submissions are not appearing in HubSpot',
      fix: 'In HubSpot -> Settings -> Tracking & Analytics -> Tracking Code -> Non-HubSpot forms, ensure "Collect data from website forms" is switched ON and your Webflow form contains an email input field.',
    },
    {
      problem: 'HubSpot Live Chat widget does not show on Webflow',
      fix: 'Open HubSpot -> Automations -> Chatflows, make sure your website chatflow is toggled ON, and check its URL targeting rules.',
    },
  ],
  faqs: [
    {
      question: 'Should I paste the HubSpot tracking code in Webflow Head Code or Footer Code?',
      answer:
        'HubSpot recommends placing the tracking snippet in the Footer Code (right before </body>) so it loads asynchronously with async defer without delaying initial page rendering.',
    },
    {
      question: 'Can HubSpot capture leads from standard Webflow forms automatically?',
      answer:
        'Yes. Once the HubSpot tracking code is installed and Non-HubSpot forms is enabled in HubSpot settings, HubSpot automatically captures submissions from native Webflow forms.',
    },
    {
      question: 'Do I need a paid Webflow plan to install HubSpot?',
      answer:
        'Yes. Webflow requires a paid Site plan to unlock Site Settings Custom Code and Code Embed elements.',
    },
  ],
  relatedSlugs: [
    'hubspot-on-wordpress',
    'hubspot-on-shopify',
    'gohighlevel-on-webflow',
  ],
  lastVerified: '2026-11-14',
};
