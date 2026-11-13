import type { Guide } from '../types';

export const googleAnalytics4OnShopify: Guide = {
  slug: 'google-analytics-4-on-shopify',
  toolId: 'ga4',
  platformId: 'shopify',
  status: 'published',
  title: 'How to Install Google Analytics 4 on Shopify (Official App)',
  metaDescription:
    'Connect Google Analytics 4 to your Shopify store using the free Google & YouTube app to track product views, add-to-carts, and purchases.',
  whoItsFor:
    'Shopify store owners and ecommerce marketers who want accurate funnel and purchase tracking in GA4 without editing Liquid theme code.',
  whatYouGet:
    'Full Google Analytics 4 tracking across your storefront and checkout, including automatic ecommerce events like view_item, add_to_cart, and purchase.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'Admin access to your Shopify store',
    'A Google account with a Google Analytics 4 property and web data stream',
    'Password protection turned off on your Shopify storefront so Google can verify visits',
  ],
  steps: [
    {
      title: 'Install the Google & YouTube sales channel',
      body: 'Log in to your Shopify Admin. In the top search bar or under Apps, search for "Google & YouTube" (published by Google), open the app listing, and click Install.',
      warning:
        'Use the official Google & YouTube app by Google. Avoid third-party GA4 apps unless you need custom server-side tagging, as running both creates duplicate purchase numbers.',
    },
    {
      title: 'Connect your Google account',
      body: 'Open the Google & YouTube channel in your Shopify Admin left sidebar. Click Connect Google account and sign in with the Google email that owns your GA4 property.',
    },
    {
      title: 'Start the Google Analytics 4 setup',
      body: 'On the Google & YouTube Overview page, look for the card labeled "Looking only to set up Google Analytics 4?" (or "Optimize Your Business with Google Analytics") and click Get started.',
      note: 'You do not need to set up Google Merchant Center or run paid ads to use the free Google Analytics 4 integration inside this app.',
    },
    {
      title: 'Select your GA4 property and connect',
      body: 'Choose your existing Google Analytics 4 property from the dropdown menu. Verify that the property name matches your store, then click Connect to link the web data stream.',
    },
    {
      title: 'Remove any old manual tracking tags',
      body: 'Go to Online Store -> Preferences in your Shopify Admin and check the Google Analytics section, as well as your theme.liquid file, to confirm no legacy G- or UA- scripts were pasted manually.',
    },
    {
      title: 'Test live visits and ecommerce events',
      body: 'Open your live store in an incognito browser window, view a product, and add it to your cart. Open Google Analytics -> Reports -> Realtime to confirm your active session and events appear.',
    },
  ],
  verification: [
    {
      title: 'Check connected status in Shopify',
      body: 'Inside Shopify Admin -> Sales channels -> Google & YouTube -> Settings, confirm your GA4 property ID is listed as active under Google Analytics.',
    },
    {
      title: 'Verify ecommerce events in GA4 Realtime',
      body: 'In Google Analytics Realtime, check the Event count by Event name card after clicking a product on your store. You should see page_view, view_item, and add_to_cart fire automatically.',
    },
  ],
  troubleshooting: [
    {
      problem: 'My GA4 property does not appear in the Shopify dropdown',
      fix: 'Confirm you signed in with the Google account that has Administrator or Editor permissions on that GA4 property, and verify that a Web data stream exists under GA4 Admin -> Data Streams.',
    },
    {
      problem: 'Purchases are being counted twice in Google Analytics',
      fix: 'Check Online Store -> Themes -> Edit code -> theme.liquid and Settings -> Customer events for any manually pasted gtag.js snippets or Google Tag Manager containers firing a duplicate GA4 tag.',
    },
    {
      problem: 'Realtime reports show zero visitors after setup',
      fix: 'Make sure your store password page is disabled under Online Store -> Preferences, and test in a browser window without ad-blocking extensions enabled.',
    },
  ],
  faqs: [
    {
      question: 'Does the official Shopify integration track checkout and purchases?',
      answer:
        'Yes. Shopify natively sends checkout steps and purchase revenue data to GA4 through the Google & YouTube app without requiring Shopify Plus.',
    },
    {
      question: 'Do I need to paste my G- Measurement ID into theme.liquid?',
      answer:
        'No. The Google & YouTube app injects the tag automatically across your storefront and checkout pages. Pasting it manually will cause duplicate tracking.',
    },
    {
      question: 'How long does it take for sales data to show in standard reports?',
      answer:
        'Activity appears in the Realtime report within minutes, while standard Acquisition and Monetization reports take 24 to 48 hours to process.',
    },
  ],
  relatedSlugs: [
    'meta-conversions-api-on-shopify',
    'klaviyo-on-shopify',
    'google-analytics-4-on-webflow',
  ],
  lastVerified: '2026-11-13',
};
