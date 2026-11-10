# Sankar Nagarajan – Portfolio

Personal portfolio of Sankar Nagarajan, Microsoft Dynamics 365 Finance & Operations Associate Consultant.

Live: https://sankar-nagarajan-d365.github.io

Built with React 18, Vite, TypeScript, Tailwind CSS, Framer Motion and Lucide React.

## Branches

| Branch   | Contents                                            |
|----------|-----------------------------------------------------|
| `source` | The source code (this README). Edit here.           |
| `main`   | The built website. GitHub Pages serves this branch. Don't edit by hand. |

## Update content

All text (experience, skills, projects, links) lives in **`src/data/profile.ts`**.

- **LinkedIn:** set `links.linkedin` to your profile URL. Until then, LinkedIn buttons show as "coming soon".
- **Resume:** replace `public/Sankar-Nagarajan-Resume.pdf` with your latest PDF (keep the file name).

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Deploy to GitHub Pages

```bash
git checkout source
npm run deploy
```

`npm run deploy` builds the site and publishes `dist/` to the `main` branch with `gh-pages`. The site updates about a minute later.

GitHub Pages setting (one-time, already the default for `<username>.github.io` repos):
**Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)`**.

Remember to commit and push your source changes too:

```bash
git add -A && git commit -m "Update content" && git push origin source
```
