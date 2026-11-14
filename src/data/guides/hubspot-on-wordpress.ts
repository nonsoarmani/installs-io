import type { Guide } from '../types';

export const hubspotOnWordpress: Guide = {
  slug: 'hubspot-on-wordpress',
  toolId: 'hubspot',
  platformId: 'wordpress',
  status: 'published',
  title: 'How to Install HubSpot CRM, Forms & Live Chat on WordPress',
  metaDescription:
    'Connect HubSpot to WordPress using the official HubSpot plugin to add visitor tracking, lead capture forms, popups, and live chat in minutes.',
  whoItsFor:
    'WordPress business owners, B2B websites, and agencies that want free CRM tracking, embedded lead forms, and live chat synced automatically.',
  whatYouGet:
    'HubSpot tracking code active across your WordPress site plus drag-and-drop HubSpot forms, popups, and live chat.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'Administrator access to your WordPress dashboard',
    'A free or paid HubSpot account (or create one during setup)',
    'A self-hosted WordPress site (or WordPress.com Business/Commerce plan)',
  ],
  steps: [
    {
      title: 'Search for the official HubSpot WordPress plugin',
      body: 'Log in to your WordPress dashboard (://yourdomain.com), open Plugins -> Add New Plugin, and search for "HubSpot" in the search bar.',
    },
    {
      title: 'Install and activate HubSpot CRM, Email Marketing & Live Chat',
      body: 'Locate "HubSpot – CRM, Email Marketing, Live Chat, Forms & Analytics" (published by HubSpot), click Install Now, wait a moment, and click Activate.',
    },
    {
      title: 'Connect your HubSpot portal',
      body: 'Click the new HubSpot item in your WordPress left sidebar, sign in to your HubSpot account (or click Create a free account), select the HubSpot portal you want to link, and click Connect Website.',
      note: 'Connecting the plugin automatically installs your HubSpot tracking code across every WordPress page—no manual header script pasting is required.',
    },
    {
      title: 'Enable HubSpot Live Chat or Forms (optional)',
      body: 'Inside WordPress -> HubSpot -> Live Chat (or Forms), create a chatflow or lead capture form and toggle it live so visitors can submit inquiries straight into your CRM.',
    },
    {
      title: 'Clear your WordPress page cache',
      body: 'Purge your cache in WP Rocket, LiteSpeed Cache, W3 Total Cache, or Cloudflare so visitors immediately receive pages with the active HubSpot tracking script.',
    },
    {
      title: 'Verify visitor tracking in HubSpot Settings',
      body: 'Open your public WordPress site in a private window, then check HubSpot -> Settings -> Tracking & Analytics -> Tracking Code to confirm your domain shows as receiving data.',
    },
  ],
  verification: [
    {
      title: 'Confirm connected status in WordPress HubSpot menu',
      body: 'In WordPress Admin -> HubSpot -> Settings, verify your HubSpot Portal ID (Hub ID) is listed as connected.',
    },
    {
      title: 'Inspect page source for ://hs-scripts.com',
      body: 'Visit your live homepage, right-click -> View Page Source, and search for "hs-scripts.com" to verify your Portal ID script is present.',
    },
  ],
  troubleshooting: [
    {
      problem: 'HubSpot plugin gets stuck on the login or portal connection screen',
      fix: 'Temporarily disable browser pop-up blockers, third-party cookie restrictions, or WordPress firewall plugins like Wordfence while completing the OAuth sign-in.',
    },
    {
      problem: 'HubSpot Live Chat widget does not appear on my WordPress pages',
      fix: 'Open HubSpot -> Automations -> Chatflows, confirm your website chatflow is toggled ON, and verify the page targeting rules match your WordPress URL.',
    },
    {
      problem: 'Existing Contact Form 7 or WPForms submissions are not syncing to HubSpot',
      fix: 'In HubSpot -> Settings -> Tracking & Analytics -> Tracking Code -> Non-HubSpot forms, ensure "Collect data from website forms" is toggled ON.',
    },
  ],
  faqs: [
    {
      question: 'Is the official HubSpot WordPress plugin free?',
      answer:
        'Yes. Both the WordPress plugin and HubSpot’s free CRM tools (including contact management, forms, live chat, and basic email marketing) are free to use.',
    },
    {
      question: 'Do I still need to paste the HubSpot tracking script into my theme header?',
      answer:
        'No. Activating and connecting the official HubSpot WordPress plugin automatically injects your tracking code across all pages.',
    },
    {
      question: 'Can I embed HubSpot forms inside Elementor or Gutenberg?',
      answer:
        'Yes. The plugin adds a native HubSpot Form block to the WordPress Gutenberg editor and an Elementor widget, or you can paste the HubSpot form shortcode anywhere.',
    },
  ],
  relatedSlugs: [
    'hubspot-on-shopify',
    'hubspot-on-webflow',
    'gohighlevel-on-wordpress',
  ],
  lastVerified: '2026-11-14',
};
