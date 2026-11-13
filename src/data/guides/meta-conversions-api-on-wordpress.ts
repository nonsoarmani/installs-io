import type { Guide } from '../types';

export const metaConversionsApiOnWordpress: Guide = {
  slug: 'meta-conversions-api-on-wordpress',
  toolId: 'meta-capi',
  platformId: 'wordpress',
  status: 'published',
  title: 'How to Install Meta Pixel & Conversions API on WordPress',
  metaDescription:
    'Connect Meta Pixel and server-side Conversions API (CAPI) to WordPress using the official Meta for WordPress plugin to track leads and WooCommerce sales.',
  whoItsFor:
    'WordPress site owners, lead-gen businesses, and WooCommerce stores running Facebook and Instagram ads that need reliable server-side conversion tracking.',
  whatYouGet:
    'Official Meta Pixel and Conversions API (CAPI) integration on WordPress with automatic event deduplication and WooCommerce checkout tracking.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'Administrator access to your WordPress dashboard',
    'A Meta Business Suite account with Admin access to your Meta Pixel (Dataset) and Ad Account',
    'An SSL certificate (HTTPS) active on your WordPress domain',
  ],
  steps: [
    {
      title: 'Install the official Meta for WordPress plugin',
      body: 'Log in to your WordPress Admin (://yourdomain.com), go to Plugins -> Add New Plugin, search for "Meta pixel for WordPress" (published by Meta), click Install Now, and click Activate.',
      warning:
        'Verify the plugin author says "By Meta". Many third-party plugins have similar names and either charge monthly fees for Conversions API or fail to deduplicate events.',
    },
    {
      title: 'Launch the Meta connection wizard',
      body: 'In your WordPress left sidebar, go to Settings -> Meta (or click Get Started on the plugin activation banner) and click Get Started to open Meta’s setup popup.',
    },
    {
      title: 'Select your Business Portfolio, Page, and Pixel',
      body: 'Sign in with your Facebook account, choose your Meta Business Portfolio, Facebook Page, Ad Account, and the Meta Pixel (Dataset) you want to connect, then click Continue.',
    },
    {
      title: 'Enable Conversions API and Automatic Advanced Matching',
      body: 'In the plugin permissions and settings screen, ensure both "Conversions API" and "Automatic Advanced Matching" are toggled ON, confirm your WordPress site URL, and click Done.',
      note: 'Enabling Conversions API allows your WordPress server to send conversion events directly to Meta’s server alongside the browser Pixel, improving attribution accuracy.',
    },
    {
      title: 'Clear your WordPress cache',
      body: 'If you use WP Rocket, LiteSpeed Cache, W3 Total Cache, or Cloudflare caching, click Purge/Clear All Cache so the updated Meta scripts load for visitors.',
    },
    {
      title: 'Test events in Meta Events Manager',
      body: 'Open Meta Events Manager -> Datasets, select your Pixel, go to the Test Events tab, enter your WordPress URL, and browse a page or submit a form to confirm both Browser and Server events arrive.',
    },
  ],
  verification: [
    {
      title: 'Confirm connected status in WordPress Settings',
      body: 'In WordPress Admin -> Settings -> Meta, verify your Pixel ID is displayed as active with Conversions API enabled.',
    },
    {
      title: 'Check Browser and Server connection methods in Meta',
      body: 'In Meta Events Manager -> Overview, click on PageView or Purchase after live traffic visits your site. You should see both "Browser" and "Server" listed under Connection Method.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Meta setup popup closes or fails to save settings',
      fix: 'Temporarily pause WordPress security plugins (like Wordfence) or ad blockers in your browser during setup, as they often block cross-domain OAuth popups from facebook.com.',
    },
    {
      problem: 'Events are firing twice in Meta Events Manager',
      fix: 'Check your theme header/footer scripts, WPCode/Header & Footer plugins, or Google Tag Manager to ensure you do not have a second manual Meta Pixel script running alongside the official Meta plugin.',
    },
    {
      problem: 'WooCommerce purchase values are missing',
      fix: 'Ensure WooCommerce is active before running the Meta plugin setup wizard so the plugin automatically maps ViewContent, AddToCart, InitiateCheckout, and Purchase events.',
    },
  ],
  faqs: [
    {
      question: 'Does the official Meta for WordPress plugin include Conversions API for free?',
      answer:
        'Yes. Meta’s official WordPress plugin includes built-in Conversions API support and event deduplication at no extra cost.',
    },
    {
      question: 'Do I need to generate a manual Conversions API access token?',
      answer:
        'No. When you connect through the official Meta plugin wizard, Meta generates and stores the server token automatically in the background.',
    },
    {
      question: 'Does it work with Contact Form 7, WPForms, and Elementor forms?',
      answer:
        'Yes. The official plugin automatically detects standard WordPress form plugins and fires Lead events when visitors submit forms.',
    },
  ],
  relatedSlugs: [
    'meta-conversions-api-on-shopify',
    'google-analytics-4-on-wordpress',
    'crisp-on-wordpress',
  ],
  lastVerified: '2026-11-13',
};
