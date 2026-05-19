# Anne-Sophie Leroy — Portfolio

Personal portfolio website for Anne-Sophie Leroy, UX/UI Designer with 4+ years of experience. Built as a single-page application in vanilla HTML, CSS and JavaScript — no framework, no dependencies.

**Live:** [annesophieleroy.com](https://annesophieleroy.com) <!-- update with your actual URL -->

---

## Features

- **Bilingual (EN / FR)** — toggle switch in the navbar switches all content including slide descriptions; preference is saved in `localStorage`
- **Project sliders** — each project card has an image carousel with per-slide contextual description
- **Marquee** — auto-scrolling project thumbnails strip, pauses on hover
- **Scroll-reveal animations** — sections fade in as they enter the viewport
- **Sticky navbar** with smooth scroll and mobile burger menu
- **Download CV** direct link
- Fully **responsive** (desktop → tablet → mobile)

---

## Tech stack

| Layer | Choice |
|---|---|
| Markup | Semantic HTML5 |
| Styling | Vanilla CSS (custom properties, flexbox, CSS Grid) |
| Scripting | Vanilla JavaScript (ES5-compatible) |
| Fonts | [Anek Malayalam](https://fonts.google.com/specimen/Anek+Malayalam) via Google Fonts |
| Images | Hosted on Webflow CDN + local `/assets` |

No build step, no bundler, no npm — open `index.html` in a browser and it works.

---

## Getting started

```bash
# Clone or download the project
git clone <repo-url>
cd portfolio-antigravity

# Serve locally (Python 3)
python3 -m http.server 3456
# → open http://localhost:3456
```

Or simply open `index.html` directly in any modern browser.

---

## Project structure

```
portfolio-antigravity/
├── index.html          # Full site — HTML, embedded CSS and JS
├── assets/
│   ├── Favicon-asl-1.png
│   ├── ASL-pp.jpeg     # Profile picture (local fallback)
│   ├── BNPParibas-*.png
│   ├── GRDF-*.png
│   ├── DICP-*.png
│   └── P-*.png         # Marquee thumbnails
├── styles.css          # Original Webflow export (reference)
├── webflow.css         # Original Webflow export (reference)
├── webflow.html        # Original Webflow export (reference)
└── README.md
```

> `styles.css`, `webflow.css` and `webflow.html` are kept as reference from the original Webflow source. The live site runs entirely from `index.html`.

---

## Customisation

### Update a text (EN + FR)

All translatable strings live in the `translations` object inside the `<script>` tag at the bottom of `index.html`.

```js
var translations = {
  en: {
    'hero-title-txt': 'Product Designer | 4+ Years of Experience',
    // ...
  },
  fr: {
    'hero-title-txt': 'Product Designer | 4+ ans d\'expérience',
    // ...
  }
};
```

Each key matches an `id` attribute on the corresponding HTML element. Edit both `en` and `fr` values to keep the toggle consistent.

### Update slide descriptions

Per-slide texts are in the `slideTexts` object, organised by project key (`bnp`, `grdf`, `dicp`) and language:

```js
var slideTexts = {
  bnp: {
    en: ['slide 0 text…', 'slide 1 text…', …],
    fr: ['texte slide 0…', 'texte slide 1…', …]
  },
  // grdf, dicp …
};
```

The array index matches the slide order in the HTML (`#bnp-track`, `#grdf-track`, `#dicp-track`).

### Add a new project

1. **Add a slider section** — duplicate one of the existing `<!-- ── BNP Paribas CIB ── -->` blocks and update the IDs (`bnp` → your key).
2. **Add the slide images** inside `.slider-track`.
3. **Register the new slider** in the JS state object and `slideTexts`:
   ```js
   var state = { bnp: 0, grdf: 0, dicp: 0, myproject: 0 };
   var slideTexts = { …, myproject: { en: […], fr: […] } };
   ```
4. **Add a marquee thumbnail** in both `.project-marquee` blocks.

### Update the CV link

Search for `drive.google.com` in `index.html` and replace both occurrences (hero button + BNP "Learn more") with your updated URL.

### Change the profile photo

The hero image is loaded from the Webflow CDN. To use a local file:

```html
<!-- in the hero section -->
<div class="div-block-2" data-w-id="hero-img">
  <img src="assets/ASL-pp.jpeg" loading="lazy" alt="Anne-Sophie Leroy"/>
</div>
```

---

## Deployment

The site is a single static file — any static host works.

| Host | Steps |
|---|---|
| **Netlify** | Drag & drop the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop) |
| **GitHub Pages** | Push to a repo → Settings → Pages → Deploy from branch `main` |
| **Vercel** | `npx vercel` in the project folder |
| **Custom FTP** | Upload `index.html` + `assets/` to your web root |

> If you add a custom domain, update the `<link rel="canonical">` meta tag (or add one) to avoid duplicate-content issues for SEO.

---

## Sections

| Section | Anchor | Description |
|---|---|---|
| Hero | — | Title, bio, CV download |
| Marquee | — | Auto-scrolling project thumbnails |
| Skills | `#Competences` | 4 competency cards |
| Projects | `#Projets` | BNP Paribas CIB · GRDF · DICP |
| Testimonials | `#Recommandation` | 3 colleague recommendations |

---

## Browser support

Tested on Chrome, Firefox, Safari and Edge (latest versions).  
Uses `IntersectionObserver`, CSS custom properties and `localStorage` — all supported in any browser released after 2018.

---

## Contact

**Anne-Sophie Leroy** — UX/UI Designer  
leroy.annesophie02@gmail.com  
[linkedin.com/in/anne-sophie-leroy](https://www.linkedin.com/in/anne-sophie-leroy/)
