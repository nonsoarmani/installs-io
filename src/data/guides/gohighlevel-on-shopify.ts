import type { Guide } from '../types';

export const gohighlevelOnShopify: Guide = {
  slug: 'gohighlevel-on-shopify',
  toolId: 'gohighlevel',
  platformId: 'shopify',
  status: 'published',
  title: 'How to Install GoHighLevel Chat Widget & Tracking on Shopify',
  metaDescription:
    'Add the GoHighLevel live chat widget and external tracking script to your Shopify store by pasting your snippet into theme.liquid.',
  whoItsFor:
    'Shopify store owners and agencies using GoHighLevel to capture SMS/web chat leads, automate follow-ups, and sync Shopify orders.',
  whatYouGet:
    'The GoHighLevel chat widget running across your Shopify storefront plus optional native Shopify order and customer syncing.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'Admin access to your Shopify store with permission to edit theme code',
    'A GoHighLevel sub-account with your Chat Widget configured under Sites -> Chat Widget',
    'A live Shopify theme',
  ],
  steps: [
    {
      title: 'Copy your GoHighLevel Chat Widget code',
      body: 'Log in to your GoHighLevel sub-account, go to Sites -> Chat Widget, customize your bubble color and welcome message, click Save, and click Get Code to copy the script tag.',
    },
    {
      title: 'Duplicate your Shopify theme as a backup',
      body: 'In Shopify Admin, go to Online Store -> Themes. Click the three dots (...) next to your live theme and select Duplicate so you have a safe backup before editing code.',
    },
    {
      title: 'Paste the GoHighLevel script into theme.liquid',
      body: 'Click the three dots (...) next to your active theme and select Edit code. Under the Layout folder, click theme.liquid, scroll to the bottom, and paste your GoHighLevel script right above the closing </body> tag.',
      code: {
        language: 'html',
        filename: 'layout/theme.liquid',
        code: `<script 
  src="https://leadconnectorhq.com"  
  data-resources-url="https://leadconnectorhq.com" 
  data-widget-id="YOUR_GHL_WIDGET_ID">
</script>`,
      },
      warning:
        'Replace YOUR_GHL_WIDGET_ID with the exact widget ID from your GoHighLevel Chat Widget settings.',
    },
    {
      title: 'Save theme.liquid',
      body:'Hit the green Save button in the upper-right area of your theme file editor to apply the GoHighLevel script',
    },
    {
      title: 'Connect native Shopify order sync (optional)',
      body: 'If you want Shopify orders and abandoned carts to trigger GoHighLevel workflows, open GoHighLevel -> Settings -> Integrations -> Shopify, click Connect, and enter your myshopify.com store URL.',
    },
    {
      title: 'Test the chat widget on your live store',
      body: 'Open your Shopify store in an incognito window, click the chat bubble in the bottom-right corner, submit your name, phone/email, and a test message, and confirm it arrives in GoHighLevel -> Conversations.',
    },
  ],
  verification: [
    {
      title: 'Confirm chat bubble loads on your live storefront',
      body: 'Visit your public Shopify URL on desktop and mobile and verify the GoHighLevel chat widget appears in the bottom-right corner.',
    },
    {
      title: 'Verify test lead in GoHighLevel Conversations',
      body: 'Open GoHighLevel -> Conversations and confirm your test chat submission created a new contact and triggered any connected SMS/email workflows.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Chat widget does not appear after saving theme.liquid',
      fix: 'Confirm you pasted the script right above the closing </body> tag (not inside a Liquid comment block) and verify your data-widget-id matches your GoHighLevel Chat Widget.',
    },
    {
      problem: 'GoHighLevel chat bubble overlaps with Shopify Inbox',
      fix: 'If you previously installed Shopify Inbox, go to Online Store -> Themes -> Customize -> App embeds and toggle Shopify Inbox OFF so only one chat bubble displays.',
    },
    {
      problem: 'Chat widget disappears after updating my Shopify theme',
      fix: 'Theme updates replace theme.liquid. Re-paste your GoHighLevel loader script above </body> in your newly updated theme.',
    },
  ],
  faqs: [
    {
      question: 'Does the GoHighLevel chat widget work with Shopify Online Store 2.0 themes?',
      answer:
        'Yes. Pasting the LeadConnector loader script before </body> in theme.liquid works on all Shopify 2.0 and vintage themes.',
    },
    {
      question: 'Can I embed a GoHighLevel form or booking calendar on a Shopify page?',
      answer:
        'Yes. Copy the iframe embed code from GoHighLevel -> Sites -> Forms (or Calendars), open a Shopify Page in Online Store -> Pages, click the Show HTML (<>) icon, paste the iframe code, and save.',
    },
    {
      question: 'Will GoHighLevel slow down my Shopify checkout?',
      answer:
        'No. Shopify isolates checkout pages from theme.liquid scripts, and the GoHighLevel widget loads asynchronously on storefront pages.',
    },
  ],
  relatedSlugs: [
    'gohighlevel-on-wordpress',
    'gohighlevel-on-webflow',
    'klaviyo-on-shopify',
  ],
  lastVerified: '2026-11-14',
};
