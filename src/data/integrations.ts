import type { Guide } from './types';
import { klaviyoOnShopify } from './guides/klaviyo-on-shopify';
import { klaviyoOnWebflow } from './guides/klaviyo-on-webflow';
import { metaConversionsApiOnShopify } from './guides/meta-conversions-api-on-shopify';
import { metaConversionsApiOnWordpress } from './guides/meta-conversions-api-on-wordpress';
import { googleAnalytics4OnShopify } from './guides/google-analytics-4-on-shopify';
import { googleAnalytics4OnWebflow } from './guides/google-analytics-4-on-webflow';
import { googleAnalytics4OnWordpress } from './guides/google-analytics-4-on-wordpress';
import { crispOnShopify } from './guides/crisp-on-shopify';
import { crispOnWebflow } from './guides/crisp-on-webflow';
import { crispOnWordpress } from './guides/crisp-on-wordpress';
import { posthogOnShopify } from './guides/posthog-on-shopify';
import { posthogOnWebflow } from './guides/posthog-on-webflow';
import { posthogOnWordpress } from './guides/posthog-on-wordpress';

export const guides: Guide[] = [
  klaviyoOnShopify,
  klaviyoOnWebflow,
  metaConversionsApiOnShopify,
  metaConversionsApiOnWordpress,
  googleAnalytics4OnShopify,
  googleAnalytics4OnWebflow,
  googleAnalytics4OnWordpress,
  crispOnShopify,
  crispOnWebflow,
  crispOnWordpress,
  posthogOnShopify,
  posthogOnWebflow,
  posthogOnWordpress,
];
