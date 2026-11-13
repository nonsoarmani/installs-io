import type { Guide } from '../types';

export const posthogOnShopify: Guide = {
  slug: 'posthog-on-shopify',
  toolId: 'posthog',
  platformId: 'shopify',
  status: 'published',
  title: 'How to Install PostHog on Shopify (Session Replay & Analytics)',
  metaDescription:
    'Install PostHog product analytics, heatmaps, and session recordings on your Shopify store using theme.liquid and Shopify Custom Pixels.',
  whoItsFor:
    'Shopify brands, CRO specialists, and product teams who want session replays, click heatmaps, and funnel analytics across their store and checkout.',
  whatYouGet:
    'PostHog JavaScript snippet capturing pageviews, autocapture clicks, heatmaps, and session recordings on your Shopify storefront.',
  difficulty: 'Intermediate',
  estimatedMinutes: 15,
  prerequisites: [
    'Admin access to your Shopify store with permission to edit theme code',
    'A PostHog account (US or EU Cloud) with your Project API Key (phc_...)',
    'A live Shopify theme',
  ],
  steps: [
    {
      title: 'Copy your PostHog web snippet',
      body: 'Log in to PostHog (://posthog.com or ://posthog.com), click Project Settings (gear icon in the left sidebar), and copy your Web snippet containing your Project API Key (starting with phc_) and API host URL.',
    },
    {
      title: 'Open your Shopify theme code editor',
      body: 'In your Shopify Admin, go to Online Store -> Themes. Click the three dots (...) next to your active theme and select Edit code.',
      warning:
        'Before editing theme.liquid, click the three dots (...) next to your theme and select Duplicate so you have a clean backup copy.',
    },
    {
      title: 'Paste the PostHog snippet into theme.liquid',
      body: 'Under the Layout folder in the left file list, click theme.liquid. Find the closing </head> tag and paste your PostHog snippet right above </head>, replacing YOUR_POSTHOG_PROJECT_API_KEY and host URL with your own.',
      code: {
        language: 'html',
        filename: 'layout/theme.liquid',
        code: `<script>
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","://posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init('YOUR_POSTHOG_PROJECT_API_KEY', {
    api_host: 'https://posthog.com',
    person_profiles: 'identified_only'
  })
</script>`,
      },
      note: 'If your PostHog project is hosted in Europe, change api_host to https://posthog.com.',
    },
    {
      title: 'Save theme.liquid',
      body: 'Click Save in the top-right corner of the Shopify code editor.',
    },
    {
      title: 'Track checkout events via Shopify Customer Events (optional)',
      body: 'Because Shopify Checkout is sandboxed from theme.liquid on non-Plus stores, go to Shopify Settings -> Customer events -> Add custom pixel if you also want to capture checkout_started and checkout_completed events inside PostHog.',
    },
    {
      title: 'Verify live events and session recordings in PostHog',
      body: 'Visit your live Shopify store in an incognito tab, click around a few product pages, then open PostHog -> Activity -> Live events to confirm $pageview and $autocapture events stream in.',
    },
  ],
  verification: [
    {
      title: 'Confirm live events in PostHog Activity',
      body: 'Open PostHog -> Activity -> Live events after visiting your store and verify that $pageview events appear with your store URL.',
    },
    {
      title: 'Check Session Replay recordings',
      body: 'In PostHog -> Session replay, confirm that your test browsing session appears in the recordings list within a few minutes (make sure Session recording is enabled in PostHog Project Settings).',
    },
  ],
  troubleshooting: [
    {
      problem: 'No events appear in PostHog Live events after saving theme.liquid',
      fix: 'Double-check that your Project API Key starts with phc_, verify you selected the right region host (://posthog.com vs. ://posthog.com), and test in a browser without ad blockers.',
    },
    {
      problem: 'Session recordings show blank or broken CSS styling',
      fix: 'In PostHog -> Project Settings -> Session replay, check that authorized domains include your primary Shopify custom domain so PostHog can fetch your theme stylesheets.',
    },
    {
      problem: 'Checkout pages are not recorded in Session Replay',
      fix: 'Shopify restricts third-party scripts from recording checkout screens for PCI security compliance; session replay covers your storefront, collection, product, and cart pages.',
    },
  ],
  faqs: [
    {
      question: 'Does PostHog have a free tier for Shopify stores?',
      answer:
        'Yes. PostHog offers a generous free tier that includes 1 million analytics events and 5,000 session recordings every month with no credit card required.',
    },
    {
      question: 'Will PostHog session recording slow down my Shopify store?',
      answer:
        'No. The PostHog script loads asynchronously and batches network payloads in the background so your storefront speed and checkout remain fast.',
    },
    {
      question: 'Can I identify logged-in Shopify customers in PostHog?',
      answer:
        'Yes. Using Liquid tags inside theme.liquid ({% if customer %}), you can call posthog.identify("{{ customer.id }}", { email: "{{ customer.email }}" }) to link sessions to customer profiles.',
    },
  ],
  relatedSlugs: [
    'google-analytics-4-on-shopify',
    'klaviyo-on-shopify',
    'meta-conversions-api-on-shopify',
  ],
  lastVerified: '2026-11-13',
};
