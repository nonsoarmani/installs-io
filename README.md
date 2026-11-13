# installs.io

Step-by-step install guides plus a done-for-you Express Install service. Built with Astro, Tailwind, Lucide. Static site, no database.

**Start here:** `docs/LAUNCH-GUIDE.md`

## Commands
- `npm install` : download what the project needs (once)
- `npm run dev` : preview at http://localhost:4321 (drafts visible)
- `npm run validate` : check every guide and list remaining TODOs
- `npm run build` : validate, then build the real site into `dist/`

## Where things live
- `src/config.ts` : price, links, email, legal text (the file you edit)
- `src/data/` : tools, platforms, partners and guides
- `src/data/guides/` : one file per guide
- `src/pages/` : the pages
- `docs/` : launch guide, order checklist, how to add guides, first 50 guides

## Draft vs published
Guides with `status: 'draft'` appear only on your computer or in a private preview. Only `published` guides with a real `lastVerified` date and no "TODO" text reach the live site.
