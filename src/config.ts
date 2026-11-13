// =====================================================================
// THE ONE FILE YOU EDIT.
// Anything that says TODO needs your real value before you launch.
// Run `npm run validate` any time: it lists every TODO still left here.
// =====================================================================

export const config = {
  siteName: 'installs.io',
  domain: 'https://installs.io', // no trailing slash
  tagline: 'Install any tool on your stack in minutes.',
  supportEmail: 'TODO-your-email@example.com', // TODO: replace
  dateLocale: 'en-US', // how dates are shown, e.g. "November 12, 2026"

  // ---------------- The $149 Express Install ----------------
  express: {
    priceUsd: 149,
    productName: 'Express Install',
    // Only keep "24 hours" if you can honor it. Edit freely.
    turnaroundText: 'within 24 hours',
    // Name of your payment service, shown to customers (e.g. Paystack)
    paymentProvider: 'Bachs',
    // Paste your payment page link here (from Paystack: starts with https://paystack.com/pay/...)
    paymentUrl: 'https://checkout.bachs.io/pay/pl_8f8c8ba4f818', // TODO: replace
    bullets: [
      'We install and configure the tool for you',
      'We test it and send you proof it works',
      'Delivered within 24 hours of receiving access',
    ],
  },

  // ---------------- Forms (Web3Forms, free) ----------------
  forms: {
    endpoint: 'https://api.web3forms.com/submit',
    // Get this key by entering your email at web3forms.com
    web3formsAccessKey: '73681cb8-d3de-4f6f-93e1-d7f72aafca66', // TODO: replace
  },

  // ---------------- Analytics ----------------
  analytics: {
    // Cloudflare Web Analytics token (Cloudflare dashboard > Web Analytics).
    // Leave empty until you have it. Nothing is loaded while this is empty.
    cloudflareBeaconToken: '',
  },

  // ---------------- Honest trust signals ----------------
  // Only write things that are true. No made-up numbers.
  trustSignals: [
    'Step-by-step, written for non-developers',
    'Every guide shows the date it was last verified',
    'Optional done-for-you install if you would rather not do it yourself',
  ],

  // Badges only appear when enabled is true. Turn on ONLY if you will honor it.
  badges: {
    moneyBackGuarantee: {
      enabled: false,
      text: 'TODO: write your exact guarantee wording',
    },
    testedBadge: {
      enabled: false,
      text: 'TODO: e.g. "Steps checked against vendor docs"',
    },
  },

  // ---------------- Service terms (shown on /service-terms and the FAQ) ----------------
  service: {
    // These are DRAFT wording. Edit so they match what you will really do.
    refundPolicy:
      'If we are unable to complete your installation, we will refund your payment in full. (TODO: confirm this is the policy you will honor, and add any limits.)',
    scope:
      'One tool installed and configured on one site or store, plus a test to confirm it is working. (TODO: confirm exactly what is and is not included.)',
    outOfScope:
      'Custom development, redesigns, ongoing management, ad campaigns, and fixing problems that existed before we started. (TODO: confirm.)',
    accessMethods:
      'A collaborator or staff account with only the permissions needed for the job. We will never ask for your main account password.',
    revisions:
      'If something does not work as described after delivery, tell us and we will fix it at no extra cost for 7 days. (TODO: confirm the number of days.)',
  },

  // ---------------- Legal (have a lawyer review before launch) ----------------
  legal: {
    affiliateDisclosure:
      'We may earn a commission if you sign up through links on this site, at no extra cost to you.',
    companyName: 'SpeedLane Digitals',
    country: 'TODO: your country / governing law',
    lastUpdated: 'TODO: date you finalised these pages',
  },
};

// Helpers used by pages. You normally never edit below this line.
export const isConfigured = (value: string) => /^https?:\/\//.test(value);
export const isTodo = (value: string) => value.includes('TODO');
