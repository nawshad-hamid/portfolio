# Nawshad Hamid — Senior Android Developer Portfolio

An interactive, responsive portfolio crafted specifically for **Nawshad Hamid**, Senior Android Developer and Mobile Application Engineer with 11–12 years of professional experience.

Designed with **Android Material 3 & Jetpack Compose aesthetics**, showcasing native Android mastery, Flutter cross-platform expertise, and 24/7 Android TV deployments.

---

## 📱 Highlights of the Portfolio

- **Interactive Android Device Simulator (`PhonePreview.tsx`)**:
  - Live preview frame simulating modern flagship Android hardware with punch-hole camera, dynamic status bar, and real-time app switching.
  - Interactive previews for all 5 flagship apps:
    - **Muslim Bangla** (Android) — Prayer timings, offline audio player with waveform, WebRTC voice call card.
    - **EasyTrax Standard** (Android) — Live IoT fleet telemetry, interactive GPS vehicle tracking map marker.
    - **Permis Go** (Flutter Android & iOS) — European driving education progress, lesson booking.
    - **Muslim Bangla Signage** (Android TV) — 24/7 mosque digital signage, auto-restart status, OTA sync.
    - **Muslim Bangla Windows** (Desktop) — Flutter on Windows desktop, system tray & window management.
- **Key Engineering Metrics**: Stat counters highlighting 11–12 Years Experience, 1.5 Years Flutter, 4 Platforms, and 5 Production Apps.
- **Detailed About & Principles**: Highlighting architecture analysis, lifecycle management, backward compatibility, and AI-assisted engineering with Claude.
- **Categorized Skills**: Filterable & searchable across Native Android, Architecture, Flutter, Real-Time & Integrations, Quality, and Tools.
- **Confirmed Experience**: 2014 – Present at TopOfStack Software with comprehensive deliverables.
- **Live Store Links**: Direct links to Google Play Store, Microsoft Store, and Apple App Store.
- **One-Click Contact**: Pre-configured email, phone copy, location, LinkedIn, and GitHub links.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS with custom Android Green & Kotlin Violet design tokens
- **Icons**: Lucide React
- **Deployment**: `gh-pages` and GitHub Actions automated CI/CD

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd nawshad-portfolio
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

Visit `http://localhost:5174` in your browser.

### 3. Build for Production

```bash
npm run build
```

This generates an optimized production bundle in the `dist/` directory.

---

## 🌐 Deploy to GitHub Pages

> 📖 **Full step-by-step guide**: See [DEPLOYMENT.md](DEPLOYMENT.md) for initial Git setup, automated GitHub Actions, manual CLI deployment, custom domain setup, and troubleshooting.

### Option A: Using the Deploy Script (One Command)

```bash
npm run deploy
```

What this script (`scripts/deploy.cjs`) does:
1. Builds the project (`npm run build`).
2. Creates `.nojekyll` to prevent GitHub Pages from ignoring special directories.
3. Copies `index.html` to `404.html` for clean client-side routing.
4. Pushes the `dist` directory to your repository's `gh-pages` branch using the `gh-pages` package.

Once deployed, enable GitHub Pages in your GitHub repository:
- Go to **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: **`gh-pages`** / folder: **`/ (root)`**
- Click **Save**.

### Option B: Automatic CI/CD with GitHub Actions

A ready-to-use GitHub Actions workflow is included at `.github/workflows/deploy.yml`.
Whenever you push to the `main` branch, GitHub Actions will automatically test, build, and deploy the portfolio to GitHub Pages!

To enable:
- Go to **Settings** → **Pages**
- Source: **GitHub Actions**
- Push your changes to `main`.

---

## 📁 Project Structure

```
nawshad-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD
├── public/
│   ├── favicon.ico
│   ├── Nawshad_Hamid_CV.pdf    # Downloadable CV
│   └── robots.txt
├── scripts/
│   └── deploy.cjs              # GitHub Pages deployment automation script
├── src/
│   ├── components/
│   │   ├── About.tsx           # 11-12 yrs bio & TopOfStack history
│   │   ├── Contact.tsx         # Direct email, phone, location, LinkedIn & GitHub
│   │   ├── Education.tsx       # BSc in CSE from UODA (2017)
│   │   ├── Experience.tsx      # TopOfStack Software detailed career timeline
│   │   ├── Footer.tsx          # Copyright & quick links
│   │   ├── Hero.tsx            # Name, headline, role line, CTAs
│   │   ├── Highlights.tsx      # 4 core stat cards
│   │   ├── HowIWork.tsx        # 5 confirmed engineering principles
│   │   ├── Navbar.tsx          # Sticky navigation with theme toggle & CV download
│   │   ├── PhonePreview.tsx    # Interactive Android smartphone simulator
│   │   ├── Projects.tsx        # 5 production projects with store links
│   │   ├── ThemeProvider.tsx   # Dark/Light theme provider
│   │   └── ui/                 # Radix UI / Tailwind primitives
│   ├── data/
│   │   └── portfolioData.ts    # Centralized portfolio content
│   ├── pages/
│   │   ├── Index.tsx           # Single-page portfolio assembly
│   │   └── NotFound.tsx        # 404 page
│   ├── App.css
│   ├── App.tsx
│   ├── index.css               # Android green & glassmorphism styles
│   └── main.tsx
├── index.html                  # SEO title & meta description
├── package.json
├── tailwind.config.ts          # Android & Kotlin design tokens
└── vite.config.ts              # Relative base path for GitHub Pages
```

---

## 👤 Author

**Nawshad Hamid**
- Senior Android Developer | Senior Mobile Application Engineer
- Email: [nawshadhamid@gmail.com](mailto:nawshadhamid@gmail.com)
- Phone: +880 1743860793
- Location: Dhaka, Bangladesh
- LinkedIn: [linkedin.com/in/nawshad-hamid-2646031b3](https://www.linkedin.com/in/nawshad-hamid-2646031b3)
- GitHub: [github.com/nawshad-hamid](https://github.com/nawshad-hamid)
