# AIRZEP Deployment Guide

This document provides comprehensive deployment instructions for the AIRZEP website.

## Prerequisites

- Node.js 20.16+ installed
- Sanity account with project created
- Vercel account (for recommended deployment)
- GitHub repository (for CI/CD)

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-read-token

# Optional: Analytics & Monitoring
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
SENTRY_DSN=your-sentry-dsn
```

## Sanity Setup

### 1. Create Sanity Project

```bash
npm install -g @sanity/cli
sanity init
```

Follow the prompts to create a new project. Note the `projectId` for your environment variables.

### 2. Deploy Sanity Studio

```bash
npm run sanity deploy
```

This will deploy your Sanity Studio to `https://your-project.sanity.studio`.

### 3. Seed Initial Content

1. Access your Sanity Studio at the deployed URL
2. Create sample content:
   - **Case Studies**: Add 3 customer success stories
   - **Blog Posts**: Publish 2 articles
   - **Jobs**: List 3 open positions
   - **Partners**: Add 6 partner logos

### 4. Generate API Token

1. Go to https://www.sanity.io/manage
2. Select your project
3. Navigate to **API** → **Tokens**
4. Create a new token with **Viewer** permissions
5. Copy the token to `SANITY_API_TOKEN` in your `.env.local`

## Vercel Deployment (Recommended)

### Option 1: Deploy with Vercel Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/airzep-site&env=NEXT_PUBLIC_SANITY_PROJECT_ID,NEXT_PUBLIC_SANITY_DATASET,SANITY_API_TOKEN)

### Option 2: Manual Deployment

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Link Project**

   ```bash
   vercel link
   ```

3. **Set Environment Variables**

   ```bash
   vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
   vercel env add NEXT_PUBLIC_SANITY_DATASET
   vercel env add SANITY_API_TOKEN
   ```

4. **Deploy**

   ```bash
   # Preview deployment
   vercel

   # Production deployment
   vercel --prod
   ```

### Option 3: GitHub Integration

1. **Connect Repository to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your GitHub repository
   - Click **Import**

2. **Configure Project**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Add Environment Variables**
   In Vercel dashboard → **Settings** → **Environment Variables**, add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`

4. **Deploy**
   - Click **Deploy**
   - Vercel will automatically deploy on every push to `main`

## GitHub Actions CI/CD

The project includes a GitHub Actions workflow for automated testing and deployment.

### Required Secrets

Add these secrets in GitHub: **Settings** → **Secrets and variables** → **Actions**

```
VERCEL_TOKEN              # From vercel.com/account/tokens
VERCEL_ORG_ID             # From .vercel/project.json
VERCEL_PROJECT_ID         # From .vercel/project.json
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
LHCI_GITHUB_APP_TOKEN     # Optional: for Lighthouse CI
```

### Workflow Triggers

- **Push to `main`**: Full build, test, and production deployment
- **Pull Request**: Build, test, and preview deployment
- **Push to `develop`**: Build and test only

### Preview Deployments

Every pull request automatically gets a unique preview URL:

1. Create a PR
2. GitHub Actions builds and deploys preview
3. Comment appears on PR with preview URL
4. Review changes before merging

## Alternative Deployment Options

### Netlify

1. **Connect Repository**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click **Add new site** → **Import an existing project**
   - Select your repository

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: (leave empty)

3. **Add Environment Variables**
   - Same as Vercel configuration above

4. **Deploy**
   - Click **Deploy site**

### Self-Hosted (Docker)

1. **Create Dockerfile** (see below)
2. **Build Image**
   ```bash
   docker build -t airzep-site .
   ```
3. **Run Container**
   ```bash
   docker run -p 3000:3000 \
     -e NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id \
     -e NEXT_PUBLIC_SANITY_DATASET=production \
     -e SANITY_API_TOKEN=your-token \
     airzep-site
   ```

**Dockerfile:**

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Rebuild source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000
ENV PORT=3000

CMD ["npm", "start"]
```

## Post-Deployment Checklist

- [ ] Verify environment variables are set correctly
- [ ] Test all pages load correctly
- [ ] Verify CMS content appears on site
- [ ] Check form submissions work
- [ ] Test 3D hero animation on desktop
- [ ] Verify mobile responsiveness
- [ ] Run Lighthouse audit (target >90 mobile, >95 desktop)
- [ ] Check accessibility with axe DevTools
- [ ] Test dark mode toggle (if implemented)
- [ ] Verify analytics tracking
- [ ] Check Open Graph metadata
- [ ] Test social media sharing

## Performance Optimization

### Image Optimization

Next.js automatically optimizes images. For best performance:

1. Use WebP/AVIF formats when possible
2. Specify width and height for all images
3. Use `next/image` component
4. Enable blur placeholder for LCP images

### Bundle Size

Monitor bundle size:

```bash
npm run build -- --analyze
```

Target: Main page bundle < 1.2MB gzipped

### Caching Strategy

Vercel automatically implements:

- Static generation (SSG) for most pages
- ISR (Incremental Static Regeneration) for CMS pages
- Edge caching for API routes

## Monitoring & Analytics

### Vercel Analytics

Enable in Vercel dashboard:

1. Go to your project
2. Navigate to **Analytics** tab
3. Enable **Web Analytics**

### Sentry Error Tracking

1. Create Sentry project
2. Add `SENTRY_DSN` to environment variables
3. Install Sentry SDK:
   ```bash
   npm install @sentry/nextjs
   ```
4. Initialize Sentry in `instrumentation.ts`

## Troubleshooting

### Build Failures

**Error: Cannot find module '@/...'**

- Verify `tsconfig.json` paths are correct
- Check `next.config.ts` has proper path aliases

**Error: Sanity API Error**

- Verify `SANITY_API_TOKEN` has correct permissions
- Check project ID and dataset name are correct

### Preview Deployment Issues

**Preview URL not working**

- Check GitHub Actions logs
- Verify Vercel secrets are set correctly
- Ensure Vercel project is linked to repository

### Performance Issues

**Slow page load**

- Run Lighthouse audit to identify bottlenecks
- Check bundle size with `npm run build -- --analyze`
- Enable image optimization
- Implement code splitting for heavy components

## Support

For deployment assistance:

- Documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- GitHub Issues: [your-repo/issues](https://github.com/your-org/airzep-site/issues)

---

**Last Updated:** November 14, 2025
