import type { Guide } from '../types';

export const brevoOnWordpress: Guide = {
  slug: 'brevo-on-wordpress',
  toolId: 'brevo',
  platformId: 'wordpress',
  status: 'published',
  title: 'How to Install Brevo Email & Forms on WordPress (Official Plugin)',
  metaDescription:
    'Connect Brevo (Sendinblue) to WordPress and WooCommerce using the official Brevo plugin to sync subscribers, embed signup forms, and send transactional emails.',
  whoItsFor:
    'WordPress bloggers, service businesses, and WooCommerce stores looking to capture email leads, automate follow-ups, and improve email deliverability.',
  whatYouGet:
    'Brevo subscriber sync, drag-and-drop signup forms, Brevo Tracker script, and reliable SMTP transactional email delivery on WordPress.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'Administrator access to your WordPress dashboard',
    'A free or paid Brevo account with a generated v3 API Key',
    'A WordPress site running over HTTPS',
  ],
  steps: [
    {
      title: 'Generate your Brevo v3 API Key',
      body: 'Log in to your Brevo dashboard, click your profile name in the top-right corner, select SMTP & API, open the API Keys tab, and click Generate a new API key.',
      warning:
        'Copy your new v3 API key immediately when it appears—Brevo only displays the full secret key once for security.',
    },
    {
      title: 'Install the official Brevo WordPress plugin',
      body: 'Log in to your WordPress Admin (://yourdomain.com), go to Plugins -> Add New Plugin, search for "Brevo", install "Newsletter, SMTP, Email marketing and Subscribe forms by Brevo", and click Activate.',
    },
    {
      title: 'Connect your Brevo API key inside WordPress',
      body: 'Click the new Brevo menu item in your WordPress left sidebar, paste your v3 API key into the API key field, and click Login to link your Brevo account.',
    },
    {
      title: 'Activate Brevo Marketing Automation tracking',
      body: 'Inside the WordPress Brevo settings panel, toggle "Activate Marketing Automation" ON so Brevo automatically injects its visitor tracking script across your pages.',
      note: 'If you run WooCommerce, also install the official "Brevo for WooCommerce" plugin to sync customer orders and trigger abandoned cart emails.',
    },
    {
      title: 'Embed a Brevo signup form and test',
      body: 'Create a signup form under Brevo -> Forms in WordPress, paste its shortcode onto any page or sidebar, open your site in an incognito tab, and submit a test email to confirm it syncs to your Brevo Contacts list.',
    },
  ],
  verification: [
    {
      title: 'Confirm connected status in WordPress Brevo dashboard',
      body: 'Open Brevo -> Home in your WordPress Admin sidebar and verify your account email, contact lists, and Marketing Automation status show as active.',
    },
    {
      title: 'Verify test subscriber in Brevo Contacts',
      body: 'Log in to ://brevo.com -> CRM -> Contacts and confirm your test form submission appears inside your selected subscriber list.',
    },
  ],
  troubleshooting: [
    {
      problem: 'WordPress says my Brevo API key is invalid',
      fix: 'Confirm you generated a v3 API key under SMTP & API -> API Keys (not an SMTP password) and copied it without trailing spaces.',
    },
    {
      problem: 'Brevo signup form styling looks broken on my WordPress theme',
      fix: 'Open WordPress -> Brevo -> Forms, edit your form HTML/CSS settings, and switch between theme CSS inheritance or Brevo default form styles.',
    },
    {
      problem: 'WordPress password reset or contact form emails are landing in spam',
      fix: 'In WordPress -> Brevo -> Home -> Transactional emails, toggle "Activate email through Brevo" ON and authenticate your sending domain with SPF and DKIM records.',
    },
  ],
  faqs: [
    {
      question: 'Does Brevo have a free plan for WordPress sites?',
      answer:
        'Yes. Brevo’s free plan allows unlimited contacts and up to 300 emails per day, including signup forms, marketing automation, and transactional SMTP emails.',
    },
    {
      question: 'Can I use Brevo to replace WP Mail SMTP on WordPress?',
      answer:
        'Yes. Enabling transactional email inside the official Brevo WordPress plugin routes all WordPress system and form notification emails through Brevo’s servers.',
    },
    {
      question: 'Will updating my WordPress theme disconnect Brevo?',
      answer:
        'No. Because the official plugin stores your API connection and injects tracking scripts via WordPress hooks, theme updates will not affect your setup.',
    },
  ],
  relatedSlugs: [
    'brevo-on-shopify',
    'brevo-on-webflow',
    'klaviyo-on-wordpress',
  ],
  lastVerified: '2026-11-15',
};
