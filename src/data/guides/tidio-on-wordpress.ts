import type { Guide } from '../types';

export const tidioOnWordpress: Guide = {
  slug: 'tidio-on-wordpress',
  toolId: 'tidio',
  platformId: 'wordpress',
  status: 'published',
  title: 'How to Install Tidio Live Chat on WordPress & WooCommerce',
  metaDescription:
    'Add Tidio live chat and AI chatbots to WordPress and WooCommerce using the official Tidio plugin with zero code required.',
  whoItsFor:
    'WordPress business owners, service websites, and WooCommerce stores that want live customer chat, automated lead capture, and AI support.',
  whatYouGet:
    'Tidio live chat widget running across your WordPress pages with optional WooCommerce cart and order visibility.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'Administrator access to your WordPress dashboard',
    'A free or paid Tidio account (or create one during plugin setup)',
    'A WordPress site running over HTTPS',
  ],
  steps: [
    {
      title: 'Search for the official Tidio WordPress plugin',
      body: 'Log in to your WordPress dashboard (://yourdomain.com), navigate to Plugins -> Add New Plugin, and type "Tidio" into the search box.',
    },
    {
      title: 'Install and activate Tidio Live Chat & AI Chatbots',
      body: 'Locate "Tidio – Live Chat & AI Chatbots" (published by Tidio Ltd.), click Install Now, wait for installation to finish, and click Activate.',
    },
    {
      title: 'Connect your Tidio account inside WordPress',
      body: 'Click the new Tidio Chat item in your WordPress left sidebar, sign in with your existing Tidio email and password (or register a new account), and select your workspace.',
    },
    {
      title: 'Click Integrate selected project',
      body: 'Confirm your website workspace inside the WordPress Tidio panel and click Integrate selected project so WordPress automatically injects the chat widget script.',
      note: 'If you run WooCommerce, Tidio automatically detects your store and syncs shopper cart items and order history into your agent inbox.',
    },
    {
      title: 'Clear your WordPress page cache',
      body: 'Purge all caches inside WP Rocket, LiteSpeed Cache, W3 Total Cache, or Cloudflare so visitors load pages with the active Tidio chat widget.',
    },
    {
      title: 'Test the chat bubble on your public WordPress site',
      body: 'Open your website in an incognito browser tab while logged out of WordPress, click the Tidio chat icon, and send a test message to your Tidio Inbox.',
    },
  ],
  verification: [
    {
      title: 'Confirm connected status in WordPress Tidio menu',
      body: 'Click Tidio Chat in your WordPress left sidebar and verify it shows your connected project and opens the Tidio panel button.',
    },
    {
      title: 'Verify live chat widget on your frontend',
      body: 'Visit your public homepage in a private window and confirm the Tidio chat launcher renders cleanly in the bottom-right corner.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Tidio chat bubble does not show up after activating the plugin',
      fix: 'Clear all WordPress caching plugins and CDN caches, and verify you clicked "Integrate selected project" inside the WordPress Tidio menu.',
    },
    {
      problem: 'JavaScript optimization plugins break or delay the Tidio widget',
      fix: 'If you use WP Rocket or Autoptimize to defer JavaScript execution, add "code.tidio.co" to your JavaScript exclusion list.',
    },
    {
      problem: 'Tidio widget overlaps with my WordPress theme back-to-top button',
      fix: 'Open Tidio -> Settings -> Channels -> Live Chat -> Appearance -> Widget Position to adjust horizontal and vertical margin offsets.',
    },
  ],
  faqs: [
    {
      question: 'Is the Tidio WordPress plugin free to use?',
      answer:
        'Yes. Both the official WordPress plugin and Tidio’s free plan (including live chat, email integration, and desktop/mobile apps) are free forever.',
    },
    {
      question: 'Will updating my WordPress theme remove the Tidio chat widget?',
      answer:
        'No. Because the official Tidio plugin loads the widget through WordPress hooks rather than theme files, it stays active across all theme updates.',
    },
    {
      question: 'Can I hide Tidio on specific WordPress pages?',
      answer:
        'Yes. Inside Tidio -> Settings -> Channels -> Live Chat -> Appearance -> Widget Visibility, you can add URL rules to hide the chat widget on specific pages.',
    },
  ],
  relatedSlugs: [
    'tidio-on-shopify',
    'tidio-on-webflow',
    'crisp-on-wordpress',
  ],
  lastVerified: '2026-11-15',
};
