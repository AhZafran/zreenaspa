# Google Tag Manager Setup Guide for Next.js App Router

## Overview
This document provides a complete guide for implementing Google Tag Manager (GTM) in a Next.js 15+ application using the App Router. This solution has been tested and verified to work without syntax errors.

## Current Implementation

### GTM Container ID
- **Container ID**: `GTM-5BLGJH4K`
- **Environment Variable**: `NEXT_PUBLIC_GTM_ID`

### File Location
- **File**: `app/layout.tsx`
- **Type**: Root Layout (Server Component)

## Working Implementation

### Step 1: Environment Variable Setup

Create or update `.env.local`:

```env
# Google Tag Manager Container ID
NEXT_PUBLIC_GTM_ID=GTM-5BLGJH4K
```

### Step 2: Layout.tsx Implementation

Add the following to your `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Your other head elements */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) - MUST be first in body */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {children}

        {/* Google Tag Manager - Initialize dataLayer */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
            `}
          </Script>
        )}

        {/* Google Tag Manager - Load GTM script */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script
            src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
```

## Key Implementation Details

### 1. Split Approach (CRITICAL)
The implementation is **split into two separate Script components**:

- **Script 1**: Initializes the `dataLayer` and pushes the `gtm.start` event
- **Script 2**: Loads the GTM script from Google's CDN using the `src` attribute

**Why?** The traditional GTM snippet dynamically creates script elements using `document.createElement('script')`, which conflicts with Next.js's rendering system and causes "SyntaxError: Unexpected EOF" errors.

### 2. Script Strategy
- **Strategy**: `afterInteractive`
- **Why?** Ensures GTM loads after the page becomes interactive, preventing blocking of initial page render

### 3. Placement
- **Noscript iframe**: First element in `<body>` (for users with JavaScript disabled)
- **GTM scripts**: After `{children}` (loads after page content)

### 4. Environment Variable
- **Prefix**: `NEXT_PUBLIC_` (required for client-side access)
- **Conditional rendering**: Wrapped in `{process.env.NEXT_PUBLIC_GTM_ID && ...}` to prevent errors if not set

## Common Issues and Solutions

### Issue 1: "SyntaxError: Unexpected EOF"

**Cause**: Using the traditional GTM snippet that dynamically creates script elements

**❌ WRONG - DO NOT USE:**
```tsx
<Script id="gtm" strategy="afterInteractive">
  {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
</Script>
```

**✅ CORRECT - USE THIS:**
```tsx
{/* Initialize dataLayer first */}
<Script id="gtm-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
  `}
</Script>

{/* Load GTM script via src */}
<Script
  src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
  strategy="afterInteractive"
/>
```

### Issue 2: Script Component in `<head>`

**❌ WRONG:**
```tsx
<head>
  <Script id="gtm">...</Script>
</head>
```

**✅ CORRECT:**
```tsx
<body>
  {children}
  <Script id="gtm">...</Script>
</body>
```

**Why?** Next.js Script component doesn't work properly when placed in `<head>`. Always place it in `<body>`.

### Issue 3: Using `dangerouslySetInnerHTML` with Script

**❌ WRONG:**
```tsx
<Script
  id="gtm"
  dangerouslySetInnerHTML={{
    __html: `...script content...`
  }}
/>
```

**✅ CORRECT:**
```tsx
<Script id="gtm">
  {`...script content...`}
</Script>
```

**Why?** Next.js Script component expects children, not `dangerouslySetInnerHTML`.

### Issue 4: Self-Closing Script Tag

**❌ WRONG:**
```tsx
<script dangerouslySetInnerHTML={{ __html: `...` }} />
```

**✅ CORRECT:**
```tsx
<script dangerouslySetInnerHTML={{ __html: `...` }}></script>
```

**Why?** HTML script tags cannot be self-closing. They must have a closing tag.

## Deployment

### Vercel Deployment

1. **Set Environment Variable in Vercel:**
   ```bash
   vercel env add NEXT_PUBLIC_GTM_ID production
   # Enter: GTM-5BLGJH4K when prompted
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Verify:**
   - Visit your production URL
   - Open DevTools Console
   - No errors should appear
   - Check Network tab for `gtm.js` request

## Verification Steps

### 1. Local Development
```bash
npm run dev
```

Visit http://localhost:3000 and check:
- No console errors
- `window.dataLayer` exists in DevTools Console
- GTM script loaded in Network tab

### 2. Google Tag Assistant

1. Install [Google Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visit your website
3. Click Tag Assistant icon
4. Verify GTM container is detected
5. Container ID should show: `GTM-5BLGJH4K`

### 3. GTM Preview Mode

1. Log into [Google Tag Manager](https://tagmanager.google.com/)
2. Open your container (GTM-5BLGJH4K)
3. Click "Preview" button
4. Enter your website URL
5. Preview debugger should connect successfully

### 4. Browser DevTools Verification

Open DevTools Console and run:

```javascript
// Check dataLayer exists
console.log(window.dataLayer);

// Should output array with gtm.start event
// Example: [{gtm.start: 1234567890, event: 'gtm.js'}]
```

Check Network tab:
- Filter by "gtm"
- Should see: `gtm.js?id=GTM-5BLGJH4K` with status 200

## Testing Checklist

- [ ] Environment variable `NEXT_PUBLIC_GTM_ID` set in `.env.local`
- [ ] Environment variable set in Vercel production environment
- [ ] No console errors on page load
- [ ] `window.dataLayer` exists and contains data
- [ ] GTM script loads successfully (check Network tab)
- [ ] Google Tag Assistant detects GTM container
- [ ] GTM Preview Mode connects successfully
- [ ] Tags fire correctly in GTM Preview Mode
- [ ] No "SyntaxError: Unexpected EOF" errors

## Updating GTM Container ID

If you need to change the GTM container:

1. **Update `.env.local`:**
   ```env
   NEXT_PUBLIC_GTM_ID=GTM-NEWID123
   ```

2. **Update Vercel environment variable:**
   ```bash
   vercel env rm NEXT_PUBLIC_GTM_ID production
   vercel env add NEXT_PUBLIC_GTM_ID production
   # Enter new GTM ID when prompted
   ```

3. **Restart dev server:**
   ```bash
   # Kill current server (Ctrl+C)
   npm run dev
   ```

4. **Deploy to production:**
   ```bash
   git add .env.local
   git commit -m "Update GTM container ID"
   git push
   vercel --prod
   ```

## Best Practices

### 1. Environment-Specific GTM Containers

Consider using different GTM containers for different environments:

```env
# .env.local (development)
NEXT_PUBLIC_GTM_ID=GTM-DEV123

# .env.production (production)
NEXT_PUBLIC_GTM_ID=GTM-PROD456
```

### 2. Conditional Loading

Disable GTM in development if needed:

```tsx
{process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GTM_ID && (
  <Script src={`https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID}`} />
)}
```

### 3. Custom Events

Push custom events to dataLayer:

```tsx
// In any component
'use client';

const handleClick = () => {
  window.dataLayer?.push({
    event: 'custom_event',
    eventCategory: 'Button',
    eventAction: 'Click',
    eventLabel: 'CTA Button'
  });
};
```

### 4. E-commerce Tracking

```tsx
window.dataLayer?.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'T12345',
    value: 99.99,
    currency: 'MYR',
    items: [{
      item_name: 'Product Name',
      item_id: 'SKU123',
      price: 99.99,
      quantity: 1
    }]
  }
});
```

## Troubleshooting

### GTM not loading

1. Check environment variable is set:
   ```bash
   echo $NEXT_PUBLIC_GTM_ID
   ```

2. Check browser console for errors

3. Verify GTM container ID is correct in Google Tag Manager

4. Clear browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

### Tags not firing

1. Use GTM Preview Mode to debug
2. Check trigger conditions
3. Verify dataLayer events are being pushed
4. Check tag configuration in GTM dashboard

### Preview Mode not connecting

1. Ensure no ad blockers are interfering
2. Check browser console for errors
3. Verify website URL matches published URL
4. Try incognito/private browsing mode

## Additional Resources

- [Next.js Script Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)
- [Google Tag Manager Documentation](https://developers.google.com/tag-manager)
- [GTM dataLayer Documentation](https://developers.google.com/tag-platform/tag-manager/web/datalayer)
- [Google Tag Assistant](https://support.google.com/tagmanager/answer/6107056)

## Support

If you encounter issues:

1. Check this documentation first
2. Verify all steps in the Testing Checklist
3. Check browser console for specific error messages
4. Refer to the "Common Issues and Solutions" section

## Version History

- **v1.0** (January 2026) - Initial working implementation with split Script approach
  - Container: GTM-5BLGJH4K
  - Next.js 16.1.1
  - Turbopack build
  - Resolved all SyntaxError issues

---

**Last Updated**: January 7, 2026
**Next.js Version**: 16.1.1
**GTM Container**: GTM-5BLGJH4K
**Status**: ✅ Verified Working
