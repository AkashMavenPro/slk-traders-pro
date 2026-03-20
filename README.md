# SLK Traders Pro

**Professional industrial trade platform** for S L K Traders, Howrah — built with Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, and Lucide React.

---

## 🚀 Deploy to Vercel in 1 Click (Free)

### Step 1 — Push your code to GitHub

Open a terminal in this project folder and run:

```bash
git add .
git commit -m "SLK Traders Pro - initial build"
git remote add origin https://github.com/YOUR_USERNAME/slk-traders-pro.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username.

---

### Step 2 — Deploy on Vercel (Free Hobby Plan)

1. Go to **[vercel.com](https://vercel.com)** and sign up / log in with GitHub.
2. Click **"Add New Project"**.
3. Find `slk-traders-pro` in your repository list and click **"Import"**.
4. Vercel auto-detects Next.js — **zero configuration required**.
5. Click **"Deploy"**.

Your site will be live at `https://slk-traders-pro.vercel.app` in under 60 seconds.

---

### Step 3 (Optional) — Custom Domain

1. In your Vercel project, go to **Settings → Domains**.
2. Enter your domain (e.g. `slktraders.com`).
3. Follow the DNS instructions — add a CNAME or A record at your registrar.
4. Vercel provisions a **free SSL certificate** automatically.

---

## 🔁 Automatic Deployments

Every `git push` to `main` triggers a new production deployment automatically. No manual steps needed after initial setup.

---

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build

# Run production build locally
npm start

# Lint check
npm run lint
```

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── layout.tsx              ← SEO metadata, fonts, dark mode class
│   ├── page.tsx                ← Homepage (composes all sections)
│   └── globals.css             ← Tailwind v4 + shadcn theme tokens
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          ← Fixed nav, scroll-aware blur, mobile menu
│   │   └── Footer.tsx          ← Links, contact details, coverage states
│   └── sections/
│       ├── HeroSection.tsx     ← Full-screen hero, SVG decoration, stats bar
│       ├── ProductShowcase.tsx ← Bento grid (5 product categories)
│       ├── DirectorsMessage.tsx← Varun Chaudhary profile + company vision
│       └── ContactForm.tsx     ← Dynamic form with loading + success state
├── lib/
│   ├── utils.ts                ← shadcn cn() utility
│   └── animations.ts           ← Shared Framer Motion scroll-reveal variants
└── services/                   ← API integrations (future use)
```

---

## 🎨 Design System

| Token | Hex | Usage |
|---|---|---|
| Safety Orange | `#FF6B00` | Primary CTA, icons, accents |
| Amber | `#FFA500` | Gradient endpoint |
| Dark Charcoal | `#1A1A1A` | Page background |
| Surface Gray | `#2C2C2C` | Cards, elevated surfaces |
| Off-White | `#F5F5F5` | Body text |

---

## 📦 Tech Stack

| Package | Purpose |
|---|---|
| `next` 16 | Framework (App Router) |
| `framer-motion` | Scroll reveal & micro-animations |
| `lucide-react` | Industrial icon set |
| `shadcn/ui` | UI component primitives |
| `tailwindcss` v4 | Utility-first styling |
| `typescript` | Type safety |

---

## 📋 Business Details

| Field | Detail |
|---|---|
| **Company** | S L K Traders |
| **Owner** | Varun Chaudhary |
| **Address** | 4/39 Kumarpara Road, Liluah, Howrah – 711204, WB |
| **Phone** | +91-8047646245 |
| **GST** | 19ADXPC3633P1ZT |
| **IndiaMart** | Rank A Member |
| **Established** | 2012 |
