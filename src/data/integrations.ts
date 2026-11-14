import type { Guide } from './types';
import { gohighlevelOnWordpress } from './guides/gohighlevel-on-wordpress';
import { gohighlevelOnShopify } from './guides/gohighlevel-on-shopify';
import { gohighlevelOnWebflow } from './guides/gohighlevel-on-webflow';
import { klaviyoOnShopify } from './guides/klaviyo-on-shopify';
import { klaviyoOnWebflow } from './guides/klaviyo-on-webflow';
import { klaviyoOnWordpress } from './guides/klaviyo-on-wordpress';
import { metaConversionsApiOnShopify } from './guides/meta-conversions-api-on-shopify';
import { metaConversionsApiOnWebflow } from './guides/meta-conversions-api-on-webflow';
import { metaConversionsApiOnWordpress } from './guides/meta-conversions-api-on-wordpress';
import { googleAnalytics4OnShopify } from './guides/google-analytics-4-on-shopify';
import { googleAnalytics4OnWebflow } from './guides/google-analytics-4-on-webflow';
import { googleAnalytics4OnWordpress } from './guides/google-analytics-4-on-wordpress';
import { googleTagManagerOnShopify } from './guides/google-tag-manager-on-shopify';
import { googleTagManagerOnWebflow } from './guides/google-tag-manager-on-webflow';
import { googleTagManagerOnWordpress } from './guides/google-tag-manager-on-wordpress';
import { crispOnShopify } from './guides/crisp-on-shopify';
import { crispOnWebflow } from './guides/crisp-on-webflow';
import { crispOnWordpress } from './guides/crisp-on-wordpress';
import { posthogOnShopify } from './guides/posthog-on-shopify';
import { posthogOnWebflow } from './guides/posthog-on-webflow';
import { posthogOnWordpress } from './guides/posthog-on-wordpress';

export const guides: Guide[] = [
  gohighlevelOnWordpress,
  gohighlevelOnShopify,
  gohighlevelOnWebflow,
  klaviyoOnShopify,
  klaviyoOnWebflow,
  klaviyoOnWordpress,
  metaConversionsApiOnShopify,
  metaConversionsApiOnWebflow,
  metaConversionsApiOnWordpress,
  googleAnalytics4OnShopify,
  googleAnalytics4OnWebflow,
  googleAnalytics4OnWordpress,
  googleTagManagerOnShopify,
  googleTagManagerOnWebflow,
  googleTagManagerOnWordpress,
  crispOnShopify,
  crispOnWebflow,
  crispOnWordpress,
  posthogOnShopify,
  posthogOnWebflow,
  posthogOnWordpress,
];
