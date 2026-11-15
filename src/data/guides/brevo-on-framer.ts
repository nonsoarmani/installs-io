import type { Guide } from '../types';

export const brevoOnFramer: Guide = {
  slug: 'brevo-on-framer',
  toolId: 'brevo',
  platformId: 'framer',
  status: 'published',
  title: 'How to Install Brevo Tracker, Chat & Forms on Framer',
  metaDescription:
    'Add the Brevo tracker script, Conversations live chat, and email signup forms to your Framer site using Site Settings Custom Code and Embed blocks.',
  whoItsFor:
    'Framer startups, agencies, and digital creators using Brevo for email marketing automation, live chat support, and CRM lead capture.',
  whatYouGet:
    'The Brevo tracker script, Conversations live chat widget, and embedded newsletter forms connected to your Brevo contact lists.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Framer project on a paid Site plan (Mini, Basic, Pro, or Business) required to unlock Custom Code',
    'A Brevo account with Trackers & Conversations enabled so your Client Key is ready',
    'Editor or Owner permissions inside your Framer workspace to publish updates',
  ],
  steps: [
    {
      title: 'Copy your Brevo Tracker JavaScript snippet',
      body: 'Log in to Brevo, click your profile menu in the top-right corner, open Plugins & Integrations -> Trackers (or Automations -> Settings -> Tracking Code), and copy the JS snippet.',
    },
    {
      title: 'Open Custom Code in Framer Site Settings',
      body: 'Access your Framer project settings via the top toolbar and open the Custom Code area to install Brevo.',
    },
    {
      title: 'Paste the Brevo snippet into Start of <head> tag and save',
      body: 'Paste the Brevo tracker script into the "Start of <head> tag" field inside Framer Site Settings, replacing YOUR_BREVO_CLIENT_KEY with your actual key, and click Save.',
      code: {
        language: 'html',
        filename: 'Framer Site Settings -> Start of <head> tag',
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
      title: 'Embed a Brevo newsletter form on a Framer page (optional)',
      body: 'In Brevo -> Contacts -> Forms, copy your iframe embed snippet, then open the Insert (+) panel in Framer, drag an Embed component onto your canvas, select HTML, and paste the code.',
    },
    {
      title: 'Publish your Framer website to activate Brevo',
      body: 'Click Publish in the top-right corner of the Framer editor and select Update so your Brevo tracker, chat widget, and embedded forms deploy to your live domain.',
    },
  ],
  verification: [
    {
      title: 'Click Verify inside Brevo Tracking Code settings',
      body: 'Open your published Framer URL in an incognito browser tab, then return to Brevo -> Automations -> Settings -> Tracking Code and click Verify to confirm a green checkmark.',
    },
    {
      title: 'Inspect the sa.js network request in Browser DevTools',
      body: 'Open Chrome DevTools -> Network tab on your live Framer site, filter by "sa.js", and confirm the sibautomation.com script loads with a 200 status.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Custom Code field is locked inside Framer Site Settings',
      fix: 'Framer restricts site-wide Custom Code injection to paid Site plans; upgrade from the Free tier to at least a Mini or Basic plan before pasting the Brevo snippet.',
    },
    {
      problem: 'Brevo says "Tracking code not verified" after saving in Framer',
      fix: 'Click Publish -> Update in the top-right corner of Framer after saving Site Settings, and visit your live URL in an incognito tab without browser ad blockers.',
    },
    {
      problem: 'Brevo Conversations chat widget does not appear on Framer pages',
      fix: 'Open Brevo -> Conversations -> Settings -> Chat Widget, verify your Framer domain is added under allowed websites, and confirm the widget toggle is enabled.',
    },
  ],
  faqs: [
    {
      question: 'Does the Brevo Tracker script automatically enable Brevo live chat on Framer?',
      answer:
        'Yes. Once the main Brevo Tracker script is published in Framer Site Settings Custom Code and Conversations is enabled in Brevo, the chat launcher loads automatically.',
    },
    {
      question: 'Should I use Brevo’s iframe or raw HTML embed inside Framer Embed components?',
      answer:
        'Use Brevo’s iframe embed snippet inside Framer’s Embed component so your Framer CSS resets do not distort form input heights or submit button styling.',
    },
    {
      question: 'Can I send native Framer Form leads directly into Brevo lists?',
      answer:
        'Yes. You can connect native Framer Forms to Brevo using Zapier, Make, or Framer Form Webhooks to add new subscribers directly to a Brevo contact list.',
    },
  ],
  relatedSlugs: [
    'brevo-on-wordpress',
    'brevo-on-squarespace',
    'brevo-on-wix',
  ],
  lastVerified: '2026-11-15',
};
