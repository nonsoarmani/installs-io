import type { Guide } from '../types';

export const klaviyoOnWebflow: Guide = {
  slug: 'klaviyo-on-webflow',
  toolId: 'klaviyo',
  platformId: 'webflow',
  status: 'published',
  title: 'How to Install Klaviyo on Webflow (Tracking Snippet & Forms)',
  metaDescription:
    'Add Klaviyo onsite tracking and embedded or popup signup forms to your Webflow website using your Klaviyo Public API Key and custom code.',
  whoItsFor:
    'Webflow site owners, SaaS startups, and marketers who want to capture leads with Klaviyo popups and track Active on Site visitor activity.',
  whatYouGet:
    'Klaviyo’s onsite JavaScript snippet running across your Webflow site so you can launch popups, flyouts, and embedded email signup forms.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Webflow project on a paid Site plan (required for Custom Code)',
    'A Klaviyo account with access to your 6-character Public API Key (Site ID)',
    'Permission to publish changes to your live Webflow domain',
  ],
  steps: [
    {
      title: 'Copy your Klaviyo Public API Key (Site ID)',
      body: 'Log in to Klaviyo, click your organization name in the bottom-left corner, and go to Settings -> API Keys. Copy your 6-character Public API Key / Site ID at the top of the page.',
      warning:
        'Only use your 6-character Public API Key in website code. Never paste a Private API Key (starting with pk_) into Webflow custom code.',
    },
    {
      title: 'Open Webflow Site Settings -> Custom Code',
      body: 'In your Webflow Dashboard, open your project’s Site Settings and click the Custom Code tab in the left sidebar.',
    },
    {
      title: 'Paste the Klaviyo onsite tracking script in the Footer Code',
      body: 'Scroll to the Footer Code section (before </body> tag), paste the snippet below, and replace YOUR_PUBLIC_API_KEY with your 6-character Klaviyo Site ID.',
      code: {
        language: 'html',
        filename: 'Webflow Footer Code',
        code: `<script async type="text/javascript" src="https://klaviyo.com"></script>`,
      },
    },
    {
      title: 'Save and publish your Webflow site',
      body: 'Click Save Changes in Webflow Custom Code, then click Publish in the top-right corner and publish to your production domain.',
    },
    {
      title: 'Embed a Klaviyo form on a specific page (optional)',
      body: 'If you want an inline signup form instead of a popup, create an Embedded form in Klaviyo -> Sign-up forms, copy its <div> embed code, drag an Embed element onto your Webflow canvas, paste the div code, and republish.',
      code: {
        language: 'html',
        filename: 'Webflow Embed Element',
        code: `<div class="klaviyo-form-XXXXXX"></div>`,
      },
      note: 'Replace XXXXXX with the exact 6-character form ID shown inside your Klaviyo form’s Publish modal.',
    },
    {
      title: 'Test your Klaviyo snippet and form',
      body: 'Visit your live Webflow domain in an incognito window with ?utm_email=test@example.com appended to the URL, or submit a live Klaviyo popup form, and verify the profile appears in Klaviyo -> Audience -> Profiles.',
    },
  ],
  verification: [
    {
      title: 'Verify klaviyo.js loads in browser DevTools',
      body: 'Open your published Webflow site, right-click -> Inspect -> Network tab, reload the page, and search for "klaviyo.js" to confirm it loads with a 200 status.',
    },
    {
      title: 'Confirm Active on Site in Klaviyo Metrics',
      body: 'Open Klaviyo -> Analytics -> Metrics and check that "Active on Site" shows recent test activity.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Klaviyo popup form is set to Live in Klaviyo but does not show on Webflow',
      fix: 'Make sure you clicked Publish in Webflow after adding the Footer Code, verify your 6-character company_id has no extra spaces, and check that your Klaviyo form targeting rules match the URL you are visiting.',
    },
    {
      problem: 'Embedded Klaviyo form box appears blank on Webflow',
      fix: 'Confirm both the main klaviyo.js script is in Site Settings -> Custom Code AND the <div class="klaviyo-form-XXXXXX"></div> element is placed inside a Webflow Code Embed block on the published page.',
    },
    {
      problem: 'Webflow native forms are not sending leads to Klaviyo',
      fix: 'Klaviyo’s script powers Klaviyo-built forms. To connect native Webflow forms to Klaviyo, connect them via Zapier, Make, or Webflow Logic webhooks.',
    },
  ],
  faqs: [
    {
      question: 'Should I put the Klaviyo script in Webflow Head Code or Footer Code?',
      answer:
        'Klaviyo recommends placing the asynchronous onsite script in the Footer Code (right before the closing </body> tag) so it loads without blocking your Webflow page rendering.',
    },
    {
      question: 'Do I need a paid Webflow plan to install Klaviyo?',
      answer:
        'Yes. Webflow requires a paid Site plan (Basic, CMS, Business, or Enterprise) to unlock the Custom Code tab and Code Embed elements.',
    },
    {
      question: 'Will Klaviyo slow down my Webflow Lighthouse speed score?',
      answer:
        'Because the script includes the async attribute and loads from Klaviyo’s CDN in the footer, it loads in parallel without delaying initial page paint.',
    },
  ],
  relatedSlugs: [
    'klaviyo-on-shopify',
    'google-analytics-4-on-webflow',
    'crisp-on-webflow',
  ],
  lastVerified: '2026-11-13',
};
