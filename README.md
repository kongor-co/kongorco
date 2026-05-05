# kongor.co

Personal app and software development website for Kongor Co, built as a static site for GitHub Pages.

## What is included

- `index.html` homepage with project tiles
- `projects.html` project index
- `projects/` detail pages for placeholder app and software projects
- `about.html` placeholder About, ideas, mission, and vision page
- `contact.html` placeholder contact/profile links page
- `assets/` shared CSS, JavaScript, and placeholder project images
- `CNAME` for the custom domain
- `.nojekyll` so GitHub Pages serves the static files directly

## Local preview

Open `index.html` in a browser, or serve the folder with any static server.

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## GitHub Pages setup

This repository is structured for the GitHub Pages static publishing flow described in the GitHub Pages documentation:

1. Commit the site files to the publishing branch.
2. In GitHub, open repository **Settings**.
3. Go to **Pages**.
4. Set the source to deploy from the branch and folder that contain `index.html`.
5. Keep the `CNAME` file for the custom domain.

The current `CNAME` value is:

```text
www.kongor.co
```

If you want the apex domain `kongor.co` to be primary instead, update `CNAME` and DNS records according to GitHub Pages custom domain guidance.
