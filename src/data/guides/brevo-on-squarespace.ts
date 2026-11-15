import type { Guide } from '../types';

export const brevoOnSquarespace: Guide = {
  slug: 'brevo-on-squarespace',
  toolId: 'brevo',
  platformId: 'squarespace',
  status: 'published',
  title: 'How to Install Brevo Tracker, Chat & Forms on Squarespace',
  metaDescription:
    'Add the Brevo tracker script, Conversations live chat, and email signup forms to your Squarespace site using Code Injection.',
  whoItsFor:
    'Squarespace small businesses, creators, and online stores using Brevo for email marketing automation, live chat support, and CRM contact tracking.',
  whatYouGet:
    'The Brevo tracker script, live chat widget, and embedded newsletter forms connected directly to your Brevo lists and automations.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Squarespace website on a Business, Commerce, Core, Plus, or Advanced plan (required for Code Injection)',
    'A Brevo account with Trackers & Conversations enabled so your Client Key is available',
    'Website Owner or Administrator permissions inside your Squarespace dashboard',
  ],
  steps: [
    {
      title: 'Copy your Brevo Tracker script from Brevo Settings',
      body: 'Log in to Brevo, click your account menu in the top-right corner, open Plugins & Integrations -> Trackers (or Automations -> Settings -> Tracking Code), and copy the JS snippet.',
    },
    {
      title: 'Open Code Injection in your Squarespace dashboard',
      body: 'In your Squarespace left panel, click Website -> Pages -> Website Tools -> Code Injection to add Brevo.',
    },
    {
      title: 'Paste the Brevo script into the Header field and save',
      body: 'Paste the Brevo tracker snippet into the Header box inside Code Injection, replacing YOUR_BREVO_CLIENT_KEY with your actual client key, and click Save.',
      code: {
        language: 'html',
        filename: 'Squarespace Header Code Injection',
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
          })(arg, arg, arg, arg);
        };
      })(j[i]);
    }
    var n = document.createElement("script"), i = document.getElementsByTagName("script");
    n.type = "text/javascript"; n.id = "sendinblue-js"; n.async = true;
    n.src = "https://sibautomation.com" + window.sib.client_key;
    i.parentNode.insertBefore(n, i);
  })();
</script>`,
      },
    },
    {
      title: 'Embed a Brevo newsletter form on a page (optional)',
      body: 'In Brevo -> Contacts -> Forms, copy your iframe embed snippet, then edit a Squarespace page, click Add Block -> Embed -> Code Snippet -> Embed Data, and paste the code.',
    },
    {
      title: 'Test your public Squarespace domain in an incognito tab',
      body: 'Open your live Squarespace URL in an incognito browser window because Squarespace pauses Header Code Injection scripts while you are logged into the admin editor.',
    },
  ],
  verification: [
    {
      title: 'Click Verify inside Brevo Tracking Code settings',
      body: 'Visit your published Squarespace domain in an incognito tab, then return to Brevo -> Automations -> Settings -> Tracking Code and click Verify to confirm a green checkmark.',
    },
    {
      title: 'Check the sa.js network request in Browser DevTools',
      body: 'Open Chrome DevTools -> Network tab on your live Squarespace domain, filter by "sa.js", and confirm the sibautomation.com script loads with a 200 status.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Code Injection is locked on my Squarespace site',
      fix: 'Squarespace requires a Business, Commerce Basic, or Commerce Advanced subscription to use Code Injection for Brevo.',
    },
    {
      problem: 'Brevo says "Tracking code not verified" after saving in Squarespace',
      fix: 'Open your public custom domain in an incognito browser tab without ad blockers rather than testing inside the logged-in Squarespace editor preview.',
    },
    {
      problem: 'Brevo Conversations live chat widget does not appear on Squarespace',
      fix: 'Open Brevo -> Conversations -> Settings -> Chat Widget, verify your Squarespace domain is listed under allowed websites, and confirm the widget toggle is enabled.',
    },
  ],
  faqs: [
    {
      question: 'Does the Brevo Tracker script automatically load Brevo live chat on Squarespace?',
      answer:
        'Yes. Once the main Brevo Tracker snippet is saved in Squarespace Header Code Injection and Conversations is active in Brevo, the chat launcher appears automatically.',
    },
    {
      question: 'Should I use Brevo’s iframe or raw HTML embed inside Squarespace Embed blocks?',
      answer:
        'Use Brevo’s iframe embed snippet inside a Squarespace Embed block so your Squarespace template styles do not override form input heights or button colors.',
    },
    {
      question: 'Can I sync native Squarespace Form Block leads to Brevo?',
      answer:
        'Yes. You can connect Squarespace Forms to Brevo through Zapier or Make to automatically add new form submissions into a designated Brevo contact list.',
    },
  ],
  relatedSlugs: [
    'brevo-on-wordpress',
    'brevo-on-wix',
    'brevo-on-webflow',
  ],
  lastVerified: '2026-11-15',
};
