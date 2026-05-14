# kongor.co

personal app and software development website for kongor, built as a static site for github pages.

## what is included

- `index.html` homepage with project tiles
- `projects.html` project index
- `projects/` detail pages for placeholder app and software projects
- `about.html` placeholder about, ideas, mission, and vision page
- `contact.html` placeholder contact/profile links page
- `assets/` shared css, javascript, favicon logo, and placeholder project images
- `cname` for the custom domain
- `.nojekyll` so github pages serves the static files directly

## design notes

the current design is a minimal personal developer portfolio with:

- light and dark modes using the header theme switch
- the supplied logo at `assets/favicon.png` as the favicon and header mark
- a typography-led homepage with compact project entries
- static html/css/javascript only, so it can be served directly by github pages

the shared header is rendered from `assets/site.js`. each html page contains only a `data-site-header` placeholder, so header edits should be made in one place.

## local preview

open `index.html` in a browser, or serve the folder with any static server.

```powershell
python -m http.server 8080
```

then open `http://localhost:8080`.

## github pages setup

this repository is structured for the github pages static publishing flow described in the github pages documentation:

1. commit the site files to the publishing branch.
2. in github, open repository **settings**.
3. go to **pages**.
4. set the source to deploy from the branch and folder that contain `index.html`.
5. keep the `cname` file for the custom domain.

the current `cname` value is:

```text
www.kongor.co
```

if you want the apex domain `kongor.co` to be primary instead, update `cname` and dns records according to github pages custom domain guidance.
