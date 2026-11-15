import type { Guide } from '../types';

export const klaviyoOnWix: Guide = {
  slug: 'klaviyo-on-wix',
  toolId: 'klaviyo',
  platformId: 'wix',
  status: 'published',
  title: 'How to Install Klaviyo Tracking & Signup Forms on Wix',
  metaDescription:
    'Connect Klaviyo to your Wix store or website to enable onsite tracking, popup signup forms, and abandoned cart email flows.',
  whoItsFor:
    'Wix e-commerce brands and newsletter creators using Klaviyo to capture email/SMS subscribers, track Active on Site behavior, and automate flows.',
  whatYouGet:
    'Klaviyo onsite JavaScript tracking, popup and flyout signup forms, and Wix Stores customer and order syncing inside Klaviyo.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Wix website on a paid Premium plan with a connected custom domain (required for Custom Code)',
    'A Klaviyo account with your 6-character Public API Key (Site ID) ready',
    'Owner or Website Manager access inside your Wix Dashboard',
  ],
  steps: [
    {
      title: 'Connect the official Wix integration inside Klaviyo',
      body: 'Log in to Klaviyo, click Integrations in the bottom-left menu, search for "Wix", click Add Integration, and follow the OAuth prompt to authorize your Wix store.',
    },
    {
      title: 'Copy your Klaviyo Public API Key (Site ID)',
      body: 'In Klaviyo, click your account name in the bottom-left corner, go to Settings -> API Keys, and copy your 6-character Public API Key.',
    },
    {
      title: 'Open Custom Code in your Wix Dashboard',
      body: 'Sign in to your Wix Studio or Wix Editor dashboard, navigate to Settings in the left sidebar, and click Custom Code under the Advanced section.',

    },
    {
      title: 'Paste the Klaviyo onsite script into Wix Custom Code',
      body: 'Click "+ Add Custom Code" in the upper right, paste the snippet below with your 6-character Public API Key, and label it "Klaviyo Onsite Tracking".',
      code: {
        language: 'html',
        filename: 'Wix Custom Code (Body - end)',
        code: `<script async type="text/javascript" src="https://klaviyo.com"></script>`,
      },
    },
    {
      title: 'Apply to All Pages and publish your Wix site',
      body: 'Set "Add Code to Pages" to "All pages" with "Load code once", set "Place Code in" to "Body - end", click Apply, and publish your site in the Wix Editor.',
    },
  ],
  verification: [
    {
      title: 'Test Active on Site tracking with the UTM parameter trick',
      body: 'Open your live Wix domain with ?utm_email=test@example.com appended to the URL, then check Klaviyo -> Analytics -> Metrics -> Active on Site to verify the ping.',
    },
    {
      title: 'Confirm Klaviyo forms render on your published Wix site',
      body: 'Publish a test popup or flyout form inside Klaviyo -> Sign-up Forms and verify it triggers properly on your live Wix custom domain.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Klaviyo popup forms do not appear on my Wix pages',
      fix: 'Confirm the klaviyo.js script is placed in Wix Custom Code on All pages, your Wix site is published, and the form status is set to Live inside Klaviyo.',
    },
    {
      problem: 'Wix Stores orders are syncing to Klaviyo but Active on Site events are missing',
      fix: 'The Wix OAuth integration syncs backend store orders, while onsite browsing and popup forms require the manual klaviyo.js snippet in Wix Custom Code.',
    },
    {
      problem: 'Embedded Klaviyo form is clipped inside a Wix page section',
      fix: 'When pasting a Klaviyo <div class="klaviyo-form-XXXXXX"></div> block into a Wix Embed HTML box, expand the container height in the Wix Editor so buttons are not cut off.',
    },
  ],
  faqs: [
    {
      question: 'Does the official Klaviyo Wix app install onsite tracking automatically?',
      answer:
        'The official Wix integration syncs customers, orders, and checkout events, but adding the klaviyo.js script to Wix Custom Code ensures Active on Site tracking and Klaviyo popups run reliably.',
    },
    {
      question: 'Can I sync native Wix Forms subscribers to a Klaviyo list?',
      answer:
        'Yes. You can either use Klaviyo native signup forms via klaviyo.js or connect Wix Automations to Klaviyo using webhooks or Zapier to push native Wix Form leads into a specific list.',
    },
    {
      question: 'Where do I find my Klaviyo company_id?',
      answer:
        'Your company_id is your 6-character Public API Key located inside Klaviyo under Settings -> Account -> API Keys.',
    },
  ],
  relatedSlugs: [
    'klaviyo-on-shopify',
    'klaviyo-on-webflow',
    'klaviyo-on-wordpress',
  ],
  lastVerified: '2026-11-15',
};
