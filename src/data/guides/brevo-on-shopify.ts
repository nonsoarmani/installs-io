import type { Guide } from '../types';

export const brevoOnShopify: Guide = {
  slug: 'brevo-on-shopify',
  toolId: 'brevo',
  platformId: 'shopify',
  status: 'published',
  title: 'How to Install Brevo on Shopify (Official App & Order Sync)',
  metaDescription:
    'Connect Brevo (Sendinblue) to your Shopify store using the official Brevo app to sync customers, track abandoned carts, and enable onsite tracking.',
  whoItsFor:
    'Shopify store owners and ecommerce marketers who want affordable email and SMS campaigns, abandoned cart automation, and customer syncing.',
  whatYouGet:
    'Two-way subscriber and order synchronization between Shopify and Brevo plus automatic onsite behavioral tracking across your storefront.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'Owner or Admin access to your Shopify store',
    'A free or paid Brevo account',
    'A published Shopify Online Store 2.0 theme',
  ],
  steps: [
    {
      title: 'Install the official Brevo app from the Shopify App Store',
      body: 'Log in to your Shopify Admin, search for "Brevo" in the Shopify App Store, select the official app, and click Install.',
    },
    {
      title: 'Authorize Shopify store permissions',
      body: 'Review the permissions requested by Brevo for customer data and click Install to launch the setup wizard.',
    },
    {
      title: 'Log in and link your Brevo account',
      body: 'Sign in to your Brevo account and allow access to connect your Shopify store.',
    },
    {
      title: 'Configure contact sync and behavioral tracking',
      body: 'Toggle contact synchronization ON, select your destination list, and enable behavioral tracking for product and cart events.',
      note: 'Enabling behavioral tracking automatically injects the Brevo Tracker script without manual theme edits.',
    },
    {
      title: 'Enable the Brevo App Embed in your Shopify theme',
      body: 'Navigate to Online Store -> Themes -> Customize, open App embeds, verify the Brevo Tracker is enabled, and save.',
    },
    {
      title: 'Test subscriber and cart event syncing',
      body: 'Open your live store in an incognito window, submit a test form or view a product, and confirm activity inside Brevo CRM.',
    },
  ],
  verification: [
    {
      title: 'Confirm connected status in Brevo Integrations',
      body: 'Check ://brevo.com under Integrations to verify your Shopify store shows an active green Connected status.',
    },
    {
      title: 'Verify Shopify order data in Brevo Contacts',
      body: 'Inspect a synced customer profile in Brevo CRM to ensure order counts and spend metrics are populated.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Shopify newsletter subscribers are not syncing into my Brevo list',
      fix: 'Check the Brevo app settings in Shopify Admin to ensure contact syncing and opt-in preferences are properly configured.',
    },
    {
      problem: 'Abandoned cart automation in Brevo is not triggering',
      fix: 'Verify that behavioral tracking and the Brevo App Embed are both active in your theme settings.',
    },
    {
      problem: 'Historical Shopify customers did not import immediately',
      fix: 'Bulk imports for large customer databases can take up to 30 minutes; refresh the dashboard to monitor progress.',
    },
  ],
  faqs: [
    {
      question: 'Does the official Brevo Shopify app track abandoned carts automatically?',
      answer: 'Yes, enabling behavioral tracking automatically triggers cart and order events for workflows.',
    },
    {
      question: 'Do I need to manually paste Brevo JavaScript into theme.liquid?',
      answer: 'No, script injection is handled automatically through Shopify’s App Embed system.',
    },
    {
      question: 'Is Brevo cheaper than Klaviyo for growing Shopify stores?',
      answer: 'Yes, Brevo prices plans based on email sending volume rather than total stored contacts.',
    },
  ],
  relatedSlugs: [
    'brevo-on-wordpress',
    'brevo-on-webflow',
    'klaviyo-on-shopify',
  ],
  lastVerified: '2026-11-15',
};
