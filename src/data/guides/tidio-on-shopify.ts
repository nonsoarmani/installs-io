import type { Guide } from '../types';

export const tidioOnShopify: Guide = {
  slug: 'tidio-on-shopify',
  toolId: 'tidio',
  platformId: 'shopify',
  status: 'published',
  title: 'How to Install Tidio Live Chat & AI Agent on Shopify',
  metaDescription:
    'Add Tidio live chat and Lyro AI customer support to your Shopify store using the official Tidio Shopify app and Theme App Embed.',
  whoItsFor:
    'Shopify store owners and ecommerce support teams who want live chat, AI-powered product recommendations, and real-time shopper cart visibility.',
  whatYouGet:
    'Tidio live chat widget running across your Shopify storefront with live shopper cart previews and order lookup inside your Tidio inbox.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'Owner or Admin access to your Shopify store',
    'A free or paid Tidio account (or create one during the app setup)',
    'A published Shopify Online Store 2.0 theme',
  ],
  steps: [
    {
      title: 'Install the official Tidio app from the Shopify App Store',
      body: 'Log in to your Shopify Admin, search for "Tidio Live Chat & AI Chatbots" in the App Store, and click Install.',
    },
    {
      title: 'Approve app permissions inside Shopify',
      body: 'Review the permissions requested by Tidio for shopper cart and order history tracking, then click Install.',
    },
    {
      title: 'Create or link your Tidio account',
      body: 'Enter your credentials to create a new Tidio workspace or connect an existing account.',
    },
    {
      title: 'Enable the Tidio App Embed in your Shopify theme',
      body: 'Go to Online Store -> Themes -> Customize, open App embeds in the sidebar, toggle "Tidio Chat" ON, and save.',
      warning:
        'Skipping the App Embed toggle in your Theme Customizer will prevent the chat bubble from appearing on your live store.',
    },
    {
      title: 'Send a test chat message from your storefront',
      body: 'Open your store URL in a private tab, click the widget in the corner, and send a test message to your Inbox.',
    },
  ],
  verification: [
    {
      title: 'Confirm Tidio widget renders on desktop and mobile',
      body: 'Visit your live storefront while logged out to verify the chat launcher loads properly.',
    },
    {
      title: 'Verify Shopify order context in Tidio Inbox',
      body: 'Check the right-hand visitor panel inside your Tidio dashboard test conversation to confirm integration.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Tidio chat bubble does not appear on my Shopify store after installing',
      fix: 'Navigate to Online Store -> Themes -> Customize -> App embeds and ensure "Tidio Chat" is toggled ON.',
    },
    {
      problem: 'Tidio overlaps with my Shopify sticky Add to Cart bar on mobile',
      fix: 'Adjust the mobile bottom margin offset under Tidio -> Settings -> Channels -> Live Chat -> Appearance.',
    },
    {
      problem: 'Tidio disappeared after I published a new Shopify theme',
      fix: 'Re-enable the "Tidio Chat" App Embed under Customize on your newly published theme.',
    },
  ],
  faqs: [
    {
      question: 'Does Tidio have a free plan for Shopify stores?',
      answer: 'Yes, Tidio offers a free forever plan with live chat and basic automation features.',
    },
    {
      question: 'Can Tidio show what products a shopper currently has in their Shopify cart?',
      answer: 'Yes, agents can view live cart contents, history, and active page views directly in the chat sidebar.',
    },
    {
      question: 'Do I need to paste JavaScript into theme.liquid to install Tidio?',
      answer: 'No, the official app utilizes Shopify’s App Embed framework via a single toggle switch.',
    },
  ],
  relatedSlugs: [
    'tidio-on-wordpress',
    'tidio-on-webflow',
    'crisp-on-shopify',
  ],
  lastVerified: '2026-11-15',
};
