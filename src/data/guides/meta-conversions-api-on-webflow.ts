import type { Guide } from '../types';

export const metaConversionsApiOnWebflow: Guide = {
  slug: 'meta-conversions-api-on-webflow',
  toolId: 'meta-capi',
  platformId: 'webflow',
  status: 'published',
  title: 'How to Install Meta Pixel & Conversions API on Webflow',
  metaDescription:
    'Set up Meta Pixel and server-side Conversions API (CAPI) on Webflow using Meta Conversions API Gateway or Google Tag Manager for accurate ad tracking.',
  whoItsFor:
    'Webflow startups, SaaS companies, and service businesses running Facebook and Instagram ads that need server-side lead and conversion tracking.',
  whatYouGet:
    'Browser Meta Pixel plus server-side Conversions API (CAPI) tracking on Webflow with deduplicated PageView and Lead events.',
  difficulty: 'Intermediate',
  estimatedMinutes: 25,
  prerequisites: [
    'A Webflow project on a paid Site plan (required for Custom Code)',
    'A Meta Business Suite account with Admin access to your Meta Pixel (Dataset)',
    'A Google Tag Manager server container or Meta Conversions API Gateway account for server-side events',
  ],
  steps: [
    {
      title: 'Copy your Meta Pixel base code from Meta Events Manager',
      body: 'Open Meta Events Manager -> Data Sources (Datasets), select your Pixel, click Add Events -> From a New Website -> Install code manually, and copy the Meta Pixel base code containing your 15- to 16-digit Pixel ID.',
    },
    {
      title: 'Paste the Meta Pixel base code into Webflow Head Code',
      body: 'In Webflow, open Site Settings -> Custom Code, paste your Meta Pixel base code into the Head Code section, replace YOUR_PIXEL_ID with your actual Pixel ID, and click Save Changes.',
      code: {
        language: 'html',
        filename: 'Webflow Head Code',
        code: `<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://facebook.net');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<!-- End Meta Pixel Code -->`,
      },
      warning:
        'If you already load Meta Pixel inside Google Tag Manager, do not paste it into Webflow Custom Code as well, or PageView events will double-count.',
    },
    {
      title: 'Connect server-side Conversions API via Meta Gateway or sGTM',
      body: 'Because Webflow is a static/hosted frontend without a custom PHP/Node backend, open Meta Events Manager -> Settings -> Conversions API -> Set up through partner integration (or Conversions API Gateway / Stape server-side GTM) and connect your Webflow custom domain.',
      note: 'Meta Conversions API Gateway routes server events automatically from your existing Meta Pixel without requiring custom backend code on Webflow.',
    },
    {
      title: 'Track Webflow form submissions as Lead events',
      body: 'On your Webflow Thank You page (or form success trigger), fire fbq("track", "Lead") with a matching eventID so both browser and server deduplicate form conversions cleanly.',
    },
    {
      title: 'Publish your Webflow site and verify in Test Events',
      body: 'Click Publish in the top-right corner of Webflow, then open Meta Events Manager -> Test Events, enter your live Webflow URL, and confirm both Browser and Server events appear.',
    },
  ],
  verification: [
    {
      title: 'Verify browser Pixel with Meta Pixel Helper',
      body: 'Install the free Meta Pixel Helper Chrome extension, visit your published Webflow URL, and confirm your Pixel ID fires PageView with a green checkmark.',
    },
    {
      title: 'Confirm Server connection method in Meta Events Manager',
      body: 'In Meta Events Manager -> Overview, click on PageView or Lead after test traffic and confirm both "Browser" and "Server" appear under Connection Method.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Meta Pixel Helper shows no pixel found on my Webflow site',
      fix: 'Confirm you clicked Publish in Webflow after saving Custom Code, and verify you replaced YOUR_PIXEL_ID with your numeric Pixel ID without extra spaces.',
    },
    {
      problem: 'Meta Events Manager warns about duplicate events without deduplication',
      fix: 'Ensure your browser Pixel and server-side CAPI gateway share the same event_name and event_id parameter so Meta merges them into one conversion.',
    },
    {
      problem: 'Ad blockers prevent my test events from reaching Meta',
      fix: 'Browser ad blockers block connect.facebook.net; test in a clean incognito window with extensions disabled, and note that server-side CAPI captures events even when ad blockers are active.',
    },
  ],
  faqs: [
    {
      question: 'Does Webflow have a built-in native Conversions API toggle like Shopify?',
      answer:
        'No. Webflow natively supports Google Analytics 4, so running Meta Conversions API on Webflow requires connecting Meta Conversions API Gateway, Stape, or server-side Google Tag Manager alongside your browser Pixel.',
    },
    {
      question: 'Can I install Meta Pixel on a free Webflow Starter plan?',
      answer:
        'No. Webflow requires a paid Site plan to unlock Site Settings Custom Code.',
    },
    {
      question: 'Why do I need Conversions API if I already have the Meta Pixel on Webflow?',
      answer:
        'Browser pixels lose conversion data due to iOS privacy restrictions, Safari Intelligent Tracking Prevention, and ad blockers. Conversions API sends conversion events server-to-server so Meta Ads optimizes on complete lead data.',
    },
  ],
  relatedSlugs: [
    'meta-conversions-api-on-shopify',
    'meta-conversions-api-on-wordpress',
    'google-analytics-4-on-webflow',
  ],
 lastVerified: '2026-11-13',

};
