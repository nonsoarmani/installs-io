import type { Guide } from '../types';

export const googleAnalytics4OnWordpress: Guide = {
  slug: 'google-analytics-4-on-wordpress',
  toolId: 'ga4',
  platformId: 'wordpress',
  status: 'published',
  title: 'How to Install Google Analytics 4 on WordPress (Site Kit)',
  metaDescription:
    "Add Google Analytics 4 to WordPress with Google's Site Kit plugin: install it, connect your Google account, link GA4 and check live data.",
  whoItsFor:
    'WordPress site owners and bloggers who want traffic reports in Google Analytics 4 without editing theme files.',
  whatYouGet:
    'GA4 tracking on your WordPress site through the official Site Kit plugin, with your traffic reports available in your Google Analytics account.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A WordPress site where you are an Administrator',
    'A Google account that can create or access a Google Analytics property',
    'A site that opens on HTTPS (the padlock in the browser address bar)',
  ],
  steps: [
    {
      title: 'Open the plugin installer',
      body: 'Log in to your WordPress dashboard (usually yourdomain.com/wp-admin). In the left menu, click Plugins, then Add New Plugin.',
    },
    {
      title: 'Install Site Kit by Google',
      body: 'In the search box type "Site Kit by Google". Find the plugin published by Google, click Install Now, wait a few seconds, then click Activate.',
      warning:
        'Choose the plugin published by Google. Look-alike plugins with similar names exist, and some contain ads or extra tracking.',
    },
    {
      title: 'Start the Site Kit setup',
      body: 'After activation, a Site Kit item appears in your left menu. Click it and follow the on-screen prompt to start setup. WordPress will ask you to sign in with Google.',
    },
    {
      title: 'Sign in and allow access',
      body: 'Choose the Google account that owns (or can edit) your Analytics property. Google shows the permissions Site Kit needs. Read them and approve to continue, then return to your WordPress dashboard when prompted.',
    },
    {
      title: 'Connect Google Analytics',
      body: 'In WordPress, go to Site Kit, then Settings, then Connect More Services, find Analytics and click Set up Analytics. Choose your existing GA4 account, property and web data stream, or let Site Kit create a new one for you. Click Configure Analytics to finish. You are returned to the Site Kit dashboard.',
      note: 'Site Kit places the Google Analytics code on your site by default when it finds no existing code. If you already pasted a GA4 code into your theme or another plugin, remove it so Site Kit is the only source.',
    },
    {
      title: 'Check Realtime and wait for reports',
      body: 'Open your public site in a private window and click a few pages. In Google Analytics open Reports, then Realtime, and look for yourself. Site Kit shows a notice that Analytics is gathering data, and full reports usually take a day or two to fill in.',
    },
  ],
  verification: [
    {
      title: 'Confirm the tag is on your page',
      body: 'Open your site, right-click, choose View page source and search for googletagmanager. You should find a Google tag loader line with an ID in it. Google notes that your GA4 property ID is stored inside that tag ID, so you will not see the property ID directly.',
    },
    {
      title: 'Check Realtime in GA4',
      body: 'In Google Analytics Realtime you should see an active user soon after visiting, and data can take up to about 30 minutes to appear. Site Kit excludes logged-in users from tracking by default, so test while logged out of WordPress, for example in a private window.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Site Kit cannot connect to Google',
      fix: 'Check that your site URL in WordPress Settings, General matches the address you actually use, including https and www. Security plugins or firewalls can also block the connection, so try pausing them briefly.',
    },
    {
      problem: 'No data appears in Realtime',
      fix: 'Ad blockers hide visits from Analytics. Test in a clean private window with extensions off, while logged out of WordPress, because logged-in users are not tracked by default. Caching plugins may also need to be cleared after the install.',
    },
    {
      problem: 'My numbers are double',
      fix: 'Another plugin or a theme setting is probably adding the tag as well. Search your plugins for other analytics or header-code tools and remove the duplicate tag.',
    },
    {
      problem: 'I want my own visits counted, or I want to stop Site Kit adding the code',
      fix: 'In WordPress go to Site Kit, Settings, Connected Services, Analytics, then Edit. There you can change the Place Google Analytics code option and the Exclude Analytics setting for logged-in users.',
    },
  ],
  faqs: [
    {
      question: 'Do I need Site Kit, or can I paste the code myself?',
      answer:
        'You can paste the tag yourself using a header-code plugin. Site Kit is easier for beginners because it creates and places the tag for you.',
    },
    {
      question: 'Does Site Kit slow down my site?',
      answer:
        'The tag itself is small and loads in the background, but any plugin has some cost. Run a speed test before and after if performance matters to you.',
    },
    {
      question: 'Will this bring back my old Universal Analytics data?',
      answer:
        'No. Site Kit connects Google Analytics 4 only, and it starts collecting from the day you connect it. Check Google\'s help pages for what happened to older Universal Analytics reports.',
    },
  ],
  relatedSlugs: ['google-analytics-4-on-shopify', 'google-analytics-4-on-webflow', 'meta-conversions-api-on-wordpress'],
  lastVerified: '2026-11-13',
};
