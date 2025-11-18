# SEO Implementation Guide

## Implemented SEO Features

### 1. **Metadata & Meta Tags** ✅

- Comprehensive metadata in all layouts (`layout.tsx` files)
- Open Graph tags for social media sharing
- Twitter Card tags
- Canonical URLs
- Keywords optimization
- Author and publisher information

### 2. **Structured Data (JSON-LD)** ✅

Located in `/src/lib/structured-data.ts` and `/src/components/StructuredData.tsx`

- Organization schema
- Website schema
- Service schema
- Breadcrumb schema (ready to use)

### 3. **Sitemap** ✅

Auto-generated at `/sitemap.xml`

- File: `/src/app/sitemap.ts`
- Automatically includes all static routes
- Ready to add dynamic routes (case studies, blog posts, etc.)

### 4. **Robots.txt** ✅

Located at `/public/robots.txt`

- Allows all search engine crawlers
- Links to sitemap

### 5. **Web App Manifest** ✅

Auto-generated at `/manifest.json`

- File: `/src/app/manifest.ts`
- PWA support
- App icons configuration

### 6. **Open Graph Image** ✅

Auto-generated dynamic OG image at `/opengraph-image`

- File: `/src/app/opengraph-image.tsx`
- Customizable for each page

### 7. **Google Analytics** ✅

- Component: `/src/components/Analytics.tsx`
- Environment variable: `NEXT_PUBLIC_GA_ID`

## Setup Instructions

### 1. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://airzep.com`
3. Verify ownership using one of these methods:
   - DNS verification (recommended)
   - HTML file upload
   - HTML tag (add to `/src/app/layout.tsx`)
4. Submit your sitemap: `https://airzep.com/sitemap.xml`

### 2. Google Analytics

1. Create a GA4 property at [Google Analytics](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `.env.local`:
   \`\`\`
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   \`\`\`

### 3. Verification Codes

Update `/src/app/layout.tsx` with your verification codes:
\`\`\`typescript
verification: {
google: 'your-google-verification-code',
// yandex: 'your-yandex-verification-code',
// bing: 'your-bing-verification-code',
},
\`\`\`

### 4. Social Media

Update social media links in `/src/lib/structured-data.ts`:
\`\`\`typescript
sameAs: [
'https://twitter.com/airzep',
'https://linkedin.com/company/airzep',
'https://github.com/airzep',
],
\`\`\`

### 5. Required Assets

Create these image files in `/public/`:

- `favicon.ico` (32x32)
- `apple-touch-icon.png` (180x180)
- `icon-192x192.png` (192x192)
- `icon-512x512.png` (512x512)
- `logo.png` (for schema.org)
- `og-image.jpg` (1200x630) - fallback image
- `og-case-studies.jpg` (1200x630)
- `og-contact.jpg` (1200x630)
- `og-technology.jpg` (1200x630)

## Page-Specific Metadata

### Homepage (`/`)

- Title: "AIRZEP — Logistics Technology Reimagined"
- Focus: Brand awareness, technology overview

### Case Studies (`/case-studies`)

- Title: "Case Studies | AIRZEP"
- Focus: Success stories, ROI, customer testimonials

### Contact (`/contact`)

- Title: "Contact Us | AIRZEP"
- Focus: Lead generation, demo requests

### Technology (`/technology`)

- Title: "Technology | AIRZEP"
- Focus: Technical capabilities, innovation

## SEO Best Practices Implemented

### Technical SEO

- ✅ Fast page loads (Next.js optimization)
- ✅ Mobile-responsive design
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images (add to your images)
- ✅ Clean URL structure
- ✅ HTTPS (ensure in production)

### On-Page SEO

- ✅ Unique titles and descriptions
- ✅ Keyword optimization
- ✅ Internal linking structure
- ✅ Content hierarchy
- ✅ Schema markup

### Content SEO

- Clear value proposition
- Industry-specific keywords
- Measurable results (40% faster, 35% cost reduction)
- Call-to-action buttons

## Monitoring & Maintenance

### Weekly

- Monitor Google Search Console for errors
- Check page indexing status
- Review search queries and impressions

### Monthly

- Analyze Google Analytics traffic
- Review and update keywords
- Update sitemap if new pages added
- Check broken links

### Quarterly

- Update content for freshness
- Refresh case studies
- Review and optimize meta descriptions
- Update structured data if services change

## Additional Recommendations

### 1. Content Marketing

- Start a technical blog (add `/blog` route)
- Publish case studies regularly
- Create technical white papers

### 2. Link Building

- Partner listings and directories
- Industry publications
- Guest posting
- Press releases

### 3. Local SEO (if applicable)

- Google Business Profile
- Local directories
- Location pages

### 4. Performance

- Optimize images (use Next.js Image component)
- Enable caching headers
- Use CDN for assets
- Monitor Core Web Vitals

### 5. Security

- HTTPS certificate
- Security headers
- Regular updates

## Testing

### SEO Testing Tools

1. **Google Search Console**: Monitor indexing and performance
2. **Google PageSpeed Insights**: Check performance
3. **Lighthouse**: Run audits (built into Chrome DevTools)
4. **Schema.org Validator**: Test structured data
5. **Open Graph Debugger**: Test social media cards
6. **Mobile-Friendly Test**: Check mobile compatibility

### Test Commands

\`\`\`bash

# Build and check for errors

npm run build

# Test locally

npm run dev

# Check sitemap

curl http://localhost:3000/sitemap.xml

# Check robots.txt

curl http://localhost:3000/robots.txt

# Check manifest

curl http://localhost:3000/manifest.json
\`\`\`

## Next Steps

1. [ ] Create all required image assets
2. [ ] Set up Google Search Console
3. [ ] Set up Google Analytics
4. [ ] Add verification codes
5. [ ] Update social media URLs
6. [ ] Submit sitemap to search engines
7. [ ] Test all meta tags with debugging tools
8. [ ] Create content strategy
9. [ ] Monitor and optimize based on data

## Support

For questions or issues:

- Review Next.js SEO documentation
- Check Google Search Central guidelines
- Consult schema.org documentation
