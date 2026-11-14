import type { Guide } from '../types';

export const klaviyoOnWordpress: Guide = {
  slug: 'klaviyo-on-wordpress',
  toolId: 'klaviyo',
  platformId: 'wordpress',
  status: 'published',
  title: 'How to Install Klaviyo on WordPress & WooCommerce (Official Plugin)',
  metaDescription:
    'Connect Klaviyo to WordPress and WooCommerce using the official Klaviyo plugin to sync subscribers, enable onsite tracking, and display signup popups.',
  whoItsFor:
    'WordPress site owners, bloggers, and WooCommerce store operators who want email/SMS automation, abandoned cart flows, and onsite signup forms.',
  whatYouGet:
    'Klaviyo onsite tracking active across your WordPress site plus full WooCommerce order and checkout event syncing.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'Administrator access to your WordPress dashboard',
    'A Klaviyo account (free tier or paid plan) with your 6-character Public API Key',
    'WordPress running over HTTPS',
  ],
  steps: [
    {
      title: 'Install the official Klaviyo WordPress plugin',
      body: 'Log in to your WordPress Admin (://yourdomain.com), go to Plugins -> Add New Plugin, search for "Klaviyo", install the official plugin published by Klaviyo, Inc., and click Activate.',
    },
    {
      title: 'Copy your Klaviyo Public API Key (Site ID)',
      body: 'Open your Klaviyo account in another tab, click your account name in the bottom-left corner, and go to Settings -> API Keys. Copy your 6-character Public API Key / Site ID at the top.',
      warning:
        'Use only your 6-character Public API Key in the WordPress plugin settings. Never paste a Private API Key (starting with pk_) into public site settings.',
    },
    {
      title: 'Connect Klaviyo inside WordPress Settings',
      body: 'In your WordPress left sidebar, click Klaviyo (or Settings -> Klaviyo). Paste your 6-character Public API Key into the API Key field and click Save Settings.',
    },
    {
      title: 'Connect WooCommerce data sync (for online stores)',
      body: 'If you run WooCommerce, log in to Klaviyo -> Integrations -> Add Integration, search for WooCommerce, enter your store URL, and click Connect to WooCommerce to authorize customer, product, and order syncing.',
      note: 'If you only run a standard WordPress blog or lead-gen website without WooCommerce, you can skip this step—the WordPress plugin already enables Klaviyo popups and Active on Site tracking.',
    },
    {
      title: 'Clear your WordPress page cache',
      body: 'If you use WP Rocket, LiteSpeed Cache, W3 Total Cache, or Cloudflare caching, clear all caches so the Klaviyo onsite JavaScript loads for visitors.',
    },
    {
      title: 'Test onsite tracking and popups',
      body: 'Open your WordPress site in an incognito window with ?utm_email=test@example.com added to the URL, then check Klaviyo -> Audience -> Profiles to verify your test profile and Active on Site event appear.',
    },
  ],
  verification: [
    {
      title: 'Verify klaviyo.js loads on your live site',
      body: 'Visit your homepage, right-click -> View Page Source, and press Ctrl+F (or Cmd+F) to search for "klaviyo.js" and confirm your 6-character Site ID appears.',
    },
    {
      title: 'Check Active on Site in Klaviyo Metrics',
      body: 'Open Klaviyo -> Analytics -> Metrics and confirm "Active on Site" shows recent test activity.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Klaviyo popup forms are set to Live in Klaviyo but do not appear on WordPress',
      fix: 'Purge your WordPress caching plugin, verify your 6-character Public API Key is saved under WordPress -> Klaviyo, and check that your form’s URL targeting rules match your domain.',
    },
    {
      problem: 'JavaScript optimization plugins delay or break Klaviyo popups',
      fix: 'If you use WP Rocket or Autoptimize to defer JavaScript, add "klaviyo.com" to your JavaScript delay exclusion list.',
    },
    {
      problem: 'WooCommerce checkout events are not showing in Klaviyo',
      fix: 'Open Klaviyo -> Integrations -> WooCommerce and confirm the integration status shows Connected with webhooks active.',
    },
  ],
  faqs: [
    {
      question: 'Does the official Klaviyo plugin work on WordPress without WooCommerce?',
      answer:
        'Yes. You can install the official Klaviyo WordPress plugin on any standard WordPress site to run Klaviyo popup forms, flyouts, embedded forms, and Active on Site tracking.',
    },
    {
      question: 'Do I need to manually paste Klaviyo code into header.php?',
      answer:
        'No. The official Klaviyo WordPress plugin injects the onsite tracking script automatically once you save your 6-character Public API Key.',
    },
    {
      question: 'Will Klaviyo slow down my WordPress website?',
      answer:
        'No. The plugin loads Klaviyo’s script asynchronously from Klaviyo’s global CDN without blocking initial page rendering.',
    },
  ],
  relatedSlugs: [
    'klaviyo-on-shopify',
    'klaviyo-on-webflow',
    'google-analytics-4-on-wordpress',
  ],
  lastVerified: '2026-11-13',

};
