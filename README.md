# FlowFix Plumbing - Premium Multi-Page Web App

Welcome to **FlowFix Plumbing**, a premium, modern, responsive service website built using a Top UI/UX design theme. It incorporates a simulated cooperating Multi-Agent framework with a telemetry dashboard.

---

## 🛠️ Tech Stack & Key Configurations

- **Framework:** React + Vite + TypeScript (fast, type-safe, HMR ready).
- **Styling & Theme:** Tailwind CSS v4. Configured with custom theme tokens (Bright Yellow, Dark Navy Blue, and solid Dark Blue theme cards).
- **Icons:** Lucide React (crisp, modern layout accents).
- **Animations:** Framer Motion (hover transitions, float effects, fluid counters).
- **Theme Toggling:** Supports class-based dark selector mode, synchronized on the `<html>` element.

---

## 📂 Project Structure

```bash
├── public/                 # Static assets
│   └── plumber_hero_image.jpg  # Generated plumber mascot image
├── src/
│   ├── components/         # Modular layout pages
│   │   ├── Navbar.tsx      # Sticky page-state navigation with theme toggle
│   │   ├── Hero.tsx        # Hero section with animated stats
│   │   ├── About.tsx       # Bento About grid and history timeline
│   │   ├── Services.tsx    # 10 service grids with rising water fill levels
│   │   ├── Pricing.tsx     # Package plans & comparison matrix
│   │   ├── BeforeAfter.tsx # Draggable faucet/piping leak comparison slider
│   │   ├── Blog.tsx        # Searchable blog articles
│   │   ├── FAQ.tsx         # Animated drop-down accordion
│   │   ├── Contact.tsx     # Callback form + active dispatcher tracking map
│   │   ├── Footer.tsx      # Sitemap, license info, and custom social SVGs
│   │   ├── ChatWidget.tsx  # Interactive AI chatbot with simulated agent handoffs
│   │   ├── AgentDashboard.tsx  # Telemetry panel & terminal console
│   │   └── Testimonials.tsx # Customer review slider
│   ├── App.tsx             # Main router controller with active scroll tracking
│   ├── main.tsx            # App bundle compiler entry
│   └── index.css           # Global custom classes, scrollbars & keyframes
├── index.html              # Core HTML structure, preloaded with Outfit & Inter fonts
├── tailwind.config.js      # CSS configuration imports
├── vite.config.ts          # Vite compiler config with Tailwind plugin
└── package.json            # Active npm dependencies
```

---

## 🚀 How to Push this Folder to GitHub

This directory `d:\Rohit\Anitgravity2.0` is already pre-configured with a `.gitignore` that correctly excludes the bulky `node_modules` and compiled `dist` directory. You can directly push it to your GitHub repository in seconds using these steps:

### 1. Create a Repository on GitHub
1. Go to [GitHub](https://github.com/) and create a new **empty repository** (do **not** check the boxes to initialize with a README, License, or `.gitignore` since they are already included here!).
2. Copy your repository's HTTPS or SSH URL (e.g., `https://github.com/username/your-repository.git`).

### 2. Push using Git CLI
Open your terminal (PowerShell, Command Prompt, or Git Bash) in this project folder (`d:\Rohit\Anitgravity2.0`) and run:

```bash
# 1. Initialize Git (already done, but safe to run)
git init

# 2. Stage all project files
git add .

# 3. Create your initial commit
git commit -m "feat: Initial commit of FlowFix Plumbing premium site"

# 4. Rename the default branch to main
git branch -M main

# 5. Link your local project to your GitHub repository
git remote add origin <PASTE_YOUR_GITHUB_REPOSITORY_URL_HERE>

# 6. Push the code to GitHub
git push -u origin main
```

---

## 💻 Local Development Setup (For clones)

If someone downloads or clones this project from GitHub, they can run it locally by executing:

```bash
# 1. Install dependencies
npm install

# 2. Start the local Vite server
npm run dev
```
The website will boot up on [http://localhost:5173/](http://localhost:5173/).
