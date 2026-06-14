# Fiona Page Music — Website v2

Static site for [fionapagemusic.co.uk](https://fionapagemusic.co.uk), hosted on GitHub Pages.

## File structure

```
fiona-page-music/
├── index.html              ← Main page
├── css/style.css           ← All styles
├── js/main.js              ← Scroll reveal, mobile menu, nav
├── images/
│   ├── fp_logo.png         ← Logo (already included)
│   └── hero-score.jpg      ← ⬅ ADD THIS: your music script photo
├── CNAME                   ← fionapagemusic.co.uk (for GitHub Pages)
└── README.md
```

## Adding the hero image

1. Name your music script photo `hero-score.jpg`
2. Drop it into the `images/` folder
3. Recommended size: 1800px wide, landscape crop, good contrast areas on the left side
4. If it looks too dark/light, change `--hero-overlay-opacity` in `css/style.css` `:root`
   (currently `0.52` — lower = more photo, higher = darker overlay)

## Pricing

Fill in the `£XX` placeholders in `index.html` with Fiona's real prices.
Search for `£XX` — there are 3 instances (30min, 45min, 60min cards).

## Contact details

Search `index.html` for:
- `hello@fionapagemusic.co.uk` → replace with real email
- `+441132000000` → replace with real phone (×2)
- `Add number here` → replace with display number

## VS Code local development

Install the **Live Server** extension, then right-click `index.html` → Open with Live Server.

## Deploying to GitHub Pages

1. Create a new repo (e.g. `fiona-page-music`)
2. Push all files to the `main` branch
3. Settings → Pages → Source: `main` branch, `/ (root)`
4. GitHub publishes at `https://yourusername.github.io/fiona-page-music/`

## Connecting fionapagemusic.co.uk

In GitHub: Settings → Pages → Custom domain → enter `fionapagemusic.co.uk`

In your domain registrar DNS, add 4 **A records** pointing to:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
And a **CNAME record**: `www` → `yourusername.github.io`

Enable **Enforce HTTPS** in GitHub Pages settings. Done.

## Optional upgrades

- Add a simple contact form via [Formspree.io](https://formspree.io) (free tier, no backend needed)
- Add Google Analytics with a `<script>` tag before `</head>`
- Add a favicon: save a 32×32 `favicon.ico` to the root folder and add to `<head>`:
  `<link rel="icon" href="favicon.ico">`
