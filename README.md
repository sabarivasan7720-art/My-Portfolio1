# SABARI.DEV

A responsive React + Vite portfolio for Sabarivasan M, styled with the supplied plain CSS. It includes home, about, skills, projects, education, and contact sections, accessible navigation, reduced-motion support, and mobile layouts.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Vite prints the local URL (usually `http://localhost:5173`). Create and preview a production build with:

```bash
npm run build
npm run preview
```

## Personalize the portfolio

| Content | File |
| --- | --- |
| Name, role, intro, email, GitHub, LinkedIn, contact form URL | `src/data/site.js` |
| Skills and their status (`comfortable` or `learning`) | `src/data/skills.js` |
| Project descriptions, technologies, and links | `src/data/projects.js` |
| Education entries | `src/data/education.js` |
| Page title, description, fonts | `index.html` |

Project cards and education currently contain clearly marked starter copy. Replace it with real details before publishing. Empty social links are shown as unavailable rather than linking to invented profiles.

## Contact form

The form does not show a false success state. Set `formEndpoint` in `src/data/site.js` to a form-service endpoint such as Formspree to submit messages. If the endpoint is empty but `email` is set, submission opens the visitor's email app with the message prepared. If neither is set, the form explains that contact is not connected.

## Deploy

For Netlify or Vercel, use `npm run build` as the build command and `dist` as the output directory. For GitHub Pages, set `base` in `vite.config.js` to the repository path before building.

## Project layout

```text
src/
  components/Portfolio.jsx
  data/         site.js, skills.js, projects.js, education.js
  hooks/        usePortfolioEffects.js
  styles/       tokens.css, base.css, layout.css, components.css
public/         favicon.svg
```
