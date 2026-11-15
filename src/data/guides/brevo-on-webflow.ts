import type { Guide } from '../types';

export const brevoOnWebflow: Guide = {
  slug: 'brevo-on-webflow',
  toolId: 'brevo',
  platformId: 'webflow',
  status: 'published',
  title: 'How to Install Brevo Tracking & Forms on Webflow',
  metaDescription:
    'Add the Brevo Tracker script and embedded email signup forms to your Webflow website using Site Settings Custom Code and Code Embeds.',
  whoItsFor:
    'Webflow startups, agencies, and marketing sites that want to capture newsletter subscribers, track page visits, and run Brevo email automation.',
  whatYouGet:
    'Brevo Tracker JavaScript running across all published Webflow pages plus embedded Brevo signup forms on any landing page.',
  difficulty: 'Beginner',
  estimatedMinutes: 15,
  prerequisites: [
    'A Webflow project on a paid Site plan (required for Custom Code and Code Embeds)',
    'A Brevo account with your tracker client key',
    'Permission to publish changes to your live Webflow domain',
  ],
  steps: [
    {
      title: 'Copy your Brevo Tracker JavaScript snippet',
      body: 'Log in to your Brevo dashboard, go to Automations -> Settings -> Tracking code, select JS tracker, and copy your JavaScript snippet containing your client key.',
    },
    {
      title: 'Open Webflow Project Settings -> Custom Code',
      body: 'In your Webflow Dashboard, open your project Settings and click on the Custom Code tab in the left sidebar.',
    },
    {
      title: 'Paste the Brevo Tracker script into Head Code',
      body: 'Paste your Brevo Tracker snippet into the Head Code section, replacing YOUR_BREVO_CLIENT_KEY with your unique key from Brevo.',
      code: {
        language: 'html',
        filename: 'Webflow Head Code',
        code: '<!-- Brevo Tracker JavaScript Snippet -->',
      },
      warning:
        'Keep the opening and closing script tags intact when pasting into Webflow Head Code.',
    },
    {
      title: 'Embed a Brevo signup form on a page (optional)',
      body: 'Create a form in Brevo -> Contacts -> Forms, copy its HTML or iframe embed snippet, drag a Code Embed element onto your Webflow canvas, and paste the code inside.',
    },
    {
      title: 'Save Custom Code and deploy your Webflow site',
      body: 'Hit Save Changes at the bottom of your Webflow Custom Code settings, open the Publish dropdown in the upper right, and deploy the update to your live domain.',
    },
    {
      title: 'Verify tracking inside Brevo',
      body: 'Open your published Webflow URL in a private browser tab, then return to Brevo -> Automations -> Settings -> Tracking code and click Verify to confirm tracking is active.',
    },
  ],
  verification: [
    {
      title: 'Confirm green Verified status in Brevo',
      body: 'In Brevo -> Automations -> Settings -> Tracking code, verify that your Webflow domain displays a green verified checkmark.',
    },
    {
      title: 'Test form signup in Brevo Contacts',
      body: 'Submit a test email address through your embedded Webflow form and confirm the new subscriber appears in Brevo -> CRM -> Contacts.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Brevo tracking verification fails on my Webflow URL',
      fix: 'Ensure you clicked Publish in Webflow after saving Head Code, disable browser ad blockers while testing, and check that YOUR_BREVO_CLIENT_KEY has no extra spaces.',
    },
    {
      problem: 'Embedded Brevo form appears cut off on mobile screens',
      fix: 'Set the Webflow Code Embed wrapper width to 100% and adjust the iframe height attribute inside the Brevo embed code.',
    },
    {
      problem: 'Native Webflow forms are not sending leads to Brevo',
      fix: 'Brevo Tracker records page visits and Brevo-embedded forms; to sync native Webflow forms into Brevo, connect them via Zapier, Make, or Webflow webhooks.',
    },
  ],
  faqs: [
    {
      question: 'Can I install Brevo on a free Webflow Starter plan?',
      answer:
        'No. Webflow requires a paid Site plan (Basic, CMS, Business, or Enterprise) to access Site Settings Custom Code and Code Embed elements.',
    },
    {
      question: 'Is Brevo free to use with Webflow?',
      answer:
        'Yes. Brevo’s free plan includes unlimited contacts, up to 300 emails per day, website tracking, and embeddable signup forms.',
    },
    {
      question: 'Does the Brevo Tracker script slow down Webflow page speed?',
      answer:
        'No. The script loads asynchronously in the background so it does not block your Webflow page rendering.',
    },
  ],
  relatedSlugs: [
    'brevo-on-wordpress',
    'brevo-on-shopify',
    'klaviyo-on-webflow',
  ],
  lastVerified: '2026-11-15',
};
