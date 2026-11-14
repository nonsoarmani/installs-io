import type { Guide } from '../types';

export const gohighlevelOnWordpress: Guide = {
  slug: 'gohighlevel-on-wordpress',
  toolId: 'gohighlevel',
  platformId: 'wordpress',
  status: 'published',
  title: 'How to Install GoHighLevel Chat Widget & Plugin on WordPress',
  metaDescription:
    'Connect GoHighLevel to WordPress using the official LeadConnector plugin to add your live chat widget, booking calendar, and lead forms.',
  whoItsFor:
    'WordPress business owners, agencies, and local service websites using GoHighLevel to capture chat leads, book appointments, and sync CRM contacts.',
  whatYouGet:
    'The GoHighLevel chat widget active across your WordPress site plus easy shortcodes to embed calendars and forms on any page.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'Administrator access to your WordPress dashboard',
    'A GoHighLevel sub-account with your Chat Widget configured',
    'Your GoHighLevel sub-account API Key (found under Settings -> Business Profile)',
  ],
  steps: [
    {
      title: 'Copy your GoHighLevel sub-account API Key',
      body: 'Log in to your GoHighLevel sub-account, click Settings in the bottom-left corner, open Business Profile, and copy your API Key.',
    },
    {
      title: 'Install the official LeadConnector WordPress plugin',
      body: 'In your WordPress Admin (://yourdomain.com), go to Plugins -> Add New Plugin, search for "LeadConnector", click Install Now, and click Activate.',
    },
    {
      title: 'Connect your API Key inside WordPress',
      body: 'Click LeadConnector in your WordPress left sidebar, paste your GoHighLevel API Key into the API Key field, and click Save.',
    },
    {
      title: 'Enable the GoHighLevel Chat Widget',
      body: 'Inside the LeadConnector plugin settings in WordPress, toggle "Enable Chat Widget" ON, click Pull / Sync to load your configured widget from GoHighLevel, and click Save.',
    },
    {
      title: 'Clear your WordPress cache and test',
      body: 'Purge any caching plugin (WP Rocket, LiteSpeed Cache, Cloudflare), open your website in an incognito window, and send a test message through the chat bubble.',
    },
  ],
  verification: [
    {
      title: 'Confirm chat bubble loads on your live WordPress site',
      body: 'Visit your public homepage while logged out of WordPress and confirm the GoHighLevel chat bubble appears in the bottom-right corner.',
    },
    {
      title: 'Verify test lead in GoHighLevel Conversations',
      body: 'Open GoHighLevel -> Conversations and confirm your test chat message created a new contact and conversation.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Chat widget does not appear after saving LeadConnector settings',
      fix: 'Clear your WordPress page cache, confirm your Chat Widget is saved inside GoHighLevel -> Sites -> Chat Widget, and click Pull again in the WordPress plugin.',
    },
    {
      problem: 'LeadConnector API Key says invalid',
      fix: 'Make sure you copied the Location/Sub-Account API Key under Settings -> Business Profile, not an Agency-level API key.',
    },
    {
      problem: 'Caching or minification plugins break the GoHighLevel widget',
      fix: 'If you use WP Rocket, Autoptimize, or LiteSpeed Cache to defer JavaScript, add "leadconnectorhq.com" to your JavaScript exclusion list.',
    },
  ],
  faqs: [
    {
      question: 'Can I embed GoHighLevel booking calendars and forms in WordPress?',
      answer:
        'Yes. Once LeadConnector is connected, you can embed any GoHighLevel form, survey, or calendar using the shortcodes listed inside the LeadConnector WordPress menu.',
    },
    {
      question: 'Do I need to paste custom JavaScript if I use the LeadConnector plugin?',
      answer:
        'No. The official LeadConnector plugin automatically injects your GoHighLevel chat widget script across your WordPress site.',
    },
    {
      question: 'Does LeadConnector work with Elementor, Divi, and Gutenberg?',
      answer:
        'Yes. You can paste LeadConnector shortcodes into any Elementor Shortcode widget, Divi Code module, or WordPress Gutenberg Shortcode block.',
    },
  ],
  relatedSlugs: [
    'gohighlevel-on-shopify',
    'gohighlevel-on-webflow',
    'klaviyo-on-wordpress',
  ],
  lastVerified: '2026-11-14',
};
