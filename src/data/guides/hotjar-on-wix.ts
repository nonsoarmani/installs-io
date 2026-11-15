import type { Guide } from '../types';

export const hotjarOnWix: Guide = {
  slug: 'hotjar-on-wix',
  toolId: 'hotjar',
  platformId: 'wix',
  status: 'published',
  title: 'How to Install Hotjar Heatmaps & Recordings on Wix',
  metaDescription:
    'Add the Hotjar tracking script to your Wix website using Wix Custom Code to capture heatmaps, session recordings, and user feedback.',
  whoItsFor:
    'Wix designers, UX teams, and store owners who want visual click heatmaps, scroll maps, and real user session replays to spot conversion bottlenecks.',
  whatYouGet:
    'Hotjar tracking active across all published Wix pages, capturing heatmaps, session recordings, and on-site feedback polls.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Wix website on a paid Premium plan with a connected custom domain (required for Custom Code)',
    'A Hotjar (or Contentsquare) account with your Site ID ready under Sites & Organizations',
    'Owner or Website Manager permissions inside your Wix Dashboard',
  ],
  steps: [
    {
      title: 'Copy your Hotjar Tracking Code from Sites & Organizations',
      body: 'Log in to Hotjar, click Sites & Organizations in the top navigation, locate your site property, click Install Tracking Code, and copy the JavaScript snippet.',
    },
    {
      title: 'Open Custom Code in your Wix Dashboard',
      body: 'Sign in to your Wix site dashboard, scroll down the left sidebar to Settings, select Development & Integrations, and click Custom Code.',
    },
    {
      title: 'Paste the Hotjar snippet into a new Custom Code block',
      body: 'Click "+ Add Custom Code" in the upper right, paste your Hotjar tracking snippet (replacing YOUR_HOTJAR_SITE_ID with your numeric Site ID), and name it "Hotjar Tracking".',
      code: {
        language: 'html',
        filename: 'Wix Custom Code (Head)',
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
      title: 'Place the code in Head across All Pages',
      body: 'Under "Add Code to Pages," choose "All pages" with "Load code once" selected, set "Place Code in" to "Head" as recommended by Hotjar, and click Apply.',
    },
    {
      title: 'Publish your Wix site to start recording sessions',
      body: 'Open the Wix Editor and click Publish in the top-right corner so the Hotjar script deploys to your live custom domain.',
    },
  ],
  verification: [
    {
      title: 'Run Hotjar built-in installation verification',
      body: 'Visit your live Wix custom domain in a new tab, then return to Hotjar -> Sites & Organizations -> Verify Installation and confirm the green "Hotjar installation verified" message appears.',
    },
    {
      title: 'Check for a new session recording in Hotjar',
      body: 'Browse two or three pages on your live Wix site and confirm a new session replay appears inside Hotjar -> Recordings within a few minutes.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Hotjar verification fails after pasting the script into Wix',
      fix: 'Make sure you clicked Publish in the Wix Editor, verify your Site ID matches the exact domain registered in Hotjar, and temporarily disable browser ad blockers during testing.',
    },
    {
      problem: 'Heatmaps show missing styles or blank elements on Wix pages',
      fix: 'Wix dynamically renders certain animations on scroll; scroll slowly down the full page during a test session so Hotjar captures a complete DOM snapshot.',
    },
    {
      problem: 'No recordings appear despite verified installation',
      fix: 'Check your Hotjar session targeting and traffic coverage settings under Settings -> Session Targeting & Tracking to confirm recording capture is toggled ON.',
    },
  ],
  faqs: [
    {
      question: 'Should I put the Hotjar script in Head or Body - end on Wix?',
      answer:
        'Hotjar recommends placing the script in the Head section so it initializes immediately on page load and captures early clicks and scroll behavior accurately.',
    },
    {
      question: 'Does Hotjar slow down my Wix website performance?',
      answer:
        'No. The Hotjar loader script injects asynchronously without blocking Wix page rendering or impacting Core Web Vitals.',
    },
    {
      question: 'Can I install Hotjar on Wix through Google Tag Manager instead?',
      answer:
        'Yes. If Google Tag Manager is already connected to your Wix site, you can deploy Hotjar using the built-in Hotjar Tracking Code tag template inside GTM.',
    },
  ],
  relatedSlugs: [
    'hotjar-on-webflow',
    'hotjar-on-shopify',
    'hotjar-on-wordpress',
  ],
  lastVerified: '2026-11-15',
};
