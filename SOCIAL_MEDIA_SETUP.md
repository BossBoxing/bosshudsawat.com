# Social Media Sharing Setup

This document explains how the social media sharing (Open Graph) is configured for your portfolio website.

## What's Been Set Up

### 1. Open Graph Meta Tags
- **Title**: "Boss Hudsawat - Software Engineer & Tech Speaker"
- **Description**: Professional description of your portfolio
- **Image**: Generated 1200x630 image optimized for social sharing
- **URL**: https://bosshudsawat.com

### 2. Twitter Card Meta Tags
- **Card Type**: Large image card
- **Title**: Same as Open Graph
- **Description**: Optimized for Twitter
- **Image**: Twitter-specific generated image

### 3. Generated Images
- `/opengraph-image` - Main social sharing image
- `/twitter-image` - Twitter-specific image
- Both are 1200x630 pixels (optimal for social media)

### 4. Structured Data (JSON-LD)
- Person schema for better search engine understanding
- Includes your professional information and social links

## How to Test

### 1. Facebook Sharing Debugger
1. Go to https://developers.facebook.com/tools/debug/
2. Enter your website URL: `https://bosshudsawat.com`
3. Click "Debug" to see how it will appear on Facebook
4. Use "Scrape Again" to refresh the cache

### 2. Twitter Card Validator
1. Go to https://cards-dev.twitter.com/validator
2. Enter your website URL
3. See how it will appear on Twitter

### 3. LinkedIn Post Inspector
1. Go to https://www.linkedin.com/post-inspector/
2. Enter your website URL
3. See how it will appear on LinkedIn

### 4. WhatsApp/Telegram
- Share your website link in these apps
- The preview should show your custom image and description

## Customization Options

### 1. Update the Generated Images
Edit these files to change the appearance:
- `src/app/opengraph-image.tsx` - Main social sharing image
- `src/app/twitter-image.tsx` - Twitter-specific image

### 2. Update Meta Information
Edit `src/app/layout.tsx` to change:
- Title and description
- Keywords
- Social media handles
- Website URL

### 3. Add Your Social Links
Update the structured data in `src/app/layout.tsx`:
```json
"sameAs": [
  "https://twitter.com/your-handle",
  "https://linkedin.com/in/your-profile",
  "https://github.com/your-username"
]
```

### 4. Google Search Console
1. Add your Google verification code in `src/app/layout.tsx`
2. Replace `"your-google-verification-code"` with your actual code

## Important Notes

1. **Image Dimensions**: 1200x630 pixels is the optimal size for most social platforms
2. **Cache**: Social platforms cache previews, so changes may take time to appear
3. **Testing**: Always test on the live website, not localhost
4. **Performance**: Generated images are created on-demand and cached

## Troubleshooting

### If images don't appear:
1. Check that the image files exist
2. Verify the URLs are correct
3. Clear social media platform caches
4. Check browser console for errors

### If meta tags aren't working:
1. Verify the website is accessible
2. Check that Next.js is generating the meta tags correctly
3. Use browser dev tools to inspect the `<head>` section

## Next Steps

1. Deploy your website
2. Test with the social media debuggers
3. Share your link on various platforms
4. Monitor how it appears and adjust as needed 