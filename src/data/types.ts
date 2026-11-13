// The "shape" of our data. TypeScript warns you if you forget a field.

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Status = 'draft' | 'published';

export type ToolCategory =
  | 'Analytics & Pixels'
  | 'Email & CRM'
  | 'Live Chat & Support'
  | 'Product Analytics';

// Order used on the homepage grid
export const toolCategories: ToolCategory[] = [
  'Analytics & Pixels',
  'Email & CRM',
  'Live Chat & Support',
  'Product Analytics',
];

export interface Tool {
  id: string; // unique, used to link guides to tools
  slug: string; // used in the URL
  name: string;
  category: ToolCategory;
  shortDescription: string;
  longDescription: string; // shown on the tool hub page (2-3 sentences)
  logo: string; // local file in /public, e.g. '/logos/klaviyo.svg'
  websiteUrl: string;
  affiliateUrl: string; // your affiliate link (plain website until you have one)
  affiliateDisclosure: boolean; // true = a disclosure is shown next to the link
  affiliateCtaText: string; // e.g. "Don't have a Klaviyo account yet? Start a free trial"
  officialDocsUrl: string;
}

export interface Platform {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string; // shown on the platform hub page
  logo: string;
  websiteUrl: string;
}

export interface Partner {
  id: string;
  name: string;
  url: string;
  blurb: string; // 1-2 sentences about what they do
  platformIds: string[]; // platforms this partner is featured on
}

export type CodeLanguage = 'html' | 'js' | 'php' | 'liquid' | 'bash' | 'json' | 'text';

export interface CodeBlock {
  language: CodeLanguage;
  filename?: string; // e.g. 'theme.liquid'
  code: string;
}

export interface Step {
  title: string;
  body: string;
  code?: CodeBlock;
  note?: string;
  warning?: string;
  image?: string; // path in /public, e.g. '/screens/klaviyo-step-2.png'
  imageAlt?: string; // required when image is set
}

export interface VerificationItem {
  title: string;
  body: string;
}

export interface TroubleshootingItem {
  problem: string;
  fix: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string; // MUST equal `${tool.slug}-on-${platform.slug}`
  toolId: string;
  platformId: string;
  status: Status; // 'draft' guides never go live
  title: string; // page title, max 70 characters
  metaDescription: string; // 70 to 160 characters
  whoItsFor: string;
  whatYouGet: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  prerequisites: string[];
  steps: Step[];
  verification: VerificationItem[];
  troubleshooting: TroubleshootingItem[];
  faqs: Faq[];
  relatedSlugs: string[]; // slugs of other guides
  lastVerified: string | null; // 'YYYY-MM-DD' (real date you checked it) or null for drafts
  partnerId?: string; // optional sponsored installer for this one guide
}
