import type { Guide } from '../types';

export const klaviyoOnShopify: Guide = {
  slug: 'klaviyo-on-shopify',
  toolId: 'klaviyo',
  platformId: 'shopify',
  status: 'published',
  title: 'How to Install Klaviyo on Shopify (Official App & Onsite Tracking)',
  metaDescription:
    'Connect Klaviyo to your Shopify store, enable the Klaviyo app embed for onsite tracking, and sync customer, checkout, and order events.',
  whoItsFor:
    'Shopify merchants and ecommerce marketers setting up email and SMS flows like abandoned cart, browse abandonment, and post-purchase sequences.',
  whatYouGet:
    'Two-way data sync between Shopify and Klaviyo plus active onsite tracking for Viewed Product, Added to Cart, and signup popups.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'Owner or Admin access to your Shopify store',
    'A Klaviyo account (free tier or paid plan) with Owner or Admin permissions',
    'A published Shopify Online Store 2.0 theme',
  ],
  steps: [
    {
      title: 'Add the Shopify integration inside Klaviyo',
      body: 'Log in to your Klaviyo account, click your account name in the bottom-left corner, and select Integrations. Click Add Integration, search for Shopify, and click Add Integration again.',
    },
    {
      title: 'Enter your Shopify store URL and connect',
      body: 'Paste your permanent myshopify.com URL (for example, ://myshopify.com) into the Store URL field. Choose whether to sync Shopify email/SMS subscribers to a Klaviyo list, then click Connect to Shopify.',
    },
    {
      title: 'Install the Klaviyo app inside Shopify',
      body: 'You will be redirected to your Shopify Admin. Review the requested permissions and click Install (or Install app) to authorize the connection back to Klaviyo.',
    },
    {
      title: 'Enable the Klaviyo App Embed in your Shopify theme',
      body: 'In your Shopify Admin, go to Online Store -> Themes and click Customize on your live theme. In the left sidebar, click the App embeds icon (the puzzle/blocks icon), toggle "Klaviyo onsite tracking" ON, and click Save in the top right.',
      warning:
        'If you skip enabling the Klaviyo App Embed in your Shopify theme settings, Klaviyo signup forms and Viewed Product tracking will not appear on your storefront.',
    },
    {
      title: 'Confirm integration settings in Klaviyo',
      body: 'Return to Klaviyo -> Integrations -> Shopify and click Complete Setup. Verify that "Track behavioral events" is checked so Active on Site and Viewed Product events sync automatically.',
    },
    {
      title: 'Test onsite tracking on your live store',
      body: 'Open your Shopify store in an incognito browser window, add ?utm_email=test@example.com to the end of your URL, press Enter, and view a product. Open Klaviyo -> Audience -> Profiles, search for test@example.com, and confirm the Active on Site and Viewed Product events appear.',
    },
  ],
  verification: [
    {
      title: 'Check Shopify status in Klaviyo Integrations',
      body: 'In Klaviyo under Integrations, confirm Shopify appears under Enabled Integrations with a green Connected badge and recent sync timestamp.',
    },
    {
      title: 'Verify Active on Site metrics',
      body: 'In Klaviyo -> Analytics -> Metrics, search for "Active on Site" and "Viewed Product" and confirm recent activity is recorded from your test visit.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Klaviyo popup forms are not showing on my Shopify store',
      fix: 'Open Shopify Admin -> Online Store -> Themes -> Customize -> App embeds, confirm "Klaviyo onsite tracking" is toggled ON, and make sure you clicked Save in the theme editor.',
    },
    {
      problem: 'Added to Cart events are not triggering abandoned cart flows',
      fix: 'Klaviyo tracks Started Checkout natively, while Added to Cart requires the Klaviyo onsite app embed to be active and a customer to be cookied (identified via email click or form submission).',
    },
    {
      problem: 'Historical Shopify orders are missing in Klaviyo',
      fix: 'Initial historical data sync can take anywhere from 15 minutes to a few hours depending on store size. Check Integrations -> Shopify -> Data to monitor sync progress.',
    },
  ],
  faqs: [
    {
      question: 'Do I need to manually paste Klaviyo JavaScript into theme.liquid?',
      answer:
        'No. On modern Shopify Online Store 2.0 themes, enabling the Klaviyo App Embed inside the Theme Editor injects the onsite tracking script automatically without editing theme code.',
    },
    {
      question: 'Will connecting Klaviyo automatically turn off Shopify default emails?',
      answer:
        'No. Shopify order confirmation and shipping emails stay active, while you should disable Shopify’s built-in abandoned checkout email under Shopify Settings -> Notifications if you turn on Klaviyo’s Abandoned Cart flow.',
    },
    {
      question: 'What happens when I switch to a new Shopify theme later?',
      answer:
        'Whenever you publish a new Shopify theme, you must go into Customize -> App embeds on the new theme and toggle "Klaviyo onsite tracking" ON again.',
    },
  ],
  relatedSlugs: [
    'klaviyo-on-webflow',
    'google-analytics-4-on-shopify',
    'meta-conversions-api-on-shopify',
  ],
  lastVerified: '2026-11-13',
};
