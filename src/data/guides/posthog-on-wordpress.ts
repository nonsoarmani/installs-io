import type { Guide } from '../types';

export const posthogOnWordpress: Guide = {
  slug: 'posthog-on-wordpress',
  toolId: 'posthog',
  platformId: 'wordpress',
  status: 'published',
  title: 'How to Install PostHog on WordPress (Session Replay & Heatmaps)',
  metaDescription:
    'Install PostHog analytics, heatmaps, and session recordings on WordPress using WPCode or your theme header without breaking updates.',
  whoItsFor:
    'WordPress site owners, SaaS blogs, and WooCommerce stores that want session replays, click heatmaps, and conversion funnels.',
  whatYouGet:
    'PostHog JavaScript snippet safely injected into your WordPress <head> so it persists across theme updates.',
  difficulty: 'Beginner',
  estimatedMinutes: 10,
  prerequisites: [
    'Administrator access to your WordPress dashboard',
    'A PostHog account (US or EU Cloud) with your Project API Key (phc_...)',
    'Permission to install plugins (or edit theme headers)',
  ],
  steps: [
    {
      title: 'Copy your PostHog web snippet',
      body: 'Log in to PostHog (://posthog.com or ://posthog.com), open Project Settings in the left menu, and copy your Web snippet containing your Project API Key (starting with phc_).',
    },
    {
      title: 'Install the WPCode plugin in WordPress',
      body: 'In your WordPress Admin (://yourdomain.com), go to Plugins -> Add New Plugin, search for "WPCode", install "WPCode – Insert Headers and Footers", and click Activate.',
      note: 'Using WPCode ensures your PostHog tracking script will not be erased when you update your WordPress theme.',
    },
    {
      title: 'Paste the PostHog snippet into the Header section',
      body: 'In your WordPress left sidebar, go to Code Snippets -> Header & Footer. Paste your PostHog script into the Header box, replacing YOUR_POSTHOG_PROJECT_API_KEY with your key, and click Save Changes.',
      code: {
        language: 'html',
        filename: 'WPCode Global Header',
        code: `<script>
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o],e=o),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","://posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init('YOUR_POSTHOG_PROJECT_API_KEY', {
    api_host: 'https://posthog.com',
    person_profiles: 'identified_only'
  })
</script>`,
      },
    },
    {
      title: 'Purge your WordPress cache',
      body: 'If you use WP Rocket, LiteSpeed Cache, W3 Total Cache, or Cloudflare caching, clear all caches so visitors receive the updated page header.',
    },
    {
      title: 'Verify live traffic in PostHog',
      body: 'Open your WordPress site in a private window, browse two pages, and open PostHog -> Activity -> Live events to confirm $pageview events arrive.',
    },
  ],
  verification: [
    {
      title: 'Inspect page source for posthog.init',
      body: 'Open your homepage, right-click -> View Page Source, and search for "posthog.init" to confirm WPCode injected the snippet cleanly inside <head>.',
    },
    {
      title: 'Check Live events in PostHog',
      body: 'In PostHog -> Activity -> Live events, confirm $pageview and $autocapture events stream in with your WordPress URLs.',
    },
  ],
  troubleshooting: [
    {
      problem: 'PostHog shows no events after saving in WPCode',
      fix: 'Clear your WordPress page cache and CDN cache, verify your Project API Key starts with phc_, and test in a browser with ad blockers turned off.',
    },
    {
      problem: 'Optimization plugins break the PostHog script',
      fix: 'If WP Rocket or Autoptimize minifies inline JavaScript, add "posthog" to your JavaScript delay/minification exclusion list.',
    },
    {
      problem: 'I want to exclude logged-in WordPress admins from tracking',
      fix: 'In WPCode Header & Footer or a conditional snippet, wrap the PostHog script in a check so it only loads when is_user_logged_in() is false.',
    },
  ],
  faqs: [
    {
      question: 'Is there an official PostHog WordPress plugin?',
      answer:
        'PostHog recommends adding the official JavaScript snippet via a header plugin like WPCode rather than relying on third-party plugins that may lag behind SDK updates.',
    },
    {
      question: 'Does PostHog work alongside Google Analytics 4 on WordPress?',
      answer:
        'Yes. PostHog and GA4 run independently without interfering with each other’s cookies or events.',
    },
    {
      question: 'How much does PostHog cost for a WordPress site?',
      answer:
        'PostHog includes 1 million events and 5,000 session recordings free every month, which covers most WordPress sites at zero cost.',
    },
  ],
  relatedSlugs: [
    'posthog-on-shopify',
    'posthog-on-webflow',
    'google-analytics-4-on-wordpress',
  ],
  lastVerified: '2026-11-13',
};
