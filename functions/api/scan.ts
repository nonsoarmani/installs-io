const PLATFORMS = [
  { id: 'shopify', name: 'Shopify', patterns: [/cdn\.shopify\.com/i, /Shopify\.theme/i, /myshopify\.com/i] },
  { id: 'wordpress', name: 'WordPress', patterns: [/wp-content\//i, /wp-includes\//i, /wordpress/i] },
  { id: 'webflow', name: 'Webflow', patterns: [/website-files\.com/i, /data-wf-site/i, /webflow\.js/i] },
  { id: 'wix', name: 'Wix', patterns: [/static\.wixstatic\.com/i, /wix-warmup-data/i, /wixsite\.com/i] },
  { id: 'squarespace', name: 'Squarespace', patterns: [/static1\.squarespace\.com/i, /squarespace-cdn\.com/i] },
  { id: 'framer', name: 'Framer', patterns: [/framerusercontent\.com/i, /data-framer-hydrate-v2/i] },
];

const TOOLS = [
  { id: 'gtm', slug: 'google-tag-manager', name: 'Google Tag Manager', category: 'Analytics & Pixels', patterns: [/googletagmanager\.com\/gtm\.js/i, /GTM-[A-Z0-9]+/i] },
  { id: 'ga4', slug: 'google-analytics-4', name: 'Google Analytics 4', category: 'Analytics & Pixels', patterns: [/googletagmanager\.com\/gtag\/js/i, /G-[A-Z0-9]{6,}/i] },
  { id: 'meta-capi', slug: 'meta-conversions-api', name: 'Meta Pixel / CAPI', category: 'Analytics & Pixels', patterns: [/connect\.facebook\.net\/.*\/fbevents\.js/i, /fbq\s*\(/i] },
  { id: 'gohighlevel', slug: 'gohighlevel', name: 'GoHighLevel', category: 'Email & CRM', patterns: [/widgets\.leadconnectorhq\.com/i, /msgsndr\.com/i, /gohighlevel/i] },
  { id: 'hubspot', slug: 'hubspot', name: 'HubSpot', category: 'Email & CRM', patterns: [/js\.hs-scripts\.com/i, /js-eu1\.hs-scripts\.com/i, /hs-analytics\.net/i] },
  { id: 'klaviyo', slug: 'klaviyo', name: 'Klaviyo', category: 'Email & CRM', patterns: [/static\.klaviyo\.com/i, /klaviyo\.js/i] },
  { id: 'brevo', slug: 'brevo', name: 'Brevo', category: 'Email & CRM', patterns: [/sibautomation\.com/i, /sendinblue/i, /brevo/i] },
  { id: 'hotjar', slug: 'hotjar', name: 'Hotjar', category: 'Product Analytics', patterns: [/static\.hotjar\.com/i, /hjSettings/i] },
  { id: 'posthog', slug: 'posthog', name: 'PostHog', category: 'Product Analytics', patterns: [/app\.posthog\.com/i, /us\.i\.posthog\.com/i, /eu\.i\.posthog\.com/i, /posthog\.init/i] },
  { id: 'crisp', slug: 'crisp', name: 'Crisp', category: 'Live Chat & Support', patterns: [/client\.crisp\.chat/i, /CRISP_WEBSITE_ID/i] },
  { id: 'tidio', slug: 'tidio', name: 'Tidio', category: 'Live Chat & Support', patterns: [/code\.tidio\.co/i, /tidioChatCode/i] },
];

export async function onRequestPost(context: { request: Request }) {
  try {
    const body = (await context.request.json()) as { url?: string };
    let rawUrl = (body.url || '').trim();

    if (!rawUrl) {
      return Response.json({ error: 'Please enter a website URL.' }, { status: 400 });
    }
    if (!/^https?:\/\//i.test(rawUrl)) {
      rawUrl = `https://${rawUrl}`;
    }

    let parsed: URL;
    try {
      parsed = new URL(rawUrl);
    } catch {
      return Response.json({ error: 'Invalid URL format. Example: mystore.com' }, { status: 400 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

    const res = await fetch(parsed.toString(), {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; InstallsIoScanner/1.0; +https://installs.io)',
        Accept: 'text/html,application/xhtml+xml',
      },
    });
    clearTimeout(timeout);

    if (!res.ok) {
      return Response.json(
        { error: `Could not reach ${parsed.hostname} (HTTP ${res.status}). Make sure the site is public.` },
        { status: 422 }
      );
    }

    const html = await res.text();

    const detectedPlatform =
      PLATFORMS.find((p) => p.patterns.some((rx) => rx.test(html))) || null;

    const detected: Array<{ id: string; slug: string; name: string; category: string }> = [];
    const missing: Array<{ id: string; slug: string; name: string; category: string }> = [];

    for (const tool of TOOLS) {
      const found = tool.patterns.some((rx) => rx.test(html));
      const item = { id: tool.id, slug: tool.slug, name: tool.name, category: tool.category };
      if (found) {
        detected.push(item);
      } else {
        missing.push(item);
      }
    }

    return Response.json({
      domain: parsed.hostname,
      platform: detectedPlatform ? { id: detectedPlatform.id, name: detectedPlatform.name } : null,
      detected,
      missing,
    });
  } catch {
    return Response.json(
      { error: 'Scan timed out or the site blocked automated checks. Try another public URL.' },
      { status: 500 }
    );
  }
}
