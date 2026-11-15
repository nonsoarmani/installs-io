import type { Guide } from '../types';

export const brevoOnWix: Guide = {
  slug: 'brevo-on-wix',
  toolId: 'brevo',
  platformId: 'wix',
  status: 'published',
  title: 'How to Install Brevo Tracker, Forms & Live Chat on Wix',
  metaDescription:
    'Connect Brevo to your Wix website using Wix Custom Code to enable visitor tracking, live chat conversations, and email signup forms.',
  whoItsFor:
    'Wix small businesses, consultants, and e-commerce stores using Brevo for email marketing automation, live chat support, and contact CRM.',
  whatYouGet:
    'The Brevo tracker script, Conversations live chat widget, and embedded newsletter forms synced with your Brevo contact lists.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Wix website on a paid Premium plan with a connected custom domain (required for Custom Code)',
    'A Brevo account with the Trackers & Conversations app enabled to access your Client Key',
    'Owner or Website Manager permissions inside your Wix Dashboard',
  ],
  steps: [
    {
      title: 'Copy your Brevo Tracker JavaScript snippet',
      body: 'Log in to Brevo, click your profile menu in the top-right corner, go to Plugins & Integrations -> Trackers (or Automations -> Settings -> Tracking Code), and copy the JS snippet.',
    },
    {
      title: 'Open Custom Code in your Wix Dashboard',
      body: 'Open your Wix site dashboard, scroll down the left sidebar to Settings, select Development & Integrations, and click Custom Code.',
    },
    {
      title: 'Add the Brevo Tracker script to Wix Custom Code',
      body: 'Click "+ Add Custom Code" in the upper right, paste your Brevo script (replacing YOUR_BREVO_CLIENT_KEY with your actual client key), and name it "Brevo Tracker & Chat".',
      code: {
        language: 'html',
        filename: 'Wix Custom Code (Head)',
        code: `<script type="text/javascript">
  (function() {
    window.sib = { equeue: [], client_key: "YOUR_BREVO_CLIENT_KEY" };
    window.sendinblue = {};
    for (var j = ['track', 'identify', 'trackLink', 'page'], i = 0; i < j.length; i++) {
      (function(k) {
        window.sendinblue[k] = function() {
          var arg = Array.prototype.slice.call(arguments);
          (window.sib[k] || function() {
            var t = {}; t[k] = arg; window.sib.equeue.push(t);
          })(arg[0], arg[1], arg[2], arg[3]);
        };
      })(j[i]);
    }
    var n = document.createElement("script"), i = document.getElementsByTagName("script")[0];
    n.type = "text/javascript"; n.id = "sendinblue-js"; n.async = true;
    n.src = "https://sibautomation.com" + window.sib.client_key;
    i.parentNode.insertBefore(n, i);
  })();
</script>`,
      },
    },
    {
      title: 'Configure placement for All Pages in Head and click Apply',
      body: 'Under "Add Code to Pages," choose "All pages" with "Load code once" selected, set "Place Code in" to "Head" as instructed by Brevo, and click Apply.',
    },
    {
      title: 'Embed a Brevo signup form on a Wix page (optional)',
      body: 'In Brevo -> Contacts -> Forms, copy your form HTML or iframe snippet, then open the Wix Editor, click Add Elements (+) -> Embed Code -> Embed HTML, and paste the code.',
    },
    {
      title: 'Publish your Wix site to activate Brevo tracking',
      body: 'Click Publish in the top-right corner of the Wix Editor so your Brevo tracker, chat widget, and embedded forms go live on your custom domain.',
    },
  ],
  verification: [
    {
      title: 'Verify tracker status inside Brevo Settings',
      body: 'Visit your published Wix custom domain in a new browser tab, then return to Brevo -> Automations -> Settings -> Tracking Code and click Verify to confirm a green check.',
    },
    {
      title: 'Inspect the sibautomation.com request in DevTools',
      body: 'Open Chrome DevTools -> Network tab on your live Wix domain, filter by "sa.js", and confirm the Brevo automation script loads with an HTTP 200 status.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Brevo says "Tracking code not verified" after saving in Wix',
      fix: 'Ensure you clicked Publish in the Wix Editor, visit your live custom domain rather than the Wix preview link, and temporarily pause ad blockers while clicking Verify.',
    },
    {
      problem: 'Brevo Conversations chat bubble is missing on Wix',
      fix: 'Open Brevo -> Conversations -> Settings -> Chat Widget, make sure your website URL is whitelisted, and confirm the chat widget is enabled.',
    },
    {
      problem: 'Embedded Brevo signup form shows a scrollbar or clipped submit button',
      fix: 'Select the Wix Embed HTML element in the Wix Editor and increase its vertical height so the entire Brevo form and confirmation message fit comfortably.',
    },
  ],
  faqs: [
    {
      question: 'Does the Brevo Tracker script also enable the Brevo live chat widget?',
      answer:
        'Yes. Once the main Brevo Tracker script is installed in Wix Custom Code and Conversations is activated in your Brevo dashboard, the chat widget loads automatically.',
    },
    {
      question: 'Can I sync Wix Contacts and Wix Stores customers to Brevo automatically?',
      answer:
        'Yes. Alongside the onsite tracker script, you can connect Wix to Brevo via Zapier, Make, or Wix Automations webhooks to sync new signups and store buyers into Brevo lists.',
    },
    {
      question: 'Should I use the Brevo HTML embed or iframe embed inside Wix?',
      answer:
        'Using Brevo’s iframe embed snippet inside a Wix Embed HTML block avoids CSS style conflicts with your Wix theme fonts and buttons.',
    },
  ],
  relatedSlugs: [
    'brevo-on-wordpress',
    'brevo-on-shopify',
    'brevo-on-webflow',
  ],
  lastVerified: '2026-11-15',
};
