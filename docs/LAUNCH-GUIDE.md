# installs.io: Launch guide (super simple)

Go in order. Do ONE step, check you saw what it says, then the next.
If anything looks different or shows an error, stop and send me a screenshot or paste the words.

Menu names on other companies' websites (Paystack, Cloudflare, GitHub) change sometimes. If a button has a slightly different name, look for the closest one.

---

## PART 1: Get the website running on your computer

1. Find `installs-io.zip` in your Downloads. Right-click it, click **Extract All** (Windows), then **Extract**.
2. Move the new `installs-io` folder into your **Documents** folder. (If you already have an old `installs-io` folder there from before, delete it first.)
3. Open **VS Code**. Click **File > Open Folder**. Choose Documents > installs-io. Click **Select Folder**. If it asks "Do you trust the authors?", click **Yes**.
4. Click **Terminal > New Terminal** at the top. A box opens at the bottom.
5. Type this and press Enter, then wait (1 to 2 minutes): `npm install`
   You should see something like "added 300 packages". Warnings in yellow are fine. Red "ERR" is not: send it to me.
6. Type this and press Enter: `npm run dev`
7. You will see a line with `http://localhost:4321`. Open that in your browser. You should see your website with a yellow bar at the top saying PREVIEW. That yellow bar is normal on your computer.
8. To stop it, click in the bottom box and press **Ctrl + C**.

---

## PART 2: Fill in your details (the one file you edit)

1. In VS Code, click the little arrow next to **src**, then click **config.ts**.
2. Find each line with the word **TODO**. Replace ONLY the words inside the quote marks. Never delete the quote marks or the comma.
   - `supportEmail`: your email
   - `web3formsAccessKey`: from Part 3
   - `paymentUrl`: from Part 4
   - `companyName`, `country`, `lastUpdated`: your name or business name, "Nigeria", and today's date
3. Press **Ctrl + S** to save.
4. In the bottom box type `npm run validate` and press Enter. It lists anything still left to fill in. Warnings are OK for now.

---

## PART 3: Make the forms work (Web3Forms)

1. Go to web3forms.com, type your email, press the button. You get an email with an **Access Key**.
2. Copy the key. In `src/config.ts` replace `TODO-paste-your-web3forms-access-key` with it. Save.
3. Test later (Part 8): submit a form on your site and check your email.

---

## PART 4: Get paid from Nigeria (Stripe is not available to you, so use Paystack)

Paystack is a Nigerian payment company. It accepts Visa, Mastercard and Verve cards from customers around the world, and its help pages say Nigerian businesses can enable international card payments. Fee shown on their help page: 3.9% per card payment (check their current pricing).

1. Go to paystack.com and click **Sign up**. Confirm your email.
2. Paystack asks you to **activate your business**: your details, a Nigerian bank account and ID. If it asks whether you have a registered business and you don't, choose the individual / starter option if it offers one. This can take a few days.
3. Turn on **international payments** (needed for customers outside Nigeria): in the Paystack dashboard go to **Settings > Preferences** and look for **Accept international payments**. If it is not ticked, click **Request international payments**. Paystack says to expect an answer within about 2 working days.
4. About dollars: Paystack can charge in USD, but paying out USD needs a Zenith Bank USD account. If you don't have one, you can charge in Naira instead and I will change the price on the site to match. Tell me which you want.
5. Make your payment link: in the dashboard look for **Payment Pages** (it may be under "Commerce" or similar) and click **Create**. Name: Express Install. Amount: 149 (USD) or your Naira price. Fixed amount, not "customer chooses".
6. If it asks for a **redirect URL** (where customers go after paying), enter `https://installs.io/thanks/`. If you can't find that option, don't worry: the page will still show a success message, and you can email the thanks link to customers.
7. Click save/publish and **copy the link**.
8. In `src/config.ts` paste it into `paymentUrl` (replacing `TODO-paste-your-payment-link`). Save.
9. Backup option: Flutterwave is another Nigerian service with payment links. I have not checked their current rules, so try Paystack first.

Do not turn on the "money-back guarantee" badge in config.ts unless you will really honor it.

---

## PART 5: Make at least ONE guide real

Right now all 10 guides are **drafts**, so nobody can see them on your real website. That is on purpose. Each draft has the words "TODO: verify" where I was not sure a button name is current. Publishing wrong instructions would hurt you.

Easiest way: tell me "check the Google Analytics on WordPress guide". I will compare it with Google's current help pages and fix it. Then:

1. Open the guide, e.g. `src/data/guides/google-analytics-4-on-wordpress.ts`.
2. Change `status: 'draft'` to `status: 'published'`.
3. Change `lastVerified: null` to today's date in quotes, like `lastVerified: '2026-11-20'`. Only put a date when you (or I) really checked it.
4. Save. In the bottom box run `npm run validate`. It must say "Validation passed". If it complains, it tells you what to fix.

---

## PART 6: Put the project on GitHub

1. Open **GitHub Desktop**. Click **File > Add local repository**. Choose the `installs-io` folder.
2. If it says "not a Git repository", click **create a repository**, keep the defaults, click **Create repository**.
3. Bottom left, in the "Summary" box type `first version`. Click **Commit to main**.
4. Click **Publish repository** at the top. Keep "Keep this code private" ticked. Click **Publish repository**.
5. You should see "Last fetched just now" and your project on github.com.

Later, every time you change something: Summary box, **Commit to main**, then **Push origin**.

---

## PART 7: Put it on the internet (Cloudflare Pages)

1. Log in at dash.cloudflare.com. Click **Workers & Pages** in the left menu.
2. Click **Create**, then the **Pages** tab, then **Connect to Git**.
3. Connect your GitHub account when asked and choose the `installs-io` repository. Click **Begin setup**.
4. Fill in:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click **Environment variables**, **Add variable**: name `NODE_VERSION`, value `24`.
6. Click **Save and Deploy**. Wait about a minute.
7. Open the `something.pages.dev` link it gives you. You should see your site (no yellow bar this time).

If it says "build failed", copy the red text and send it to me.

Heads up: until you publish a guide (Part 5), the real site shows no guide pages. That's expected.

### Connect installs.io
1. In your Pages project, click **Custom domains > Set up a custom domain**.
2. Type `installs.io` and follow the prompts. If you bought the domain somewhere else, Cloudflare shows two "nameservers" to paste into that website's domain settings. If you haven't bought it yet, buy it first (Cloudflare or any registrar).
3. Wait until it says **Active** (minutes, sometimes up to a day).

---

## PART 8: Free visitor counter and Google

1. Cloudflare dashboard > **Web Analytics > Add a site** > choose installs.io. If it offers automatic setup, take it. Otherwise copy the token into `cloudflareBeaconToken` in `config.ts`, save, then Commit and Push in GitHub Desktop.
2. Go to search.google.com/search-console > **Add property** > **Domain** > `installs.io`. Follow the steps (Cloudflare can add the verification record for you).
3. Click **Sitemaps**, type `sitemap-index.xml`, click **Submit**.

---

## PART 9: Test everything before real customers

1. Open your live site. Use the finder with a guide that exists: you should land on that guide.
2. Pick a combination that doesn't exist: you should see "We don't have this yet" and a form.
3. Fill in each form with your own email. Check your inbox.
4. Click the Express Install button and try Paystack in **Test mode** (switch at the top of the dashboard). Paystack's website lists test card numbers: search "Paystack test cards". You should land on /thanks/ or see a success message.
5. Only switch to live mode when Parts 2 to 5 are done.

---

## Before you take real money

- [ ] No TODO left in config.ts (`npm run validate` shows none)
- [ ] Service terms say only what you will actually do (config.ts, `service` section)
- [ ] Privacy and Terms pages reviewed by a qualified person
- [ ] At least one guide verified and published
- [ ] Your affiliate links added in `src/data/tools.ts` where you're in a program (they're plain websites now)
- [ ] The round letter logos are placeholders. Only use official logos if each brand's rules allow it
