# tianenhe.art — Website Source Code

## File Structure
```
tianenhe-website/
├── index.html          ← Homepage (grid background + icon nav)
├── about.html          ← About Me page
├── illustration.html   ← Illustration portfolio
├── game.html           ← Game Design portfolio
├── contact.html        ← Contact page + form
├── css/
│   ├── global.css      ← Shared styles, nav, footer, variables
│   ├── home.css        ← Homepage-specific styles
│   ├── about.css       ← About page styles
│   ├── portfolio.css   ← Shared portfolio grid + filter styles
│   ├── game.css        ← Game page extra styles
│   └── contact.css     ← Contact form styles
├── js/
│   ├── home.js         ← Homepage interactions
│   ├── inner.js        ← Shared: scroll fade-in, nav shadow
│   ├── portfolio.js    ← Category filter + lightbox
│   └── contact.js      ← Form submission
└── images/             ← (create this folder, put your images here)
    └── ...
```

## How to Add Your Images

1. Create an `images/` folder inside `tianenhe-website/`
2. Add your artwork images (JPG or PNG, recommend max 2MB each)
3. In `illustration.html`, replace each placeholder div with a real img tag:

```html
<!-- BEFORE (placeholder) -->
<div class="portfolio-item__img placeholder-img">[ Product Design 01 ]</div>

<!-- AFTER (real image) -->
<img class="portfolio-item__img" src="images/your-artwork.jpg" alt="Project Title" loading="lazy"/>
```

## How to Update Your Info
- Replace `hello@tianenhe.art` with your real email everywhere
- Update the bio text in `about.html`
- Add your real awards in `about.html` (in the awards section)
- Replace `[Project Title]` with real project names in portfolio pages

## Contact Form (Make It Actually Send Emails)
1. Go to https://formspree.io → Create free account
2. Create a new form → copy your endpoint (e.g. `https://formspree.io/f/abcd1234`)
3. In `contact.html`, change the form tag to:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
4. Delete the JS submit handler in `js/contact.js`

## Deploy to GitHub Pages
1. Create a new GitHub repository named `tianenhe-art` (or any name)
2. Upload all files into the repo
3. Go to Settings → Pages → Source: `main` branch, `/ (root)`
4. Your site will be at: `https://yourusername.github.io/tianenhe-art/`

## Connect Your Custom Domain (tianenhe.art)
1. In GitHub Pages settings → Custom Domain → enter `tianenhe.art`
2. In your Namecheap account → DNS settings → Add these records:
   - Type: A, Host: @, Value: 185.199.108.153
   - Type: A, Host: @, Value: 185.199.109.153
   - Type: A, Host: @, Value: 185.199.110.153
   - Type: A, Host: @, Value: 185.199.111.153
   - Type: CNAME, Host: www, Value: yourusername.github.io
3. Wait up to 24 hours for DNS to propagate
4. Check "Enforce HTTPS" in GitHub Pages settings

## Colors Used
- Pink:  #fe0faa
- Gold:  #efb537
- White: #ffffff
