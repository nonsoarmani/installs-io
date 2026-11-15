import type { Guide } from '../types';

export const metaConversionsApiOnSquarespace: Guide = {
  slug: 'meta-conversions-api-on-squarespace',
  toolId: 'meta-capi',
  platformId: 'squarespace',
  status: 'published',
  title: 'How to Set Up Meta Conversions API (CAPI) on Squarespace',
  metaDescription:
    'Connect Meta Pixel and Meta Conversions API to your Squarespace store using External API Keys or GTM Server-Side for accurate ad tracking.',
  whoItsFor:
    'Squarespace Commerce merchants, course creators, and service brands running Meta ads who need reliable server-side conversion tracking.',
  whatYouGet:
    'Meta Pixel and server-side Conversions API events (PageView, ViewContent, AddToCart, InitiateCheckout, Purchase) synced with your Meta Ads Manager.',
  difficulty: 'Intermediate',
  estimatedMinutes: 20,
  prerequisites: [
    'A Squarespace website on a Business or Commerce plan with a connected custom domain',
    'A Meta Business Portfolio with admin access to your Meta Dataset (Pixel) ID and Conversions API Access Token',
    'Your custom domain verified inside Meta Business Settings -> Brand Safety and Suitability -> Domains',
  ],
  steps: [
    {
      title: 'Copy your Meta Dataset (Pixel) ID from Events Manager',
      body: 'Open Meta Events Manager, click Data Sources in the left navigation, choose your Pixel dataset, and copy the 15-to-16 digit Dataset ID under Settings.',
    },
    {
      title: 'Connect your Pixel ID in Squarespace External API Keys',
      body: 'Open your Squarespace site menu, go to Website -> Pages -> Website Tools -> External API Keys (or Settings -> Developer Tools -> External API Keys), paste your Pixel ID into Meta Pixel, and click Save.',
    },
    {
      title: 'Generate a Conversions API Access Token in Meta Events Manager',
      body: 'Return to Meta Events Manager -> Settings, scroll down to the Conversions API section, click Generate access token under Set up manually, and copy the token.',
    },
    {
      title: 'Connect server-side delivery via Meta CAPI Gateway or GTM Server',
      body: 'Because Squarespace does not have a native CAPI token input field, connect your Dataset ID and Access Token via Meta Conversions API Gateway (Stape/AWS) or a server-side GTM container.',
    },
    {
      title: 'Verify event_id deduplication between Browser and Server',
      body: 'Ensure your CAPI gateway or GTM server tag passes the same event_id parameter as your browser Pixel so Meta deduplicates PageView, AddToCart, and Purchase events cleanly.',
    },
  ],
  verification: [
    {
      title: 'Test live events in Meta Events Manager Test Events',
      body: 'Open Meta Events Manager -> Test Events, enter your live Squarespace URL, browse a product or submit a test form, and confirm both Browser and Server events appear.',
    },
    {
      title: 'Confirm deduplication status in Dataset Overview',
      body: 'Wait 20 to 30 minutes after live visitors hit your Squarespace store, open Events Manager -> Overview, and check that events display "Browser • Server" with deduplication active.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Squarespace External API Keys only asks for a Pixel ID and has no CAPI token box',
      fix: 'Squarespace native integration handles the browser Pixel only; pair it with Meta Conversions API Gateway or a server-side GTM container to transmit server events.',
    },
    {
      problem: 'Duplicate Purchase events inflating ROAS in Meta Ads Manager',
      fix: 'Remove any manual Meta Pixel base code pasted into Squarespace Header Code Injection or Order Confirmation Page Injection if External API Keys is already active.',
    },
    {
      problem: 'Low Event Match Quality (EMQ) score on Squarespace checkout events',
      fix: 'Turn on Automatic Advanced Matching in Meta Events Manager -> Settings so customer email, phone, and billing city parameters are hashed and matched.',
    },
  ],
  faqs: [
    {
      question: 'Does Squarespace have a built-in native Meta Conversions API integration?',
      answer:
        'Squarespace natively supports the browser Meta Pixel via External API Keys, while server-side Meta Conversions API requires connecting Meta CAPI Gateway, Stape, or server-side Google Tag Manager.',
    },
    {
      question: 'Can I still use Squarespace External API Keys alongside Meta CAPI Gateway?',
      answer:
        'Yes. Meta Conversions API Gateway automatically pairs with the browser Pixel events sent by Squarespace External API Keys and handles server routing and deduplication.',
    },
    {
      question: 'Which e-commerce events does Squarespace send to Meta automatically?',
      answer:
        'Squarespace native Meta Pixel integration automatically tracks PageView, ViewContent, Search, AddToCart, InitiateCheckout, AddPaymentInfo, and Purchase events.',
    },
  ],
  relatedSlugs: [
    'meta-conversions-api-on-shopify',
    'meta-conversions-api-on-webflow',
    'google-tag-manager-on-squarespace',
  ],
  lastVerified: '2026-11-15',
};
