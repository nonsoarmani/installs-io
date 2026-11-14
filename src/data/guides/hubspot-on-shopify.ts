import type { Guide } from '../types';

export const hubspotOnShopify: Guide = {
  slug: 'hubspot-on-shopify',
  toolId: 'hubspot',
  platformId: 'shopify',
  status: 'published',
  title: 'How to Install HubSpot on Shopify (Official Data Sync & Tracking)',
  metaDescription:
    'Connect HubSpot to your Shopify store using the official HubSpot app to sync customers, products, and orders plus enable onsite tracking.',
  whoItsFor:
    'Shopify brands and B2B ecommerce stores using HubSpot CRM to sync customer order history, segment buyers, and run automated email workflows.',
  whatYouGet:
    'Two-way data sync between Shopify and HubSpot CRM plus the HubSpot tracking code running across your storefront.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'Owner or Admin access to your Shopify store',
    'A HubSpot account with Super Admin or App Marketplace permissions',
    'A live Shopify store domain',
  ],
  steps: [
    {
      title: 'Find the official HubSpot app in the Shopify App Store',
      body: 'Log in to your Shopify Admin, click Apps in the left menu (or use the top search bar), search for "HubSpot", and open the official app listing published by HubSpot.',
    },
    {
      title: 'Install the HubSpot app on your Shopify store',
      body: 'Click Install on the HubSpot app page, review the data access permissions for customers, products, and orders, and confirm installation.',
    },
    {
      title: 'Connect your HubSpot portal',
      body: 'Sign in with your HubSpot credentials when prompted, choose the HubSpot portal you want to link to your store, and click Connect App.',
    },
    {
      title: 'Configure customer, product, and order sync settings',
      body: 'Inside HubSpot -> Settings -> Integrations -> Connected Apps -> Shopify, review your sync rules to confirm Contacts, Products, and Deals (Orders) are syncing as expected.',
      note: 'HubSpot automatically installs its tracking code onto your Shopify storefront when you connect the official app, so you do not need to edit theme.liquid.',
    },
    {
      title: 'Enable HubSpot Live Chat or popups (optional)',
      body: 'If you want HubSpot’s live chat widget or popup forms on your store, create a chatflow or form inside HubSpot and toggle it active for your Shopify domain.',
    },
    {
      title: 'Verify tracking and order sync in HubSpot',
      body: 'Visit your live Shopify store in an incognito window, then open HubSpot -> Settings -> Tracking & Analytics -> Tracking Code to confirm your store domain shows active tracking.',
    },
  ],
  verification: [
    {
      title: 'Check Shopify sync health in HubSpot Connected Apps',
      body: 'In HubSpot -> Settings -> Integrations -> Connected Apps -> Shopify, verify that Contacts, Products, and Deals show green active sync statuses.',
    },
    {
      title: 'Confirm hs-scripts.com loads on your storefront',
      body: 'Open your public Shopify homepage, right-click -> View Page Source, and search for "hs-scripts.com" to confirm the tracking snippet is active.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Shopify customers or past orders are missing in HubSpot',
      fix: 'Open HubSpot -> Settings -> Integrations -> Connected Apps -> Shopify -> Data sync and check if historical sync is still processing or if a filter is excluding unsubscribed contacts.',
    },
    {
      problem: 'HubSpot Live Chat widget does not show on my Shopify store',
      fix: 'In HubSpot -> Automations -> Chatflows, confirm the chatflow is switched ON and check that your Shopify custom domain (not just myshopify.com) is listed under allowed domains.',
    },
    {
      problem: 'Duplicate contacts are appearing from Shopify checkouts',
      fix: 'HubSpot deduplicates contacts by email address; check that your Shopify customer records have valid email addresses rather than phone-only checkouts.',
    },
  ],
  faqs: [
    {
      question: 'Does the official HubSpot Shopify app install the tracking code automatically?',
      answer:
        'Yes. Connecting the official HubSpot app automatically injects your HubSpot tracking snippet across your Shopify storefront without editing theme code.',
    },
    {
      question: 'Can I trigger HubSpot email workflows from Shopify abandoned carts?',
      answer:
        'Yes. Once connected, HubSpot syncs abandoned checkout data so you can build automated abandoned cart recovery workflows inside HubSpot.',
    },
    {
      question: 'Is the HubSpot Shopify integration free?',
      answer:
        'The official HubSpot app is free to install and works with HubSpot’s free CRM plan, though advanced workflow automation requires a paid HubSpot Marketing Hub plan.',
    },
  ],
  relatedSlugs: [
    'hubspot-on-wordpress',
    'hubspot-on-webflow',
    'klaviyo-on-shopify',
  ],
  lastVerified: '2026-11-14',
};
