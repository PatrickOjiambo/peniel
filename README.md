# The Peniel Academy Utawala Website

A stunning, modern, and fully responsive website for The Peniel Academy Utawala - a Christian-based school offering Competency-Based Education (CBE) from Playgroup to Grade 9.

## 🎯 Project Overview

This website showcases:
- **Hero Section**: Full-screen banner with animated text and strong CTAs
- **About Us**: Our Story, Mission, Vision, and Statement of Faith
- **Programs**: CBE curriculum from Early Years to Junior School
- **Core Competencies & Values**: Interactive grids showcasing 7 competencies and 7 values
- **Gallery**: Dynamic image gallery for school photos
- **Contact & Enrollment**: Contact information and enrollment CTAs

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
cd /home/patrick-ojiambo/Documents/work/peniel
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📸 Adding School Images

Place your school images in the `public/assets/` folder with these names:

- `hero-banner.jpg` - Main hero section image (students, band, or graduation)
- `band.jpg` - School band performance
- `graduation.jpg` - Graduation ceremony
- `director.jpg` - School director
- `teachers.jpg` - Teachers
- `students-activities.jpg` - Students doing various activities

You can add multiple images for each category (e.g., `students-activities-1.jpg`, `students-activities-2.jpg`).

## 🎨 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern gradient backgrounds and animations
- ✅ Interactive hover effects
- ✅ Smooth scrolling between sections
- ✅ Image carousel/gallery with navigation
- ✅ SEO optimized with proper meta tags
- ✅ Accessibility features
- ✅ Fast loading and performance optimized

## 🎨 Color Palette

- **Primary**: Blue (#2563eb), Purple (#9333ea), Pink (#ec4899)
- **Accent**: Yellow (#fbbf24), Orange (#f97316)
- **Background**: White, light blue/purple tints
- **Text**: Gray scale for readability

## 📝 Content Highlights

All content is based on CBE (Competency-Based Education):
- **Early Years**: PG to PP2 (Ages 3-6)
- **Middle School**: Grade 1-6 (Ages 6-12)
- **Junior School**: Grade 7-9 (Ages 12-14)

**7 Core Competencies**:
1. Communication & Collaboration
2. Critical Thinking
3. Imagination & Creativity
4. Citizenship
5. Learning to Learn
6. Self-Efficacy
7. Digital Literacy

**7 Core Values**:
1. Love
2. Responsibility
3. Respect
4. Unity
5. Peace
6. Patriotism
7. Integrity

## 📞 Contact Information

- **Phone**: 0726 682 492
- **Email**: info@tpau.sc.ke
- **Location**: Utawala, Off Bypass, Benedicta, Nairobi, Kenya

## 🛠️ Development Commands

```bash
# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## 📦 Project Structure

```
peniel/
├── app/
│   ├── globals.css       # Global styles & animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main homepage with all sections
├── public/
│   └── assets/           # School images folder
│       └── README.md     # Image placement instructions
├── package.json
└── README.md
```

## 🚀 Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended): [vercel.com](https://vercel.com)
- **Netlify**: [netlify.com](https://netlify.com)
- **Any Node.js hosting platform**

### Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

## 📄 License

© 2025 The Peniel Academy Utawala. All rights reserved.

## 🙏 Acknowledgments

Built with ❤️ for The Peniel Academy Utawala community.

---

**"I can do everything through Christ who strengthens me." — Philippians 4:13**
