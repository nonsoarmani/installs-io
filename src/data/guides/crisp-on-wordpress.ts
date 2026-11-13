import type { Guide } from '../types';

export const crispOnWordpress: Guide = {
  slug: 'crisp-on-wordpress',
  toolId: 'crisp',
  platformId: 'wordpress',
  status: 'published',
  title: 'How to Install Crisp Live Chat on WordPress (Official Plugin)',
  metaDescription:
    'Add Crisp live chat to your WordPress or WooCommerce site using the official Crisp plugin with one-click account linking and zero coding.',
  whoItsFor:
    'WordPress site owners, service businesses, and WooCommerce stores that want live customer chat, chatbots, and a shared inbox.',
  whatYouGet:
    'The Crisp live chat widget active across your WordPress site with WooCommerce customer order context synced to your Crisp inbox.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'Administrator access to your WordPress dashboard',
    'A free or paid Crisp account (or create one during setup)',
    'A WordPress site running over HTTPS',
  ],
  steps: [
    {
      title: 'Search for the official Crisp WordPress plugin',
      body: 'Log in to your WordPress dashboard (://yourdomain.com), go to Plugins -> Add New Plugin, and search for "Crisp" in the keyword search box.',
    },
    {
      title: 'Install and activate Crisp Live Chat',
      body: 'Find "Crisp - Live Chat and Chatbot" (published by Crisp), click Install Now, wait a few seconds, and click Activate.',
    },
    {
      title: 'Connect your Crisp account',
      body: 'Click the new Crisp item in your WordPress left sidebar, then click "Connect with Crisp" (or "Link with Crisp"). Sign in with your Crisp email and password when prompted.',
    },
    {
      title: 'Select your Crisp workspace',
      body: 'Choose the Crisp website workspace you want to connect to your WordPress site and click Continue to authorize the link. WordPress will confirm that Crisp is now active.',
      note: 'If you run WooCommerce, the official Crisp plugin automatically passes logged-in customer details and cart items into your Crisp inbox sidebar.',
    },
    {
      title: 'Clear your WordPress page cache',
      body: 'If you use a caching plugin (such as WP Rocket, LiteSpeed Cache, or W3 Total Cache) or Cloudflare CDN, purge your cache so visitors see the new chat widget immediately.',
    },
    {
      title: 'Send a test message from your public site',
      body: 'Open your WordPress site in an incognito browser window, click the Crisp chat bubble in the bottom-right corner, and send a test message to verify it arrives in your Crisp Inbox.',
    },
  ],
  verification: [
    {
      title: 'Check plugin status in WordPress',
      body: 'In your WordPress Admin left sidebar, click Crisp and confirm it displays a confirmation screen showing your connected Crisp Website ID.',
    },
    {
      title: 'Confirm live chat bubble on your frontend',
      body: 'Open your homepage while logged out of WordPress and verify the Crisp chat icon loads in the bottom-right corner.',
    },
  ],
  troubleshooting: [
    {
      problem: 'The Crisp chat widget does not show up after activating the plugin',
      fix: 'Clear all WordPress caching plugins and browser cache, and verify that you completed the "Connect with Crisp" step inside the WordPress Crisp menu.',
    },
    {
      problem: 'JavaScript optimization plugins break the Crisp chat box',
      fix: 'If you use WP Rocket or Autoptimize to defer or combine JavaScript files, add "client.crisp.chat" to your JavaScript exclusion list.',
    },
    {
      problem: 'I want to customize the chat color and welcome message',
      fix: 'All appearance settings are controlled inside your Crisp dashboard under Settings -> Website Settings -> Chatbox & Email appearance, not inside WordPress.',
    },
  ],
  faqs: [
    {
      question: 'Is the Crisp WordPress plugin free to use?',
      answer:
        'Yes. Both the official WordPress plugin and Crisp’s Basic plan (including live chat, mobile apps, and 2 agent seats) are free forever.',
    },
    {
      question: 'Can I install Crisp without a plugin by pasting the script?',
      answer:
        'Yes, you can paste the Crisp HTML snippet into your theme footer or WPCode plugin, though the official plugin is recommended because it adds WooCommerce customer data sync.',
    },
    {
      question: 'Does Crisp work with WordPress multisite installations?',
      answer:
        'Yes. You can activate the plugin on individual subsites and connect each subsite to its own Crisp Website ID.',
    },
  ],
  relatedSlugs: [
    'crisp-on-webflow',
    'google-analytics-4-on-wordpress',
    'meta-conversions-api-on-wordpress',
  ],
  lastVerified: '2026-11-13',
};
