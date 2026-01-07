# Google Tag Manager Implementation Guide

## Overview
This document outlines the implementation of Google Tag Manager (GTM) for the Klinik WeCare website, built with Next.js 14+ using the App Router.

## GTM Container ID
- **Container ID**: `GTM-N9FN4PTS`

## Implementation Details

### File Location
The GTM code is implemented in the root layout file:
- **File**: `klinik-wecare/app/layout.tsx`

### Implementation Structure

#### 1. Header Script (Lines 82-95)
The GTM header script is placed in the `<head>` section using Next.js's `Script` component:

```tsx
<head>
  {/* Google Tag Manager */}
  <Script
    id="google-tag-manager"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-N9FN4PTS');
      `,
    }}
  />
</head>
```

**Key Points**:
- Uses Next.js `Script` component for optimized script loading
- `strategy="afterInteractive"` loads the script after the page becomes interactive
- `id="google-tag-manager"` provides a unique identifier
- `dangerouslySetInnerHTML` is used to inject the inline GTM script

#### 2. Body Noscript (Lines 100-109)
The GTM noscript fallback is placed immediately after the opening `<body>` tag:

```tsx
<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  {/* Google Tag Manager (noscript) */}
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-N9FN4PTS"
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    />
  </noscript>
  {/* End Google Tag Manager (noscript) */}

  {/* Rest of body content */}
</body>
```

**Key Points**:
- Placed immediately after the opening `<body>` tag for proper functionality
- Provides fallback tracking for users with JavaScript disabled
- iframe is hidden with inline styles

## Why This Approach?

### Next.js Script Component
Using Next.js's `Script` component instead of a standard `<script>` tag provides:
- **Performance Optimization**: Next.js optimizes when and how scripts are loaded
- **Loading Strategy Control**: `strategy="afterInteractive"` ensures GTM loads after the page is interactive, improving First Contentful Paint (FCP)
- **Automatic Script Deduplication**: Prevents the same script from loading multiple times

### Loading Strategy Options
- `afterInteractive` (used here): Loads after the page becomes interactive - good balance between performance and quick tracking
- `beforeInteractive`: Would load before page becomes interactive - slower but ensures no events are missed
- `lazyOnload`: Loads during idle time - fastest page load but might miss early events

## Verification Steps

### 1. Check GTM Installation
1. Install the Google Tag Assistant Chrome extension
2. Visit your website
3. Click the Tag Assistant icon
4. Verify that GTM container `GTM-N9FN4PTS` is detected

### 2. Verify in Browser DevTools
1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Filter by "gtm"
4. Refresh the page
5. Confirm `gtm.js?id=GTM-N9FN4PTS` loads successfully

### 3. Check dataLayer
1. Open Chrome DevTools Console
2. Type `dataLayer` and press Enter
3. Verify the array contains GTM initialization events

## Common Tracking Setup

Once GTM is installed, you can configure tags in the GTM dashboard for:
- Google Analytics 4 (GA4)
- Google Ads conversions
- Facebook Pixel
- Custom event tracking
- Form submissions
- Button clicks
- Page views
- Outbound link tracking

## Best Practices

1. **Environment Variables** (Optional Enhancement):
   ```tsx
   const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-N9FN4PTS';
   ```

2. **Development vs Production**:
   Consider disabling GTM in development:
   ```tsx
   {process.env.NODE_ENV === 'production' && (
     <Script id="google-tag-manager" ... />
   )}
   ```

3. **TypeScript Safety**:
   Declare dataLayer type in a `globals.d.ts` file:
   ```typescript
   interface Window {
     dataLayer: any[];
   }
   ```

## Troubleshooting

### GTM Not Loading
- Check browser console for errors
- Verify the GTM container ID is correct
- Ensure no ad blockers are interfering
- Check network tab for failed requests

### Events Not Firing
- Verify triggers are set up correctly in GTM dashboard
- Check dataLayer in console: `console.log(window.dataLayer)`
- Use GTM Preview mode to debug

### Performance Issues
- Consider changing strategy to `lazyOnload` if FCP is affected
- Review tags in GTM dashboard and disable unnecessary ones

## Additional Resources
- [Next.js Script Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)
- [Google Tag Manager Documentation](https://developers.google.com/tag-manager)
- [GTM Container Setup Guide](https://support.google.com/tagmanager/answer/6103696)

## Maintenance Notes
- **Last Updated**: January 2026
- **GTM Container**: GTM-N9FN4PTS
- **Implementation Type**: Next.js App Router with Script component
- **Status**: Active and verified
