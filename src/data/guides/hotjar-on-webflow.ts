import type { Guide } from '../types';

export const hotjarOnWebflow: Guide = {
  slug: 'hotjar-on-webflow',
  toolId: 'hotjar',
  platformId: 'webflow',
  status: 'published',
  title: 'How to Install Hotjar Heatmaps & Session Replay on Webflow',
  metaDescription:
    'Add Hotjar heatmaps, session recordings, and user feedback widgets to your Webflow site using Site Settings Custom Code.',
  whoItsFor:
    'Webflow designers, SaaS marketers, and conversion optimizers who want to see how visitors scroll, click, and interact on published Webflow pages.',
  whatYouGet:
    'Hotjar tracking script active across every published Webflow page with heatmaps, session recordings, and feedback polls enabled.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Webflow project on a paid Site plan (required to unlock Custom Code)',
    'A free or paid Hotjar (Contentsquare) account with your numeric Site ID',
    'Permission to publish changes to your live Webflow domain',
  ],
  steps: [
    {
      title: 'Copy your Hotjar tracking code',
      body: 'Log in to Hotjar, click Sites & Organizations, and copy your tracking code.',
    },
    {
      title: 'Open Webflow Project Settings -> Custom Code',
      body: 'In your Webflow Dashboard, navigate to Project Settings and open the Custom Code tab.',
    },
    {
      title: 'Paste the Hotjar snippet into Head Code',
      body: 'Paste your Hotjar tracking script into the Head Code section, replacing YOUR_HOTJAR_SITE_ID with your numeric Site ID.',
      code: {
        language: 'html',
        filename: 'Webflow Head Code',
        code: `<!-- Hotjar Tracking Code -->
<script>
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
      warning:
        'Keep the opening <script> and closing </script> tags intact when pasting into Webflow Head Code.',
    },
    {
      title: 'Save Custom Code and publish your Webflow site',
      body: 'Save the changes in Webflow and publish your site to your live domain.',
    },
    {
      title: 'Verify installation inside Hotjar',
      body: 'Return to your Hotjar dashboard, open Sites & Organizations, click Verify installation next to your live Webflow URL, and confirm the tracking badge turns green.',
    },
  ],
  verification: [
    {
      title: 'Confirm green Verified badge in Hotjar',
      body: 'Verify your Webflow site displays an active tracking status in Hotjar.',
    },
    {
      title: 'Check incoming recordings in Hotjar',
      body: 'Visit your published Webflow URL and confirm a session recording appears under Hotjar -> Recordings.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Hotjar verification fails on my Webflow URL',
      fix: 'Ensure you published your Webflow changes, disable ad blockers during testing, and confirm your site ID has no quotes.',
    },
    {
      problem: 'Heatmaps look broken or missing custom Webflow fonts',
      fix: 'Authorize your primary custom domain in Hotjar Site Settings.',
    },
    {
      problem: 'Hotjar feedback widget covers a floating button on Webflow',
      fix: 'Adjust the widget placement in Hotjar Survey & Feedback settings.',
    },
  ],
  faqs: [
    {
      question: 'Can I install Hotjar on a free Webflow Starter plan?',
      answer:
        'No. Webflow requires a paid Site plan to access Site Settings Custom Code.',
    },
    {
      question: 'Does Hotjar record visits inside the Webflow Designer?',
      answer:
        'No. Custom code only executes on published staging or live domains.',
    },
    {
      question: 'Will Hotjar slow down my Webflow site speed?',
      answer:
        'No. Hotjar loads asynchronously after the page renders.',
    },
  ],
  relatedSlugs: [
    'hotjar-on-shopify',
    'hotjar-on-wordpress',
    'posthog-on-webflow',
  ],
  lastVerified: '2026-11-15',
};
