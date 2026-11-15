import type { Guide } from '../types';

export const posthogOnFramer: Guide = {
  slug: 'posthog-on-framer',
  toolId: 'posthog',
  platformId: 'framer',
  status: 'published',
  title: 'How to Install PostHog Product Analytics on Framer',
  metaDescription:
    'Add PostHog product analytics, autocapture, and session replay to your Framer website using Framer Site Settings Custom Code.',
  whoItsFor:
    'Framer SaaS startups, product teams, and growth marketers who want event autocapture, conversion funnels, and session recordings in PostHog.',
  whatYouGet:
    'PostHog JavaScript SDK running across all published Framer routes with automatic pageview tracking, click autocapture, and session replay.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Framer project on a paid Site plan (Mini, Basic, Pro, or Business) required to unlock Custom Code',
    'A PostHog project (US or EU Cloud) with your Project API Key ready under Project Settings',
    'Editor or Owner permissions inside your Framer workspace to publish changes',
  ],
  steps: [
    {
      title: 'Copy your PostHog Web Snippet from Project Settings',
      body: 'Log in to PostHog, click Settings in the left sidebar, open Project -> Web snippet (or Getting Started), and copy the initialization code containing your Project API Key.',
    },
    {
      title: 'Open Custom Code in Framer Site Settings',
      body: 'Open your Framer project, click the gear icon (or Framer menu) in the top-left corner, open Site Settings, and scroll down to the Custom Code section.',
    },
    {
      title: 'Paste the PostHog snippet into Start of <head> tag',
      body: 'Paste the PostHog initialization script into the "Start of <head> tag" field in Framer Site Settings, replacing YOUR_POSTHOG_PROJECT_API_KEY and regional api_host, then click Save.',
      code: {
        language: 'html',
        filename: 'Framer Site Settings -> Start of <head> tag',
        code: `<script>
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o],e=o),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","://posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init('YOUR_POSTHOG_PROJECT_API_KEY', {
    api_host: 'https://posthog.com',
    person_profiles: 'identified_only'
  });
</script>`,
      },
    },
    {
      title: 'Authorize your Framer domain inside PostHog Session Replay',
      body: 'Open PostHog -> Project Settings -> Recordings and add your published Framer domain under Authorized URLs so session replays record cleanly.',
    },
    {
      title: 'Publish your Framer project to deploy PostHog',
      body: 'Click Publish in the top-right corner of the Framer editor and select Update so your PostHog snippet goes live on your production URL.',
    },
  ],
  verification: [
    {
      title: 'Inspect live $pageview and $autocapture events in PostHog Activity',
      body: 'Open your published Framer URL in an incognito browser tab, navigate between two pages, and confirm $pageview and $autocapture events appear in PostHog -> Activity.',
    },
    {
      title: 'Verify array.js loads with a 200 status in Browser DevTools',
      body: 'Open Chrome DevTools -> Network tab on your live Framer site, filter by "posthog", and verify HTTP 200 requests succeed against your regional ingestion host.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Custom Code section is locked inside Framer Site Settings',
      fix: 'Framer requires a paid Site plan (Mini, Basic, Pro, or Business) to inject custom scripts; upgrade from the Free plan before pasting the PostHog snippet.',
    },
    {
      problem: 'PostHog Activity shows zero events after clicking Save in Framer',
      fix: 'Make sure you clicked Publish -> Update in the top-right corner of Framer after saving Site Settings, and check that api_host matches your US or EU PostHog cloud.',
    },
    {
      problem: 'Client-side Framer route changes are not logging new $pageview events',
      fix: 'Ensure capture_pageview is left at its default (or set to "history_change") in posthog.init so PostHog tracks Framer single-page React navigation automatically.',
    },
  ],
  faqs: [
    {
      question: 'Does PostHog track Framer single-page navigation automatically?',
      answer:
        'Yes. Modern posthog-js automatically listens to browser History API route changes in Framer single-page sites and logs a $pageview on every page transition.',
    },
    {
      question: 'Should I put the PostHog script in Start of <head> or End of <body> in Framer?',
      answer:
        'Place it in "Start of <head> tag" as recommended by PostHog so autocapture and session replay start recording before visitors click interactive Framer components.',
    },
    {
      question: 'Can I run PostHog surveys and feature flags on a Framer site?',
      answer:
        'Yes. Once the PostHog snippet is published in your Framer <head>, no-code pop-up surveys and feature flags work immediately without extra code.',
    },
  ],
  relatedSlugs: [
    'posthog-on-webflow',
    'posthog-on-squarespace',
    'posthog-on-wix',
  ],
  lastVerified: '2026-11-15',
};
