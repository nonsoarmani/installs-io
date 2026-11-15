import type { Guide } from '../types';

export const hotjarOnSquarespace: Guide = {
  slug: 'hotjar-on-squarespace',
  toolId: 'hotjar',
  platformId: 'squarespace',
  status: 'published',
  title: 'How to Install Hotjar Heatmaps & Recordings on Squarespace',
  metaDescription:
    'Add the Hotjar tracking script to your Squarespace website using Header Code Injection to capture heatmaps, recordings, and feedback.',
  whoItsFor:
    'Squarespace designers, store owners, and UX teams wanting visual click heatmaps, scroll depth maps, and session recordings to optimize conversions.',
  whatYouGet:
    'Hotjar tracking active across all published Squarespace pages, collecting click heatmaps, user session replays, and feedback widget responses.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Squarespace website on a Business, Commerce, Core, Plus, or Advanced plan (required for Code Injection)',
    'A Hotjar (or Contentsquare) account with your numeric Site ID ready under Sites & Organizations',
    'Website Owner or Administrator permissions inside your Squarespace dashboard',
  ],
  steps: [
    {
      title: 'Copy your Hotjar Tracking Code from Sites & Organizations',
      body: 'Log in to Hotjar, click Sites & Organizations in the top navigation bar, locate your site property, click Install Tracking Code, and copy the JavaScript snippet.',
    },
    {
      title: 'Open Code Injection in your Squarespace dashboard',
      body: 'From your Squarespace dashboard, go to Website -> Pages -> Website Tools -> Code Injection to install Hotjar.',
    },
    {
      title: 'Paste the Hotjar snippet into the Header field',
      body: 'Paste the Hotjar tracking code into the Header box inside Code Injection, replacing YOUR_HOTJAR_SITE_ID with your numeric Site ID, and click Save.',
      code: {
        language: 'html',
        filename: 'Squarespace Header Code Injection',
        code: `<script>
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:YOUR_HOTJAR_SITE_ID,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://hotjar.com');
</script>`,
      },
    },
    {
      title: 'Load your live Squarespace site in an incognito window',
      body: 'Open your published custom domain in an incognito browser tab because Squarespace disables Header Code Injection scripts while you are logged into the editor.',
    },
    {
      title: 'Verify installation inside your Hotjar dashboard',
      body: 'Return to Hotjar -> Sites & Organizations, click Verify Installation next to your site URL, and wait a few seconds for the green confirmation checkmark.',
    },
  ],
  verification: [
    {
      title: 'Confirm green verification status inside Hotjar',
      body: 'Open Hotjar -> Sites & Organizations and verify your Squarespace domain displays the green "Tracking active" status badge.',
    },
    {
      title: 'Inspect your first session replay in Hotjar Recordings',
      body: 'Click through two or three pages on your public Squarespace domain and confirm a new session recording appears inside Hotjar -> Recordings within a few minutes.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Code Injection is locked on my Squarespace account',
      fix: 'A Squarespace Business or Commerce plan is needed to unlock Code Injection for Hotjar.',
    },
    {
      problem: 'Hotjar verification fails when testing my Squarespace domain',
      fix: 'Ensure you saved your changes in Code Injection, verify your Site ID matches the domain registered in Hotjar, and pause browser ad blockers during verification.',
    },
    {
      problem: 'Heatmaps miss fade-in sections or gallery images on Squarespace',
      fix: 'Squarespace fluid engine animations reveal elements on scroll; scroll slowly from top to bottom during a test visit so Hotjar captures the full rendered page.',
    },
  ],
  faqs: [
    {
      question: 'Should I paste the Hotjar script in Header or Footer Code Injection on Squarespace?',
      answer:
        'Paste it in Header Code Injection as recommended by Hotjar so the script initializes immediately and captures early scroll and click interactions.',
    },
    {
      question: 'Does Hotjar slow down my Squarespace website speed?',
      answer:
        'No. The Hotjar script loads asynchronously with r.async=1, meaning it runs in parallel without blocking your Squarespace layout or images from rendering.',
    },
    {
      question: 'Can I install Hotjar on Squarespace using Google Tag Manager instead?',
      answer:
        'Yes. If Google Tag Manager is already installed via Squarespace Code Injection, you can deploy Hotjar using GTM’s built-in Hotjar Tracking Code tag template.',
    },
  ],
  relatedSlugs: [
    'hotjar-on-webflow',
    'hotjar-on-wix',
    'hotjar-on-shopify',
  ],
  lastVerified: '2026-11-15',
};
