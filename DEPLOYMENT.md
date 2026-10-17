# GitHub Pages Deployment Guide

This guide provides step-by-step instructions to deploy the **Nawshad Hamid Portfolio** to **GitHub Pages**.

All required configuration files (dynamic base path, `.nojekyll`, `404.html` SPA routing, and GitHub Actions CI/CD) are already included in this repository.

---

## Table of Contents

1. [First-Time Git & GitHub Setup](#1-first-time-git--github-setup)
2. [Method 1: Automatic Deployment via GitHub Actions (Recommended)](#2-method-1-automatic-deployment-via-github-actions-recommended)
3. [Method 2: Command-Line Deployment via `gh-pages`](#3-method-2-command-line-deployment-via-gh-pages)
4. [How Client-Side Routing & Assets Work](#4-how-client-side-routing--assets-work)
5. [Custom Domain Setup (Optional)](#5-custom-domain-setup-optional)
6. [Troubleshooting & FAQs](#6-troubleshooting--faqs)

---

## 1. First-Time Git & GitHub Setup

If you have not yet created a GitHub repository for this project:

### Step 1: Create a Repository on GitHub
1. Navigate to [github.com/new](https://github.com/new).
2. Enter a repository name:
   - For a project site: `nawshad-portfolio` (URL: `https://<username>.github.io/nawshad-portfolio/`)
   - For a user site: `<username>.github.io` (URL: `https://<username>.github.io/`)
3. Choose **Public**.
4. Leave **"Initialize this repository with a README" unchecked**.
5. Click **Create repository**.

### Step 2: Push Your Local Code
Open your terminal in the root of this project and run:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage all project files
git add .

# 3. Commit the project
git commit -m "feat: portfolio release ready for deployment"

# 4. Set the default branch to main
git branch -M main

# 5. Link your local repo to GitHub (replace with your GitHub username and repo)
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git

# 6. Push code to GitHub
git push -u origin main
```

---

## 2. Method 1: Automatic Deployment via GitHub Actions (Recommended)

This repository includes a preconfigured workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Every time you push changes to `main`, GitHub will automatically build and publish your site.

### Step-by-Step Activation:

1. Open your repository on **GitHub**.
2. Click on the **Settings** tab (near the top right).
3. In the left-hand sidebar, select **Pages** (under *Code and automation*).
4. Under **Build and deployment**:
   - Find the **Source** dropdown.
   - Switch from `Deploy from a branch` to **`GitHub Actions`**.
5. Go to the **Actions** tab in your repository to watch the deployment progress.
6. Once finished (~1 minute), your site URL will be displayed at the top of **Settings → Pages**:
   ```
   https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/
   ```

> **Note:** To trigger a new deployment anytime in the future, simply commit and push your changes to `main`:
> ```bash
> git add .
> git commit -m "Update portfolio content"
> git push origin main
> ```

---

## 3. Method 2: Command-Line Deployment via `gh-pages`

If you prefer building and deploying directly from your computer without GitHub Actions:

### Step-by-Step:

1. Ensure your repository has its `origin` remote configured.
2. In your terminal, run:
   ```bash
   npm run deploy:gh
   ```
   This command executes [`scripts/deploy.cjs`](scripts/deploy.cjs), which:
   - Runs `npm run build` to generate the production bundle in `dist/`.
   - Creates `dist/.nojekyll` to prevent GitHub from ignoring files starting with underscores.
   - Creates `dist/404.html` so direct URLs and page refreshes work smoothly.
   - Pushes the `dist` directory to the `gh-pages` branch on GitHub.

3. On GitHub:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment > Source**, ensure **"Deploy from a branch"** is selected.
   - Select Branch: **`gh-pages`** and Folder: **`/ (root)`**.
   - Click **Save**.

---

## 4. How Client-Side Routing & Assets Work

Single-page applications (SPAs) on GitHub Pages can face issues with broken asset paths or 404s when refreshing subpages. This repository addresses both automatically:

1. **Dynamic Base Path (`vite.config.ts`)**:
   `vite.config.ts` uses `process.env.VITE_BASE_PATH || "./"`. In GitHub Actions, `actions/configure-pages` automatically injects the repo path, and local builds fallback safely to relative paths.
2. **SPA 404 Routing (`404.html`)**:
   During build, `index.html` is duplicated as `404.html`. If a user refreshes or bookmarks a nested URL, GitHub Pages serves `404.html` which loads React Router without showing a blank page.
3. **NoJekyll (`public/.nojekyll`)**:
   Prevents Jekyll from processing and ignoring Vite assets.

---

## 5. Custom Domain Setup (Optional)

If you own a custom domain (e.g., `nawshad.dev` or `portfolio.yourname.com`):

1. Go to your GitHub repository → **Settings** → **Pages**.
2. Under **Custom domain**, enter your domain name (e.g. `nawshad.dev`) and click **Save**.
3. In your DNS provider (Cloudflare, Namecheap, GoDaddy, etc.):
   - **Apex Domain (`example.com`)**: Add `A` records pointing to GitHub's IPs:
     ```text
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **Subdomain (`portfolio.example.com`)**: Add a `CNAME` record pointing to `<YOUR_GITHUB_USERNAME>.github.io`.
4. Check **Enforce HTTPS** in GitHub Pages settings once DNS propagation is verified.

---

## 6. Troubleshooting & FAQs

### Q: Why do I see a blank page or 404 after deploying?
- Check **Settings → Pages** to confirm the source is set correctly:
  - For Method 1: Source must be **GitHub Actions**.
  - For Method 2: Source must be **Deploy from a branch** (`gh-pages` branch, `/ (root)` folder).
- Allow 1–2 minutes after the workflow finishes for GitHub's CDN caches to refresh.

### Q: GitHub Actions fails with "Permission denied"?
Ensure GitHub Actions has write access for Pages:
1. Go to **Settings** → **Actions** → **General**.
2. Scroll down to **Workflow permissions**.
3. Select **"Read and write permissions"** and click **Save**.

### Q: How do I test the production build locally before deploying?
Run:
```bash
npm run build
npm run preview
```
Visit the preview URL (typically `http://localhost:4173`) to verify your production build locally.
