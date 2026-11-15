import type { Guide } from '../types';

export const hotjarOnWordpress: Guide = {
  slug: 'hotjar-on-wordpress',
  toolId: 'hotjar',
  platformId: 'wordpress',
  status: 'published',
  title: 'How to Install Hotjar Heatmaps & Session Replay on WordPress',
  metaDescription:
    'Add Hotjar heatmaps, session recordings, and feedback polls to WordPress using the official Hotjar plugin or WPCode without editing theme files.',
  whoItsFor:
    'WordPress site owners, marketers, and WooCommerce stores that want click heatmaps, scroll maps, and real visitor session recordings.',
  whatYouGet:
    'Hotjar tracking script safely installed across your WordPress site so it survives theme updates and captures heatmaps automatically.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'Administrator access to your WordPress dashboard',
    'A free or paid Hotjar (Contentsquare) account with your numeric Site ID',
    'A WordPress site running over HTTPS',
  ],
  steps: [
    {
      title: 'Copy your Hotjar Site ID',
      body: 'Log in to Hotjar, click Sites & Organizations in the left sidebar, and copy the numeric Site ID listed next to your WordPress domain.',
    },
    {
      title: 'Install the official Hotjar WordPress plugin',
      body: 'Log in to your WordPress Admin, go to Plugins -> Add New Plugin, search for "Hotjar", install the official plugin, and click Activate.',
      note: 'Alternatively, you can paste your Hotjar script into WPCode Global Header.',
    },
    {
      title: 'Enter your Hotjar Site ID in WordPress Settings',
      body: 'In your WordPress left menu, go to Settings -> Hotjar, paste your numeric Site ID, and click Save Changes.',
    },
    {
      title: 'Purge your WordPress page cache',
      body: 'Clear all caching plugins or CDN caches so visitors load pages with the active Hotjar script.',
    },
    {
      title: 'Verify installation inside Hotjar',
      body: 'Return to Hotjar, open Sites & Organizations, click Verify installation next to your WordPress URL, and confirm status.',
    },
  ],
  verification: [
    {
      title: 'Confirm green Verified status in Hotjar',
      body: 'Verify your WordPress domain shows a green Verified badge in Hotjar.',
    },
    {
      title: 'Inspect page source for ://hotjar.com',
      body: 'View your public homepage source code and check for "://hotjar.com".',
    },
  ],
  troubleshooting: [
    {
      problem: 'Hotjar verification fails after saving Site ID',
      fix: 'Clear all caching, disable browser ad blockers, and ensure only the numeric Site ID was entered.',
    },
    {
      problem: 'JavaScript optimization plugins break recordings',
      fix: 'Exclude "://hotjar.com" and "hj" from JS defer/delay settings.',
    },
    {
      problem: 'WooCommerce checkout pages are missing',
      fix: 'Check Hotjar Site Settings -> Session targeting rules.',
    },
  ],
  faqs: [
    {
      question: 'Is the official Hotjar WordPress plugin free?',
      answer: 'Yes, both the plugin and Hotjar’s Basic plan are free.',
    },
    {
      question: 'Will updating my WordPress theme remove Hotjar?',
      answer: 'No, tracking hooks remain active across theme updates.',
    },
    {
      question: 'Does Hotjar work alongside Google Analytics 4?',
      answer: 'Yes, both scripts run simultaneously without conflict.',
    },
  ],
  relatedSlugs: [
    'hotjar-on-shopify',
    'hotjar-on-webflow',
    'posthog-on-wordpress',
  ],
  lastVerified: '2026-11-15',
};
