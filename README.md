# 🏙️ Galaxy Blue Sapphire Studio - Luxury Cinematic Web Experience

A high-end, immersive, and emotionally resonant landing page for a luxury studio apartment located at Galaxy Blue Sapphire Plaza, Greater Noida West. 

This project goes beyond a standard real estate website. It offers a **cinematic storytelling experience** featuring hyper-realistic day and night visuals, buttery smooth scrolling, glassmorphism UI, and bespoke micro-animations to convey a premium, Apple-level aesthetic.

---

## ✨ Key Features

- **☀️/🌙 Day & Night Mode:** Dynamically toggles both the UI theme (Light/Dark) and the rendered architectural/interior imagery for a fully immersive "Day vs. Night" visual experience.
- **🎥 Cinematic Animations:** Uses **Framer Motion** for staggered fade-ups, parallax scrolling, scroll-triggered zooming, and fluid transitions.
- **🧈 Smooth Scrolling:** Powered by **Lenis** to provide a high-end, momentum-based scrolling experience, overriding the browser's default harsh scroll.
- **💎 Glassmorphism UI:** Custom Tailwind v4 utility classes combined with backdrop blurs and subtle borders for a modern, sleek interface.
- **📸 Hyper-Realistic Imagery:** Features AI-generated ultra-high-resolution, cinematic architectural and interior photography designed to look like a Sony A7S III shoot.
- **⚡ Lightning Fast:** Built with Vite for rapid development and optimized production builds.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (using `@tailwindcss/vite`)
- **Animation Engine:** Framer Motion
- **Smooth Scroll:** @studio-freight/lenis
- **Icons:** Lucide React
- **Utility:** `clsx` & `tailwind-merge` (for dynamic class name composition)

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository (or navigate to the directory)
```bash
cd /Users/nitinkumar/Developer/Web_Project/studio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```text
studio/
├── public/                # Static assets (Cinematic Day/Night Images)
├── src/
│   ├── components/        # Reusable React components
│   │   ├── AmenitiesSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── GallerySection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── InteractiveShowcase.jsx
│   │   └── StorySection.jsx
│   ├── ThemeContext.jsx   # Global Context for Day/Night Mode toggling
│   ├── App.jsx            # Main Application logic & Lenis scroll setup
│   ├── main.jsx           # React DOM root & ThemeProvider wrapper
│   └── index.css          # Global CSS, Tailwind v4 theme variables, utility classes
├── index.html             # Entry HTML (Contains custom font imports)
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration with Tailwind plugin
```

---

## 🎨 Design System

- **Typography:** 
  - **Headings:** `Clash Display` (Premium, modern, editorial feel)
  - **Body:** `Inter` (Clean, highly legible sans-serif)
- **Color Palette (Dark Mode):**
  - Background: Matte Black (`#0D0D0D`)
  - Accents: Warm Beige (`#D6C2A8`)
  - Text: Soft White (`#F5F5F5`)
- **Color Palette (Light Mode):**
  - Background: Soft White (`#F5F5F5`)
  - Accents: Warm Beige (`#D6C2A8`)
  - Text: Matte Black (`#0D0D0D`)

---

*Built with passion and precision for a world-class luxury real estate experience.*
