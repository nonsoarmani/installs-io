import type { Guide } from '../types';

export const posthogOnWebflow: Guide = {
  slug: 'posthog-on-webflow',
  toolId: 'posthog',
  platformId: 'webflow',
  status: 'published',
  title: 'How to Install PostHog on Webflow (Session Replay & Analytics)',
  metaDescription:
    'Add PostHog product analytics, heatmaps, and session recordings to your Webflow site by pasting your Project API snippet into Custom Code.',
  whoItsFor:
    'Webflow startups, SaaS marketing teams, and growth designers who want session recordings, click heatmaps, and funnel tracking.',
  whatYouGet:
    'PostHog JavaScript tracking across all published Webflow pages with automatic pageview capture, heatmaps, and session replays.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Webflow project on a paid Site plan (required to unlock Custom Code)',
    'A PostHog account (US or EU Cloud) with your Project API Key (phc_...)',
    'Permission to publish changes to your live Webflow domain',
  ],
  steps: [
    {
      title: 'Copy your PostHog web snippet',
      body: 'Log in to PostHog (://posthog.com or ://posthog.com), click Project Settings in the left sidebar, and copy your Web snippet containing your Project API Key (starting with phc_).',
    },
    {
      title: 'Open Webflow Site Settings -> Custom Code',
      body: 'In your Webflow Dashboard, hover over your project card, click the three dots icon, select Settings, and click the Custom Code tab on the left.',
    },
    {
      title: 'Paste the PostHog script into the Head Code',
      body: 'Paste your PostHog JavaScript snippet into the Head Code box (inside <head>), replacing YOUR_POSTHOG_PROJECT_API_KEY and host URL with your own.',
      code: {
        language: 'html',
        filename: 'Webflow Head Code',
        code: `<script>
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o],e=o),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","://posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init('YOUR_POSTHOG_PROJECT_API_KEY', {
    api_host: 'https://posthog.com',
    person_profiles: 'identified_only'
  })
</script>`,
      },
      note: 'If your PostHog account is hosted on EU Cloud, change api_host to https://posthog.com.',
    },
    {
      title: 'Save changes and publish your Webflow site',
      body: 'Click Save Changes at the bottom of the Custom Code section, then click Publish in the top-right corner of Webflow and publish to your live domain.',
    },
    {
      title: 'Verify live events in PostHog',
      body: 'Open your published Webflow site in a new browser tab, click a couple of links, and check PostHog -> Activity -> Live events to confirm $pageview events appear.',
    },
  ],
  verification: [
    {
      title: 'Check Live events in PostHog',
      body: 'In PostHog -> Activity -> Live events, confirm your live Webflow domain appears under the Current URL property for $pageview events.',
    },
    {
      title: 'Verify Session Replay recording',
      body: 'Open PostHog -> Session replay and confirm your test visit appears in the recordings list within 2 to 3 minutes.',
    },
  ],
  troubleshooting: [
    {
      problem: 'No events appear in PostHog after saving Custom Code',
      fix: 'Make sure you clicked Publish in Webflow after saving Custom Code, and test on your live published domain rather than the Webflow Designer preview.',
    },
    {
      problem: 'Session recordings look unstyled or missing fonts',
      fix: 'In PostHog -> Project Settings -> Session replay, add your custom domain and .webflow.io staging domain to the authorized domains list.',
    },
    {
      problem: 'Webflow Custom Code box says character limit exceeded',
      fix: 'Webflow allows up to 20,000 characters in Site Settings Custom Code; ensure you pasted the snippet once without duplicating lines.',
    },
  ],
  faqs: [
    {
      question: 'Does PostHog work on Webflow free Starter sites?',
      answer:
        'No. Webflow requires a paid Site plan (Basic, CMS, Business, or Enterprise) to add custom scripts in Site Settings.',
    },
    {
      question: 'Can I track Webflow form submissions in PostHog?',
      answer:
        'Yes. PostHog automatically captures form submissions via Autocapture, which you can turn into an Action in PostHog Data Management without writing custom JavaScript.',
    },
    {
      question: 'Does PostHog slow down Webflow page load speed?',
      answer:
        'No. The PostHog script uses async loading so your Webflow page renders first while analytics and session replay load in the background.',
    },
  ],
  relatedSlugs: [
    'posthog-on-shopify',
    'posthog-on-wordpress',
    'google-analytics-4-on-webflow',
  ],
  lastVerified: '2026-11-13',
};

