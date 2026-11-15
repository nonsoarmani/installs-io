import type { Guide } from '../types';

export const hubspotOnWix: Guide = {
  slug: 'hubspot-on-wix',
  toolId: 'hubspot',
  platformId: 'wix',
  status: 'published',
  title: 'How to Install HubSpot Tracking Code & Live Chat on Wix',
  metaDescription:
    'Add the HubSpot tracking code, live chat widget, and lead capture forms to your Wix website using Wix Custom Code settings.',
  whoItsFor:
    'B2B companies, service providers, and growing teams using HubSpot CRM to track visitor journeys, capture form leads, and chat with prospects on Wix.',
  whatYouGet:
    'HubSpot visitor analytics, contact attribution, pop-up forms, and the HubSpot live chat widget active across your published Wix website.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Wix website on a paid Premium plan with a connected custom domain (required for Custom Code)',
    'A HubSpot account with Super Admin or Account Access permissions to copy your Portal tracking code',
    'Owner or Website Manager permissions inside your Wix Dashboard',
  ],
  steps: [
    {
      title: 'Copy your HubSpot tracking code from Account Settings',
      body: 'Log in to HubSpot, click the Settings gear icon in the top navigation bar, go to Tracking & Analytics -> Tracking Code in the left sidebar, and click Copy.',
    },
    {
      title: 'Open Custom Code settings in your Wix Dashboard',
      body: 'Open your Wix site dashboard, scroll down the left menu to Settings, click Development & Integrations, and open Custom Code.',
    },
    {
      title: 'Add the HubSpot tracking snippet to your Wix site',
      body: 'Click "+ Add Custom Code" in the upper right, paste your HubSpot script (replacing YOUR_HUB_ID with your HubSpot Portal ID), and name it "HubSpot Tracking".',
      code: {
        language: 'html',
        filename: 'Wix Custom Code (Body - end)',
        code: `<script type="text/javascript" id="hs-script-loader" async defer src="//://hs-scripts.com"></script>`,
      },
    },
    {
      title: 'Set placement to All Pages and Body - End',
      body: 'Under "Add Code to Pages," select "All pages" with "Load code once" enabled, choose "Body - end" under "Place Code in," and click Apply.',
    },
    {
      title: 'Embed a standalone HubSpot form on a Wix page (optional)',
      body: 'In HubSpot, copy your form embed code under Marketing -> Forms, then open the Wix Editor, click Add Elements (+) -> Embed Code -> Embed HTML, and paste the snippet.',
    },
    {
      title: 'Publish your Wix site to activate HubSpot tracking',
      body: 'Click Publish in the top-right corner of the Wix Editor so your HubSpot tracking script and any embedded forms deploy to your live custom domain.',
    },
  ],
  verification: [
    {
      title: 'Verify installation inside HubSpot Tracking Code settings',
      body: 'Visit your live Wix custom domain in a new browser tab, then return to HubSpot -> Settings -> Tracking Code and confirm the green "Tracking code installed" badge appears.',
    },
    {
      title: 'Inspect the hs-scripts.com request in Browser DevTools',
      body: 'Open Chrome DevTools -> Network tab on your published Wix site, filter by "hs-scripts", and verify your Portal ID script loads with a 200 status.',
    },
  ],
  troubleshooting: [
    {
      problem: 'HubSpot still says "Tracking code not detected" after adding to Wix',
      fix: 'Confirm you clicked Publish in the Wix Editor and load your live custom domain in an incognito window without ad blockers so HubSpot receives an initial pageview ping.',
    },
    {
      problem: 'HubSpot live chat widget does not show on Wix pages',
      fix: 'Open HubSpot -> Conversations -> Chatflows, make sure your website chatflow toggle is switched ON, and verify your Wix domain matches the chatflow targeting rules.',
    },
    {
      problem: 'Native Wix form submissions are not creating contacts in HubSpot',
      fix: 'Enable "Collect data from website forms" under HubSpot -> Settings -> Tracking & Analytics -> Tracking Code -> Non-HubSpot Forms, or embed a native HubSpot form.',
    },
  ],
  faqs: [
    {
      question: 'Should I use the Wix App Market HubSpot app or the manual HubSpot tracking code?',
      answer:
        'Installing the official HubSpot tracking script via Wix Custom Code gives you full access to HubSpot live chat, pop-up forms, and page analytics without third-party sync limits.',
    },
    {
      question: 'Can HubSpot automatically capture leads from native Wix Forms?',
      answer:
        'Yes. Once the HubSpot tracking code is live on Wix, toggle on Non-HubSpot Forms in your HubSpot Tracking Code settings to capture standard HTML form submissions automatically.',
    },
    {
      question: 'Does the HubSpot script affect Wix Core Web Vitals?',
      answer:
        'HubSpot uses async and defer attributes by default, so placing it in the Body - end position loads it after your main Wix page content finishes rendering.',
    },
  ],
  relatedSlugs: [
    'hubspot-on-webflow',
    'hubspot-on-wordpress',
    'hubspot-on-shopify',
  ],
  lastVerified: '2026-11-15',
};
