import type { Guide } from '../types';

export const posthogOnSquarespace: Guide = {
  slug: 'posthog-on-squarespace',
  toolId: 'posthog',
  platformId: 'squarespace',
  status: 'published',
  title: 'How to Install PostHog Product Analytics on Squarespace',
  metaDescription:
    'Add PostHog product analytics, autocapture, and session replay to your Squarespace site using Squarespace Header Code Injection.',
  whoItsFor:
    'Squarespace SaaS landing pages, digital product creators, and growth teams wanting click autocapture, conversion funnels, and session replays in PostHog.',
  whatYouGet:
    'PostHog JavaScript SDK running across your published Squarespace pages with automatic pageviews, interaction autocapture, and session recordings.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Squarespace website on a Business, Commerce, Core, Plus, or Advanced plan (required for Code Injection)',
    'A PostHog project (US or EU Cloud) with your Project API Key copied from Project Settings',
    'Website Owner or Administrator permissions inside your Squarespace dashboard',
  ],
  steps: [
    {
      title: 'Copy your PostHog Web Snippet from Project Settings',
      body: 'Log in to PostHog, open Settings in the left sidebar, go to Project -> Web snippet (or Getting Started), and copy the initialization script containing your Project API Key.',
    },
    {
      title: 'Open Code Injection in your Squarespace dashboard',
      body: 'Inside Squarespace, select Website -> Pages -> Website Tools -> Code Injection to connect PostHog.',
    },
    {
      title: 'Paste the PostHog snippet into the Header field and save',
      body: 'Paste the PostHog initialization script into the Header box inside Code Injection, replacing YOUR_POSTHOG_PROJECT_API_KEY and api_host if needed, and click Save.',
      code: {
        language: 'html',
        filename: 'Squarespace Header Code Injection',
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
      title: 'Authorize your Squarespace domain for Session Replay',
      body: 'In PostHog -> Project Settings -> Recordings, add your live custom domain under Authorized URLs so session recordings capture your Squarespace pages cleanly.',
    },
    {
      title: 'Test your live Squarespace domain in an incognito browser',
      body: 'Open your public Squarespace URL in an incognito tab because Squarespace pauses Header Code Injection scripts while you are logged into the admin editor.',
    },
  ],
  verification: [
    {
      title: 'Check incoming $pageview and $autocapture events in PostHog Activity',
      body: 'Browse two or three pages on your public Squarespace site in an incognito window, then open PostHog -> Activity to verify live events appear within seconds.',
    },
    {
      title: 'Verify array.js loads with a 200 status in Browser DevTools',
      body: 'Open Chrome DevTools -> Network tab on your live Squarespace domain, filter by "posthog", and confirm requests to your regional PostHog host succeed.',
    },
  ],
  troubleshooting: [
    {
      problem: 'Code Injection is unavailable on my Squarespace plan',
      fix: 'Squarespace restricts Header Code Injection on Personal plans; upgrade to a Business or Core plan (or higher) to add the PostHog JavaScript snippet.',
    },
    {
      problem: 'No events appear in PostHog Activity after saving in Squarespace',
      fix: 'Visit your live custom domain in an incognito window rather than the Squarespace editor preview, and verify api_host matches your US or EU PostHog cloud region.',
    },
    {
      problem: 'Session recordings show blank frames or missing Squarespace stylesheets',
      fix: 'Add your live domain (including https://) to Authorized URLs inside PostHog -> Project Settings -> Recordings and confirm session recording is toggled ON.',
    },
  ],
  faqs: [
    {
      question: 'Does PostHog automatically track button clicks on Squarespace?',
      answer:
        'Yes. PostHog autocapture automatically records button clicks, link clicks, form submissions, and pageviews across your Squarespace blocks once the snippet is in Header Code Injection.',
    },
    {
      question: 'Should I use the US or EU api_host in my PostHog snippet?',
      answer:
        'Use https://posthog.com if your PostHog workspace is hosted in the US Cloud, or https://posthog.com if you chose EU Cloud during workspace setup.',
    },
    {
      question: 'Can I launch PostHog no-code surveys on a Squarespace site?',
      answer:
        'Yes. With the full posthog-js SDK initialized in Squarespace Header Code Injection, PostHog pop-up surveys and feature flags work immediately on published pages.',
    },
  ],
  relatedSlugs: [
    'posthog-on-webflow',
    'posthog-on-wix',
    'posthog-on-shopify',
  ],
  lastVerified: '2026-11-15',
};
