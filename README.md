# GTA6Storage.co.uk

Affiliate website for GTA 6 storage upgrades — launched ahead of the November 19, 2026 release.

## Project Structure

```
gta6-storage/
├── index.html              ← Homepage (hero, console checker, product cards)
├── css/
│   └── styles.css          ← All shared styles / design tokens
├── js/
│   └── main.js             ← Nav toggle, countdown timer, affiliate tracking
├── pages/
│   ├── install-guide.html  ← PS5 M.2 SSD install guide
│   └── faq.html            ← GTA 6 storage FAQ (great for SEO)
├── images/                 ← Add product images, screenshots here
└── README.md
```

## Before Going Live — Checklist

- [ ] **Replace `YOURTAG-21`** in every affiliate link in `index.html`  
      Search for `YOURTAG-21` and replace with your Amazon Associates UK tracking ID  
      (Sign up at: https://associates.amazon.co.uk)
- [ ] Upload all files to your IONOS hosting (keep folder structure intact)
- [ ] Point `gta6storage.co.uk` to your hosting in IONOS DNS settings
- [ ] Set up 301 redirect from `gta6storage.com` and `gta6storage.uk` → `gta6storage.co.uk`
- [ ] Add Google Analytics (paste GA4 snippet before `</head>` in each HTML file)

## Amazon Affiliate Links

All "Buy on Amazon" buttons use search links in the format:
```
https://www.amazon.co.uk/s?k=PRODUCT+NAME&tag=YOURTAG-21
```
Replace `YOURTAG-21` with your real tag. Consider linking to specific ASINs 
once you've confirmed the exact products.

## SEO Keywords Targeted

- gta 6 storage ps5
- gta 6 file size 210gb  
- best ssd for gta 6 ps5
- how much storage does gta 6 need
- ps5 ssd upgrade gta 6
- xbox series s gta 6 storage

## Tech Stack

Plain HTML, CSS, and vanilla JS — no frameworks, no build step needed.
Just open in VS Code, edit, and FTP/upload to IONOS.
