import type { Guide } from '../types';

export const googleTagManagerOnWordpress: Guide = {
  slug: 'google-tag-manager-on-wordpress',
  toolId: 'gtm',
  platformId: 'wordpress',
  status: 'published',
  title: 'How to Install Google Tag Manager on WordPress (GTM4WP)',
  metaDescription:
    'Add Google Tag Manager (GTM) to WordPress and WooCommerce using the free GTM4WP plugin without editing theme files or losing tags on updates.',
  whoItsFor:
    'WordPress site owners, marketers, and WooCommerce stores that want clean Google Tag Manager container setup plus rich ecommerce dataLayer events.',
  whatYouGet:
    'Google Tag Manager installed across your WordPress site with automatic dataLayer variables and optional WooCommerce purchase tracking.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'Administrator access to your WordPress dashboard',
    'A Google Tag Manager account and web container ID (GTM-XXXXXXX)',
    'A WordPress site running over HTTPS',
  ],
  steps: [
    {
      title: 'Copy your GTM Container ID',
      body: 'Open ://google.com, open your workspace, and copy your Container ID in the top-right bar formatted as GTM-XXXXXXX.',
    },
    {
      title: 'Install the GTM4WP plugin in WordPress',
      body: 'Log in to your WordPress Admin (://yourdomain.com), go to Plugins -> Add New Plugin, search for "GTM4WP" (published by Thomas Geiger), click Install Now, and click Activate.',
    },
    {
      title: 'Enter your GTM Container ID in plugin settings',
      body: 'In your WordPress left menu, go to Settings -> Google Tag Manager. Paste your GTM-XXXXXXX ID into the Google Tag Manager ID field.',
    },
    {
      title: 'Turn Container Code ON and save changes',
      body: 'Under Container code ON/OFF, select "On", leave Container code compatibility mode on "Off (no tweak, right placement)" unless your theme conflicts, and click Save Changes at the bottom.',
      note: 'If you run WooCommerce, open the Integration -> WooCommerce tab inside GTM4WP settings and check "Track enhanced e-commerce" to push purchase and add-to-cart events into the dataLayer automatically.',
    },
    {
      title: 'Purge your WordPress and CDN cache',
      body: 'Clear all caches in WP Rocket, LiteSpeed Cache, W3 Total Cache, or Cloudflare so visitors receive pages with the new GTM container script.',
    },
    {
      title: 'Verify your container in Tag Assistant',
      body: 'Return to Google Tag Manager, click Preview, enter your live WordPress URL, and confirm Tag Assistant connects and detects your GTM-XXXXXXX container.',
    },
  ],
  verification: [
    {
      title: 'Confirm Tag Assistant detects your container',
      body: 'In GTM Preview mode, verify that Tag Assistant shows "Connected" and lists Container Loaded on your WordPress homepage.',
    },
    {
      title: 'Check page source for your GTM- ID',
      body: 'Open your homepage in a private browser tab, right-click -> View Page Source, and search for your GTM-XXXXXXX ID.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Tag Assistant cannot connect after saving GTM4WP settings',
      fix: 'Verify that "Container code ON/OFF" is set to "On" (GTM4WP defaults to Off on first install) and clear your WordPress caching plugin.',
    },
    {
      problem: 'JavaScript optimization plugins break GTM or dataLayer events',
      fix: 'If you use WP Rocket or Autoptimize to delay or defer JavaScript, add "googletagmanager.com" and "gtm.js" to your JavaScript exclusion list.',
    },
    {
      problem: 'GA4 or Meta Pixel events are firing twice on WordPress',
      fix: 'If you fire GA4 or Meta Pixel inside GTM, deactivate standalone plugins like Site Kit Analytics or Meta for WordPress so tags do not double-fire.',
    },
  ],
  faqs: [
    {
      question: 'Is GTM4WP safe to use with automatic WordPress theme updates?',
      answer:
        'Yes. Because GTM4WP injects your container via WordPress hooks rather than editing theme files directly, your GTM setup stays intact when you update or switch themes.',
    },
    {
      question: 'Why does GTM4WP set Container Code to Off by default?',
      answer:
        'GTM4WP leaves container output turned Off initially so you can configure dataLayer options before going live; always switch it to On and click Save Changes.',
    },
    {
      question: 'Can I exclude logged-in WordPress admins from GTM tracking?',
      answer:
        'Yes. Inside WordPress Settings -> Google Tag Manager -> Basic data -> Visitors, you can check "Exclude logged-in users" or specific roles like Administrator.',
    },
  ],
  relatedSlugs: [
    'google-tag-manager-on-shopify',
    'google-tag-manager-on-webflow',
    'google-analytics-4-on-wordpress',
  ],
  lastVerified: '2026-11-14',
};
