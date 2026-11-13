# Adding new guides safely

## The process (about 1 hour per guide)

1. Pick a tool + platform from `docs/FIRST-50-GUIDES.md`.
2. If the tool or platform is new, add it to `src/data/tools.ts` or `src/data/platforms.ts` (copy an existing entry). Add a logo SVG in `public/logos/`.
3. **Do the install yourself** on a test site, with screenshots. Write down the exact menu names you see.
4. Copy an existing guide file in `src/data/guides/`, rename it `<tool-slug>-on-<platform-slug>.ts`, and change the export name.
5. Fill it in using the AI prompt below, then check every line against what you saw.
6. Add the import and list entry in `src/data/integrations.ts`.
7. Run `npm run validate`. Fix everything it reports.
8. Keep `status: 'draft'` until the quality checklist below is all ticked, then publish with a real `lastVerified` date.

The file name and `slug` must be exactly `<tool slug>-on-<platform slug>`.

## Reusable AI prompt

Paste this into your AI assistant, filling the brackets. Attach screenshots and the vendor's current help page text.

```
You are helping me write a step-by-step install guide for a website, as a TypeScript object.

Tool: [TOOL NAME]   Platform: [PLATFORM NAME]
Audience: non-developer business owners.

Rules:
- Use ONLY the facts in the vendor documentation and my screenshots pasted below. Do not invent menu names, button labels, settings, prices or code.
- If something is not in the material, write "TODO: verify" in that sentence.
- Plain English, short sentences. Explain any technical word once.
- Every guide must have genuinely unique content for this exact tool + platform: at least 5 steps, 2 prerequisites, 2 verification checks, 3 troubleshooting items, 3 FAQs.
- Code must be exact from the vendor docs. Use placeholders like YOUR_ID for private values. Never include real keys.
- Match this TypeScript type exactly: [paste the Guide type from src/data/types.ts]
- Title max 70 characters. metaDescription 70 to 160 characters.
- Set status: 'draft' and lastVerified: null.
- Do not copy sentences from other guides on my site.

Vendor documentation:
[paste text]

My notes and screenshots:
[paste notes]
```

## Quality-review checklist (tick all before publishing)

- [ ] I did the install myself, start to finish, on the current version of both products
- [ ] Every menu name and button label matches what I saw
- [ ] No "TODO" text left
- [ ] Code was copied from the vendor's current docs and tested
- [ ] Steps differ meaningfully from the same tool on other platforms (not just a find-and-replace)
- [ ] Troubleshooting items are real problems I hit or the vendor documents
- [ ] FAQs answer real questions, not filler
- [ ] Pricing or plan claims removed or checked today
- [ ] Affiliate link in tools.ts is real and disclosed
- [ ] `npm run validate` passes
- [ ] `lastVerified` is the real date I checked
- [ ] I read the page in the browser (`npm run dev`) on phone width

## Keeping guides fresh

Tools change menus often. Every 90 days (or when a reader reports a problem) re-run the install and update `lastVerified` only if you really re-checked every step.

## Publishing pace

Publish a few strong guides at a time rather than dozens of thin ones. The build blocks thin pages, but accuracy is on you.
