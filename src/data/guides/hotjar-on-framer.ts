import type { Guide } from '../types';

export const hotjarOnFramer: Guide = {
  slug: 'hotjar-on-framer',
  toolId: 'hotjar',
  platformId: 'framer',
  status: 'published',
  title: 'How to Install Hotjar Heatmaps & Recordings on Framer',
  metaDescription:
    'Add the Hotjar tracking script to your Framer website using Site Settings Custom Code to capture heatmaps, recordings, and feedback.',
  whoItsFor:
    'Framer designers, SaaS teams, and conversion optimizers wanting visual click heatmaps, scroll depth maps, and session replays on their Framer pages.',
  whatYouGet:
    'Hotjar tracking active across all published Framer routes, recording click heatmaps, user session replays, and on-site feedback polls.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Framer project on a paid Site plan (Mini, Basic, Pro, or Business) required to unlock Custom Code',
    'A Hotjar (or Contentsquare) account with your numeric Site ID ready under Sites & Organizations',
    'Editor or Owner permissions inside your Framer workspace to publish updates',
  ],
  steps: [
    {
      title: 'Copy your Hotjar Tracking Code from Sites & Organizations',
      body: 'Inside your Hotjar workspace, go to Sites & Organizations and copy the tracking snippet for your Framer domain.',
    },
    {
      title: 'Open Custom Code in Framer Site Settings',
      body: 'Launch your Framer canvas, open Site Settings from the top toolbar, and select the General -> Custom Code panel for Hotjar.',
    },
    {
      title: 'Paste the Hotjar snippet into Start of <head> tag',
      body: 'Paste the Hotjar tracking code into the "Start of <head> tag" field inside Framer Site Settings, replacing YOUR_HOTJAR_SITE_ID with your numeric Site ID, and click Save.',
      code: {
        language: 'html',
        filename: 'Framer Site Settings -> Start of <head> tag',
        code: `<script>
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:YOUR_HOTJAR_SITE_ID,hjsv:6};
    a=o.getElementsByTagName('head');
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://hotjar.com');
</script>`,
      },
    },
    {
      title: 'Publish your Framer website to push the script live',
      body: 'Click Publish in the top-right corner of the Framer editor and select Update so the Hotjar loader script deploys to your live domain.',
    },
    {
      title: 'Verify installation inside your Hotjar dashboard',
      body: 'Open your published Framer URL in an incognito browser tab, then return to Hotjar -> Sites & Organizations and click Verify Installation to confirm active tracking.',
    },
  ],
  verification: [
    {
      title: 'Confirm green Tracking active status inside Hotjar',
      body: 'Open Hotjar -> Sites & Organizations and verify your Framer domain displays the green "Tracking active" badge.',
    },
    {
      title: 'Inspect a new session replay in Hotjar Recordings',
      body: 'Click through two or three pages on your live Framer site and confirm a new session recording appears inside Hotjar -> Recordings within a few minutes.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Custom Code field is locked inside Framer Site Settings',
      fix: 'Framer restricts site-wide Custom Code injection to paid Site plans; upgrade from the Free tier to at least a Mini or Basic plan before pasting the Hotjar snippet.',
    },
    {
      problem: 'Hotjar verification fails after saving in Framer Site Settings',
      fix: 'Ensure you clicked Publish -> Update in the top-right corner of Framer after saving, and temporarily pause browser ad blockers while running Verify Installation.',
    },
    {
      problem: 'Heatmaps show blank sections where Framer scroll animations appear',
      fix: 'Framer triggers appear animations when elements enter the viewport; scroll smoothly down the entire page during a test visit so Hotjar captures the full rendered layout.',
    },
  ],
  faqs: [
    {
      question: 'Does Hotjar track Framer single-page route changes automatically?',
      answer:
        'Yes. Hotjar automatically detects browser History API URL changes in Framer single-page sites and separates heatmaps and session pageviews by route.',
    },
    {
      question: 'Should I put the Hotjar snippet in Start of <head> or End of <body> in Framer?',
      answer:
        'Place it in "Start of <head> tag" as recommended by Hotjar so it initializes immediately on load and captures early clicks and scroll depth accurately.',
    },
    {
      question: 'Will Hotjar slow down my Framer animations or Core Web Vitals?',
      answer:
        'No. The Hotjar script loads asynchronously with r.async=1, ensuring your Framer transitions, custom fonts, and images render without blocking.',
    },
  ],
  relatedSlugs: [
    'hotjar-on-webflow',
    'hotjar-on-squarespace',
    'hotjar-on-wix',
  ],
  lastVerified: '2026-11-15',
};
