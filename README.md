# Dr. Natalie C. Evans — Career Suite

A fully responsive career dashboard for program management and healthcare consulting job search. No frameworks, no build step, no API keys required.

## Files

```
natalie-career-dashboard/
├── index.html   ← main page
├── style.css    ← all styles (responsive, mobile-first)
├── app.js       ← all logic (navigation, jobs, tracker, storage)
├── vercel.json  ← Vercel deployment config
└── README.md
```

> **Resume file:** Place `NCEvans_PM_Consulting_Resume.docx` in this same folder before deploying so the download button works.

---

## Deploy to Vercel (recommended — free)

### Option A: Drag & Drop (fastest)
1. Go to [vercel.com](https://vercel.com) and sign in (free account)
2. Click **Add New → Project**
3. Drag the entire `natalie-career-dashboard` folder onto the upload area
4. Click **Deploy** — done. You'll get a live URL instantly.

### Option B: Via GitHub (auto-deploys on every update)
1. Create a new repo on [github.com](https://github.com) — name it `natalie-career-dashboard`
2. Upload all files to the repo (drag & drop in the GitHub UI, or use Git)
3. Go to [vercel.com](https://vercel.com) → **Add New → Project**
4. Click **Import** next to your GitHub repo
5. Leave all settings as default and click **Deploy**
6. Every time you push changes to GitHub, Vercel will auto-redeploy

### Option C: Vercel CLI
```bash
npm i -g vercel
cd natalie-career-dashboard
vercel
```
Follow the prompts — it will give you a live URL in ~30 seconds.

---

## Features

| Feature | Details |
|---------|---------|
| **Job board** | 32 curated roles across 4 weeks, auto-rotates every 7 days |
| **Weekly refresh** | Uses `localStorage` — jobs rotate automatically, no manual action needed |
| **Application tracker** | Save, apply, update status (Saved → Applied → Interview → Offer) — persists across sessions |
| **Interview prep** | 5 tabs: Behavioral, Technical, Consulting Case, Power Stories, Tips |
| **Career roadmap** | 5-year milestone plan with certifications, target orgs, networking, thought leadership |
| **LinkedIn guide** | Before/after headline, About section, skill tags, action checklist |
| **Responsive** | Full sidebar on desktop, bottom tab bar on mobile — works on all screen sizes |
| **No dependencies** | Pure HTML, CSS, JavaScript — no npm, no build step, no API keys |

---

## Customizing Jobs

Job listings live in `app.js` in the `JOB_WEEKS` array. Each week is an array of 8 job objects:

```js
{
  id:    'unique-id',        // must be unique
  cat:   'consulting',       // consulting | pm | ph | fed
  title: 'Job Title',
  org:   'Organization Name',
  loc:   'Dallas, TX',
  type:  'Full-time',
  sal:   '$90K–$110K',
  match: 'high',             // high | medium
  desc:  'Two sentence description.',
  reqs:  ['Req 1', 'Req 2', 'Req 3', 'Req 4'],
  days:  5,                  // days since posted (display only)
  url:   'https://careers.org/apply'
}
```

To refresh the job list for a new week, add a 5th array to `JOB_WEEKS` and remove the oldest one.

---

## Resume Download

Place `NCEvans_PM_Consulting_Resume.docx` in the same directory as `index.html`. The download buttons will serve it directly. If you rename the file, update `RESUME_URL` at the top of `app.js`.

---

Built with care for Dr. Natalie Cooley Evans, DHA, MPH.
