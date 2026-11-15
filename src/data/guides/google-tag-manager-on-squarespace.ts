import type { Guide } from '../types';

export const googleTagManagerOnSquarespace: Guide = {
  slug: 'google-tag-manager-on-squarespace',
  toolId: 'gtm',
  platformId: 'squarespace',
  status: 'published',
  title: 'How to Install Google Tag Manager (GTM) on Squarespace',
  metaDescription:
    'Add Google Tag Manager to your Squarespace website using Code Injection Header and Footer fields to manage all your marketing tags.',
  whoItsFor:
    'Squarespace site owners, agencies, and marketers who want to deploy analytics pixels, ad conversion tags, and custom event tracking from one GTM container.',
  whatYouGet:
    'Google Tag Manager running across all published Squarespace pages with both the primary <head> script and fallback <body> noscript tag installed.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Squarespace website on a Business, Commerce, Core, Plus, or Advanced plan (required for Code Injection)',
    'A Google Tag Manager account and Web container with your GTM-XXXXXXX snippets ready',
    'Website Owner or Administrator permissions inside your Squarespace dashboard',
  ],
  steps: [
    {
      title: 'Copy both GTM snippets from Google Tag Manager',
      body: 'Log in to Google Tag Manager, click your GTM-XXXXXXX Container ID in the top-right header bar, and copy both the <head> JavaScript snippet and the <body> noscript snippet.',
    },
    {
      title: 'Open Code Injection in your Squarespace dashboard',
      body: 'Access your Squarespace site settings via Website -> Pages -> Website Tools -> Code Injection for GTM.',
    },
    {
      title: 'Paste the primary GTM script into the Header field',
      body: 'Paste the first Google Tag Manager snippet into the Header box inside Code Injection, replacing GTM-XXXXXXX with your actual Container ID.',
      code: {
        language: 'html',
        filename: 'Squarespace Header Code Injection',
        code: `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://googletagmanager.com;
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->`,
      },
    },
    {
      title: 'Paste the noscript fallback into the Footer field and save',
      body: 'Scroll down to the Footer box in Code Injection, paste the GTM noscript iframe snippet below with your Container ID, and click Save at the top.',
      code: {
        language: 'html',
        filename: 'Squarespace Footer Code Injection',
        code: `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://googletagmanager.com"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`,
      },
    },
    {
      title: 'Publish your GTM workspace container',
      body: 'Return to Google Tag Manager and click Submit -> Publish in the top-right corner so your container is live before testing your Squarespace domain.',
    },
  ],
  verification: [
    {
      title: 'Connect Google Tag Assistant Preview to your live domain',
      body: 'Click Preview inside Google Tag Manager, enter your live Squarespace URL, click Connect, and confirm Tag Assistant opens with your GTM- ID connected.',
    },
    {
      title: 'Check gtm.js network status in an incognito browser',
      body: 'Open your published Squarespace site in an incognito tab, open Chrome DevTools -> Network tab, filter by "gtm.js", and confirm a 200 status response.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Code Injection is unavailable on my Squarespace account',
      fix: 'Squarespace locks Code Injection on Personal plans; upgrade to a Business or Core plan (or higher) to access the Header and Footer injection boxes.',
    },
    {
      problem: 'Tag Assistant cannot detect GTM on my Squarespace site',
      fix: 'Ensure you are testing your public live domain rather than the internal .squarespace.com editor preview URL, and confirm your GTM container is published.',
    },
    {
      problem: 'GA4 or Meta tags fire twice after adding GTM to Squarespace',
      fix: 'Remove any Measurement IDs or Pixel IDs entered inside Squarespace -> Settings -> Developer Tools -> External API Keys if those same tags are now deployed via GTM.',
    },
  ],
  faqs: [
    {
      question: 'Does Squarespace have a built-in field for a GTM Container ID?',
      answer:
        'No. While Squarespace has a built-in External API Keys field for GA4 and Meta Pixel, Google Tag Manager must be added via Code Injection Header and Footer.',
    },
    {
      question: 'Can I track Squarespace Commerce purchases through Google Tag Manager?',
      answer:
        'Yes. You can add a custom order confirmation trigger on the /checkout/order-confirmed path or use Squarespace Order Confirmation Page Code Injection to push transaction values to the dataLayer.',
    },
    {
      question: 'Will GTM work on Squarespace 7.0 templates with Ajax Loading enabled?',
      answer:
        'On older Squarespace 7.0 templates with Ajax Loading turned on, standard pageview triggers may only fire on the first page load unless you also configure a History Change trigger in GTM.',
    },
  ],
  relatedSlugs: [
    'google-analytics-4-on-squarespace',
    'google-tag-manager-on-webflow',
    'google-tag-manager-on-wix',
  ],
  lastVerified: '2026-11-15',
};
