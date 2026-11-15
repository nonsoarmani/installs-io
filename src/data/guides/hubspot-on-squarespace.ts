import type { Guide } from '../types';

export const hubspotOnSquarespace: Guide = {
  slug: 'hubspot-on-squarespace',
  toolId: 'hubspot',
  platformId: 'squarespace',
  status: 'published',
  title: 'How to Install HubSpot Tracking Code & Chat on Squarespace',
  metaDescription:
    'Add the HubSpot tracking code, live chat widget, and lead forms to your Squarespace website using Code Injection and Embed Blocks.',
  whoItsFor:
    'Squarespace agencies, B2B consultants, and growing businesses using HubSpot CRM to capture leads, track visitor journeys, and chat with site visitors.',
  whatYouGet:
    'HubSpot visitor tracking, contact attribution, pop-up lead forms, and the HubSpot live chat widget active across your published Squarespace pages.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Squarespace website on a Business, Commerce, Core, Plus, or Advanced plan (required for Code Injection)',
    'A HubSpot account with Super Admin or Account Access permissions to copy your Portal tracking script',
    'Website Owner or Administrator permissions inside your Squarespace dashboard',
  ],
  steps: [
    {
      title: 'Copy your HubSpot tracking script from Account Settings',
      body: 'Log in to HubSpot, click the Settings gear icon in the top navigation bar, go to Tracking & Analytics -> Tracking Code in the left menu, and click Copy.',
    },
    {
      title: 'Open Code Injection in your Squarespace dashboard',
      body: 'Open your Squarespace site menu, navigate to Website -> Pages -> Website Tools (or Settings -> Developer Tools), and click Code Injection.',
    },
    {
      title: 'Paste the HubSpot loader script into the Footer field',
      body: 'Scroll down to the Footer field inside Code Injection, paste the HubSpot script below with your actual HubSpot Portal ID, and click Save.',
      code: {
        language: 'html',
        filename: 'Squarespace Footer Code Injection',
        code: `<script type="text/javascript" id="hs-script-loader" async defer src="//://hs-scripts.com"></script>`,
      },
    },
    {
      title: 'Embed a standalone HubSpot form on a page (optional)',
      body: 'In HubSpot -> Marketing -> Forms, copy your form embed code, then edit a Squarespace page, click Add Block -> Embed -> Code Snippet -> Embed Data, and paste the snippet.',
    },
    {
      title: 'Verify live tracking outside the Squarespace Editor',
      body: 'Open your public Squarespace domain in an incognito browser tab because Squarespace pauses Footer Code Injection scripts while you are logged into the admin editor.',
    },
  ],
  verification: [
    {
      title: 'Confirm green installation status inside HubSpot Settings',
      body: 'Visit your live Squarespace domain in an incognito tab, then return to HubSpot -> Settings -> Tracking Code and confirm the green "Tracking code installed" badge appears.',
    },
    {
      title: 'Check the hs-scripts.com network request in Browser DevTools',
      body: 'Open Chrome DevTools -> Network tab on your published Squarespace URL, filter by "hs-scripts", and verify your Portal ID script loads with a 200 status.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Code Injection is locked on my Squarespace site',
      fix: 'Squarespace restricts Footer Code Injection and custom JavaScript embeds to Business plans and higher; upgrade your site plan to unlock custom scripts.',
    },
    {
      problem: 'HubSpot live chat widget does not appear while editing Squarespace pages',
      fix: 'Squarespace disables custom Footer scripts inside the logged-in editor frame; open your live domain in a separate incognito window to see the chat widget.',
    },
    {
      problem: 'Native Squarespace Form Block submissions do not sync to HubSpot',
      fix: 'Enable "Collect data from website forms" inside HubSpot -> Settings -> Tracking & Analytics -> Tracking Code -> Non-HubSpot Forms, or embed a native HubSpot form block.',
    },
  ],
  faqs: [
    {
      question: 'Can I install HubSpot on a Squarespace Personal plan?',
      answer:
        'No. Squarespace Personal plans block site-wide Code Injection and strip JavaScript tags from Embed blocks, so a Business or Core plan (or higher) is required.',
    },
    {
      question: 'Will HubSpot capture submissions from built-in Squarespace Form Blocks?',
      answer:
        'Yes. Once the HubSpot tracking code is live in your Squarespace Footer, toggle on Non-HubSpot Forms in HubSpot settings to capture standard Squarespace form leads automatically.',
    },
    {
      question: 'Does the HubSpot tracking script slow down Squarespace page loads?',
      answer:
        'No. HubSpot loads with both async and defer attributes in the Footer, ensuring your Squarespace page content and images render first without blocking.',
    },
  ],
  relatedSlugs: [
    'hubspot-on-webflow',
    'hubspot-on-wix',
    'hubspot-on-wordpress',
  ],
  lastVerified: '2026-11-15',
};
