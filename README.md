# AIRZEP — Logistics Technology Platform

> **Production-ready Next.js brand-tech website** featuring interactive 3D hero, CMS-driven content, comprehensive design system, and full CI/CD pipeline.

A modern, technology-first website built for AIRZEP — positioning them as a leader in autonomous logistics through distributed robotics, edge AI, and intelligent fleet systems.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

- **Interactive 3D Hero** — Progressive enhancement with react-three-fiber (desktop) and optimized fallback (mobile)
- **Headless CMS** — Sanity integration for Case Studies, Blog Posts, Jobs, and Partners
- **Design System** — Comprehensive design tokens, atomic components, and accessibility primitives
- **Animations** — Framer Motion page transitions with `prefers-reduced-motion` support
- **Performance** — Code-splitting, image optimization, edge caching (targeting >90 Lighthouse score)
- **Responsive** — Mobile-first design with fluid typography and adaptive layouts
- **SEO Optimized** — Structured data, Open Graph tags, sitemap, and semantic HTML
- **Type-Safe** — Full TypeScript coverage with strict mode enabled

## 📦 Tech Stack

| Category          | Technologies                                                         |
| ----------------- | -------------------------------------------------------------------- |
| **Framework**     | Next.js 16 (App Router), React 19, TypeScript 5                      |
| **Styling**       | Tailwind CSS 4, CSS Variables, Design Tokens                         |
| **3D/Animation**  | Three.js, @react-three/fiber, @react-three/drei, Framer Motion, GSAP |
| **CMS**           | Sanity.io (Headless CMS)                                             |
| **UI Components** | Radix UI primitives, HeadlessUI, Lucide Icons                        |
| **Code Quality**  | ESLint, Prettier, Husky, lint-staged                                 |
| **Deployment**    | Vercel (recommended), supports any Node.js host                      |

## 🛠️ Getting Started

### Prerequisites

- **Node.js** 20.16+ (20.19+ recommended for Sanity)
- **npm** 10.8+ or **pnpm** 8+
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/airzep-site.git
   cd airzep-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` and add your Sanity credentials:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the site.

### Sanity Studio Setup

1. **Initialize Sanity project** (if not already done)

   ```bash
   npm install -g @sanity/cli
   sanity init
   ```

2. **Start Sanity Studio**

   ```bash
   npm run sanity
   ```

   Access the CMS at [http://localhost:3333](http://localhost:3333)

3. **Seed content** (optional)
   Create sample content through the Sanity Studio interface:
   - 3 Case Studies
   - 2 Blog Posts
   - 3 Job Postings
   - 6 Partners

## 📁 Project Structure

```
airzepo/
├── public/
│   ├── assets/           # Static assets (images, models)
│   └── favicon.ico
├── sanity/
│   └── schemas/          # Sanity CMS schemas
│       ├── blogPost.ts
│       ├── caseStudy.ts
│       ├── job.ts
│       └── partner.ts
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── (routes)/     # Route groups
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   ├── components/
│   │   ├── ui/           # Atomic UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Dialog.tsx
│   │   ├── Hero3D.tsx    # Progressive 3D hero
│   │   ├── HeroScene.tsx # Three.js scene
│   │   ├── Nav.tsx       # Navigation
│   │   └── Footer.tsx    # Footer
│   ├── lib/
│   │   ├── sanity.ts     # CMS client & fetchers
│   │   └── utils.ts      # Utility functions
│   └── styles/
│       ├── globals.css   # Global styles
│       └── tokens.ts     # Design tokens
├── sanity.config.ts      # Sanity Studio config
├── tailwind.config.ts    # Tailwind configuration
└── next.config.ts        # Next.js configuration
```

## 🎨 Design System

The project includes a comprehensive design system with:

### Design Tokens

- **Colors**: Primary (blue), Accent (purple), Neutral (grays)
- **Typography**: Display font (large headlines), Sans (body), Mono (code)
- **Spacing**: 8px base grid system
- **Shadows**: Elevation system with brand glow effects
- **Breakpoints**: Mobile-first responsive system

### Component Library

- `Button` — Primary, secondary, outline, ghost variants
- `Card` — With hover effects and elevation
- `Dialog` — Accessible modal with Radix UI
- `Nav` — Responsive navigation with mobile menu
- `Footer` — Multi-column footer with social links

Access tokens in code:

```typescript
import { tokens } from '@/styles/tokens'

const primaryColor = tokens.colors.primary[500]
```

## 🎬 Scripts

| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Start development server (http://localhost:3000) |
| `npm run build`        | Build for production                             |
| `npm run start`        | Start production server                          |
| `npm run lint`         | Run ESLint                                       |
| `npm run format`       | Format code with Prettier                        |
| `npm run format:check` | Check code formatting                            |

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/airzep-site)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** — Vercel will automatically deploy on every push to `main`

### Environment Variables for Production

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-read-token
```

### Preview Deployments

Vercel automatically creates preview URLs for pull requests, enabling:

- Team review before merging
- Client previews of new features
- QA testing in production-like environment

## 🧪 Testing

### Run Lighthouse Audit

```bash
npm install -g @lhci/cli
lhci autorun
```

**Performance Targets:**

- Mobile: >90
- Desktop: >95

### Accessibility Testing

The site is built with accessibility in mind:

- Semantic HTML5 elements
- ARIA labels for dynamic content
- Keyboard navigation support
- Focus management
- Color contrast compliance (WCAG AA)
- `prefers-reduced-motion` support

## 🔧 Configuration

### Tailwind CSS

Tailwind is configured to use design tokens from `src/styles/tokens.ts`. Extend in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: tokens.colors.primary,
      accent: tokens.colors.accent,
    }
  }
}
```

### Next.js

Key configurations in `next.config.ts`:

- Image optimization with AVIF/WebP
- Bundle analysis
- TypeScript strict mode
- Experimental features (if any)

## 📝 Content Management

### Adding Content via Sanity

1. **Login to Sanity Studio** at [your-project.sanity.studio](https://your-project.sanity.studio)
2. **Create content**:
   - **Case Studies**: Add client success stories with metrics
   - **Blog Posts**: Publish thought leadership articles
   - **Jobs**: Post open positions
   - **Partners**: Feature partner logos
3. **Publish** — Changes appear immediately (with CDN cache)

### Content Types

#### Case Study

- Client name, industry, challenge, solution, results
- Key metrics (e.g., "40% faster")
- Client testimonial

#### Blog Post

- Rich text content with images
- Author, category, tags
- Estimated read time

#### Job Posting

- Department, location, type (full-time/contract)
- Responsibilities, qualifications, benefits
- Salary range (optional)

## 🚀 Roadmap

- [x] Homepage with 3D hero
- [x] Technology page
- [x] Contact/Demo request form
- [x] Sanity CMS integration
- [ ] Solutions pages (Logistics, Healthcare, Emergency, Enterprise)
- [ ] Products/Platform page
- [ ] Case Studies list & detail pages
- [ ] Blog list & article pages
- [ ] Careers page with job listings
- [ ] API routes for form submission
- [ ] CI/CD with GitHub Actions
- [ ] End-to-end tests with Playwright
- [ ] Lighthouse CI integration
- [ ] Dark mode toggle
- [ ] Localization (i18n) skeleton

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding/updating tests
- `chore:` Maintenance tasks

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) — React framework
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS
- [Sanity](https://www.sanity.io) — Headless CMS
- [Vercel](https://vercel.com) — Deployment platform
- [Three.js](https://threejs.org) — 3D graphics library
- [Framer Motion](https://www.framer.com/motion/) — Animation library

## 📧 Contact

For questions or support:

- Email: hello@airzep.com
- Website: [airzep.com](https://airzep.com)
- GitHub Issues: [github.com/your-org/airzep-site/issues](https://github.com/your-org/airzep-site/issues)

---

**Built with ❤️ by the AIRZEP team**
