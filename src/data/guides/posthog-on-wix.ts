import type { Guide } from '../types';

export const posthogOnWix: Guide = {
  slug: 'posthog-on-wix',
  toolId: 'posthog',
  platformId: 'wix',
  status: 'published',
  title: 'How to Install PostHog Product Analytics on Wix',
  metaDescription:
    'Add PostHog product analytics, autocapture, and session replay to your Wix website using Wix Dashboard Custom Code settings.',
  whoItsFor:
    'Wix product teams, SaaS startups, and growth marketers who want event autocapture, user funnels, and session recordings in PostHog.',
  whatYouGet:
    'PostHog JavaScript SDK running across your published Wix pages with automatic pageview tracking, click autocapture, and session replay.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'A Wix website on a paid Premium plan with a connected custom domain (required for Custom Code)',
    'A PostHog project (US or EU Cloud) with your Project API Key ready under Project Settings',
    'Owner or Website Manager permissions inside your Wix Dashboard',
  ],
  steps: [
    {
      title: 'Copy your PostHog JavaScript snippet from Project Settings',
      body: 'Log in to PostHog, click Settings in the left sidebar, open Project -> Web snippet (or Getting Started), and copy the initialization script containing your Project API Key.',
    },
    {
      title: 'Open Custom Code in your Wix Dashboard',
      body: 'Open your Wix site dashboard, scroll down the left sidebar to Settings, click Development & Integrations, and open Custom Code.',
    },
    {
      title: 'Paste the PostHog snippet into Wix Custom Code',
      body: 'Click "+ Add Custom Code" in the upper right, paste the PostHog loader script below with your Project API Key and regional api_host, and name it "PostHog Analytics".',
      code: {
        language: 'html',
        filename: 'Wix Custom Code (Head)',
        code: `<script>
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","://posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init('YOUR_POSTHOG_PROJECT_API_KEY', {
    api_host: 'https://posthog.com',
    person_profiles: 'identified_only'
  });
</script>`,
      },
    },
    {
      title: 'Assign to All Pages in Head and click Apply',
      body: 'Under "Add Code to Pages," select "All pages" with "Load code once" enabled, set "Place Code in" to "Head" so autocapture catches initial clicks, and click Apply.',
    },
    {
      title: 'Publish your Wix site to start capturing events',
      body: 'Open the Wix Editor and click Publish in the top-right corner so the PostHog SDK deploys to your live custom domain.',
    },
  ],
  verification: [
    {
      title: 'Inspect live $pageview and $autocapture events in PostHog Activity',
      body: 'Open your published Wix custom domain in an incognito browser tab, click a few links, and confirm $pageview and $autocapture events appear in PostHog -> Activity.',
    },
    {
      title: 'Verify array.js and decide network calls in Browser DevTools',
      body: 'Open Chrome DevTools -> Network tab on your live Wix domain, filter by "posthog", and verify HTTP 200 requests are firing to your PostHog ingestion host.',
    },
  ],
  troubleshooting: [
    {
      problem: 'No events appear in PostHog Activity after publishing in Wix',
      fix: 'Verify you used the matching regional api_host (https://posthog.com or https://posthog.com) for your PostHog project and disable browser ad blockers while testing.',
    },
    {
      problem: 'Session replays appear blank or miss Wix custom fonts',
      fix: 'Add your live custom domain to Authorized URLs inside PostHog -> Project Settings -> Recordings and confirm session recording is toggled ON.',
    },
    {
      problem: 'Duplicate $pageview events fire when navigating between Wix pages',
      fix: 'Ensure "Load code once" is selected in Wix Custom Code and remove any duplicate PostHog tags inside Google Tag Manager if GTM is also active on your site.',
    },
  ],
  faqs: [
    {
      question: 'Does PostHog automatically track button clicks on Wix without extra code?',
      answer:
        'Yes. PostHog autocapture automatically records clicks, form submissions, and pageviews across your Wix elements as soon as the base snippet is installed in Head.',
    },
    {
      question: 'Which api_host URL should I use in my PostHog snippet?',
      answer:
        'Use https://posthog.com if your PostHog workspace is hosted in the US Cloud, or https://posthog.com if you selected EU Cloud during project setup.',
    },
    {
      question: 'Can I launch PostHog surveys and feature flags on a Wix site?',
      answer:
        'Yes. Because the full posthog-js SDK loads in Head, no-code PostHog pop-up surveys and client-side feature flags work out of the box on published Wix pages.',
    },
  ],
  relatedSlugs: [
    'posthog-on-webflow',
    'posthog-on-shopify',
    'posthog-on-wordpress',
  ],
  lastVerified: '2026-11-15',
};
