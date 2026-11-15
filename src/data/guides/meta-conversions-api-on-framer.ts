import type { Guide } from '../types';

export const metaConversionsApiOnFramer: Guide = {
  slug: 'meta-conversions-api-on-framer',
  toolId: 'meta-capi',
  platformId: 'framer',
  status: 'published',
  title: 'How to Set Up Meta Conversions API (CAPI) on Framer',
  metaDescription:
    'Connect Meta Pixel and Meta Conversions API to your Framer site using Custom Code and GTM Server-Side or CAPI Gateway for reliable ad tracking.',
  whoItsFor:
    'Framer SaaS founders, agencies, and performance marketers running Facebook and Instagram ads who want resilient server-side conversion attribution.',
  whatYouGet:
    'Browser Meta Pixel and server-side Meta Conversions API events (PageView, ViewContent, Lead, CompleteRegistration) synced with event_id deduplication.',
  difficulty: 'Intermediate',
  estimatedMinutes: 20,
  prerequisites: [
    'A Framer project on a paid Site plan (Mini, Basic, Pro, or Business) required to unlock Custom Code',
    'A Meta Business Portfolio with admin access to your Dataset (Pixel) ID and Conversions API Access Token',
    'Your custom domain verified inside Meta Business Settings -> Brand Safety and Suitability -> Domains',
  ],
  steps: [
    {
      title: 'Copy your Meta Pixel base code and Dataset ID from Events Manager',
      body: 'Open Meta Events Manager, select Data Sources in the left navigation, choose your Pixel dataset, copy your 15-to-16 digit Dataset ID, and copy the Meta Pixel base snippet.',
    },
    {
      title: 'Paste the Meta Pixel base script into Framer Custom Code',
      body: 'Open Framer -> Site Settings -> Custom Code, paste your Meta Pixel base code (replacing YOUR_PIXEL_ID) into "Start of <head> tag", and click Save.',
      code: {
        language: 'html',
        filename: 'Framer Site Settings -> Start of <head> tag',
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
    },
    {
      title: 'Generate a Conversions API Access Token in Meta Events Manager',
      body: 'In Meta Events Manager under Settings -> Conversions API, generate a new access token and copy it for your Framer server endpoint.',
    },
    {
      title: 'Configure server-side routing via Meta CAPI Gateway or GTM Server',
      body: 'Because Framer is a static/client-hosted frontend without a backend server, connect your Dataset ID and Access Token through Meta Conversions API Gateway (Stape/AWS) or a GTM Server container.',
    },
    {
      title: 'Publish Framer and verify event deduplication',
      body: 'Click Publish -> Update in the top-right corner of Framer, then confirm your CAPI gateway or GTM server tag passes matching event_id values alongside browser Pixel events.',
    },
  ],
  verification: [
    {
      title: 'Inspect live Browser and Server events in Meta Test Events',
      body: 'Open Meta Events Manager -> Test Events, enter your published Framer custom domain, submit a test form or button click, and confirm both Browser and Server events appear.',
    },
    {
      title: 'Confirm deduplication status in Events Manager Overview',
      body: 'Wait 20 to 30 minutes after live visitors browse your Framer site, open Events Manager -> Overview, and verify events display "Browser • Server" with deduplication active.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Custom Code field is locked inside Framer Site Settings',
      fix: 'Framer requires a paid Site plan (Mini, Basic, Pro, or Business) to add custom scripts; upgrade your site plan before pasting the Meta Pixel base snippet.',
    },
    {
      problem: 'Meta Pixel Helper shows no Pixel firing on my Framer URL',
      fix: 'Click Publish -> Update in the top-right corner of Framer after saving Site Settings, and temporarily pause browser ad blockers when inspecting with Meta Pixel Helper.',
    },
    {
      problem: 'Duplicate Lead or PageView events inflating Meta Ads reporting',
      fix: 'Ensure you do not install the Meta Pixel base code in both Framer Site Settings Custom Code and Google Tag Manager simultaneously, and confirm event_id deduplication is enabled.',
    },
  ],
  faqs: [
    {
      question: 'Does Framer have a built-in native Meta Conversions API integration?',
      answer:
        'No. Because Framer serves static frontend sites without a customer-configurable backend server, Meta Conversions API requires pairing your browser Pixel with Meta CAPI Gateway, Stape, or server-side GTM.',
    },
    {
      question: 'Can I track native Framer Form submissions as Meta Lead conversions?',
      answer:
        'Yes. You can trigger a Lead event on your Framer form thank-you redirect page or fire a webhook from Framer Forms into Make/Zapier/Stape to send a server-side Lead event to Meta CAPI.',
    },
    {
      question: 'Does Meta Pixel track Framer single-page route changes automatically?',
      answer:
        'Yes. Modern fbevents.js automatically hooks into browser History API pushState changes in Framer single-page sites and logs PageView events as visitors navigate between routes.',
    },
  ],
  relatedSlugs: [
    'meta-conversions-api-on-webflow',
    'meta-conversions-api-on-squarespace',
    'google-tag-manager-on-framer',
  ],
  lastVerified: '2026-11-15',
};
