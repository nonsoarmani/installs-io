import type { Guide } from '../types';

export const crispOnShopify: Guide = {
  slug: 'crisp-on-shopify',
  toolId: 'crisp',
  platformId: 'shopify',
  status: 'published',
  title: 'How to Install Crisp Live Chat on Shopify (Official App)',
  metaDescription:
    'Add Crisp live chat to your Shopify store using the official Crisp Shopify app to answer shopper questions and view live cart contents.',
  whoItsFor:
    'Shopify merchants and customer support teams who want live chat, automated FAQs, and real-time shopper cart visibility.',
  whatYouGet:
    'Crisp live chat widget active across your Shopify storefront with customer order history and live cart items visible in your Crisp inbox.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'Owner or Admin access to your Shopify store',
    'A free or paid Crisp account (or create one during setup)',
    'A published Shopify Online Store 2.0 theme',
  ],
  steps: [
    {
      title: 'Install the official Crisp app from the Shopify App Store',
      body: 'Log in to your Shopify Admin, search for "Crisp Live Chat & Chatbot" in the top search bar or Shopify App Store, open the listing published by Crisp IM SAS, and click Install.',
    },
    {
      title: 'Authorize app permissions in Shopify',
      body: 'Review the permissions requested by Crisp (needed to sync customer order and cart context into your support inbox) and click Install.',
    },
    {
      title: 'Connect your Crisp account',
      body: 'Click "Link Crisp with Shopify" on the app setup screen, sign in with your Crisp email and password, and select the Crisp website workspace you want to connect.',
    },
    {
      title: 'Enable the Crisp App Embed in your Shopify theme',
      body: 'In Shopify Admin, go to Online Store -> Themes and click Customize on your live theme. Click the App embeds icon in the left sidebar, toggle "Crisp Chatbox" ON, and click Save in the top right.',
      warning:
        'If you do not toggle the Crisp App Embed ON inside your Shopify Theme Editor and click Save, the chat widget will not appear on your storefront.',
    },
    {
      title: 'Test the chat widget on your live store',
      body: 'Open your Shopify storefront in an incognito browser window, click the Crisp chat bubble in the bottom-right corner, send a test message, and verify it appears inside your Crisp Inbox.',
    },
  ],
  verification: [
    {
      title: 'Confirm chat bubble appears on your storefront',
      body: 'Visit your live Shopify domain and verify the Crisp chat icon loads cleanly in the bottom-right corner on both desktop and mobile.',
    },
    {
      title: 'Verify Shopify order sync in Crisp Inbox',
      body: 'Open the test conversation inside your Crisp Inbox and check the right-hand sidebar to confirm the Shopify plugin badge is connected.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Crisp chat icon is missing on my Shopify store after installing the app',
      fix: 'Go to Shopify Admin -> Online Store -> Themes -> Customize -> App embeds, confirm "Crisp Chatbox" is toggled ON, and click Save.',
    },
    {
      problem: 'Crisp widget overlaps with my Shopify sticky Add to Cart or WhatsApp button',
      fix: 'Open Crisp -> Settings -> Website Settings -> Chatbox & Email appearance -> Chatbox position to move the Crisp bubble to the bottom-left or adjust vertical padding.',
    },
    {
      problem: 'I switched to a new Shopify theme and Crisp disappeared',
      fix: 'App embeds are stored per theme. Open Customize -> App embeds on your newly published theme and toggle "Crisp Chatbox" back ON.',
    },
  ],
  faqs: [
    {
      question: 'Does the official Crisp Shopify app show what is in a shopper’s cart?',
      answer:
        'Yes. When a shopper messages you through Crisp on your Shopify store, your agents can see their current cart items and past Shopify orders directly inside the Crisp sidebar.',
    },
    {
      question: 'Is Crisp free for Shopify stores?',
      answer:
        'Yes. Crisp offers a free Basic plan that includes live chat, mobile apps, and 2 support agent seats with no time limit.',
    },
    {
      question: 'Do I need to edit theme.liquid to install Crisp on Shopify?',
      answer:
        'No. The official Crisp app uses Shopify’s modern App Embed system so you can enable or disable the widget with one toggle without touching code.',
    },
  ],
  relatedSlugs: [
    'crisp-on-webflow',
    'crisp-on-wordpress',
    'klaviyo-on-shopify',
  ],
  lastVerified: '2026-11-13',
};
