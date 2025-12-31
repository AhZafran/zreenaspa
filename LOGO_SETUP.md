# How to Add Your Custom Logo

## Quick Setup Guide

### Step 1: Prepare Your Logo
1. Your logo should be in **PNG format** with a **transparent background**
2. Recommended size: **512x512px** or larger (will auto-scale)
3. Make sure it's high quality for both desktop and mobile displays

### Step 2: Add Logo to Project
1. Save your logo file as `logo.png`
2. Place it in the `public` folder:
   ```
   ZreenasSpa/
   └── public/
       └── logo.png  <-- Put your logo here
   ```

### Step 3: Update the Header Component
Open `components/Header.tsx` and find the logo section (around line 76-89):

**Current code (Icon + Text):**
```tsx
{/* Option 1: Image Logo (uncomment and add your logo to public/logo.png) */}
{/* <img
  src="/logo.png"
  alt="Zreebas Spa Logo"
  className="h-10 md:h-12 w-auto"
/> */}

{/* Option 2: Icon + Text Logo (current - comment out when using image) */}
<>
  <Sparkles className="w-7 h-7 text-primary" />
  <span className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">
    Zreebas <span className="text-primary font-light">Spa</span>
  </span>
</>
```

**Change to (Image Logo):**
```tsx
{/* Option 1: Image Logo (uncomment and add your logo to public/logo.png) */}
<img
  src="/logo.png"
  alt="Zreebas Spa Logo"
  className="h-10 md:h-12 w-auto"
/>

{/* Option 2: Icon + Text Logo (current - comment out when using image) */}
{/* <>
  <Sparkles className="w-7 h-7 text-primary" />
  <span className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">
    Zreebas <span className="text-primary font-light">Spa</span>
  </span>
</> */}
```

### Step 4: Update the Footer Component
Open `components/Footer.tsx` and find the logo section (around line 26-35):

Apply the same changes as the header - uncomment the image logo and comment out the icon + text.

### Step 5: Adjust Logo Size (Optional)
You can adjust the logo height by changing the className:

```tsx
{/* Small logo */}
className="h-8 md:h-10 w-auto"

{/* Medium logo (default) */}
className="h-10 md:h-12 w-auto"

{/* Large logo */}
className="h-12 md:h-16 w-auto"
```

### Alternative: Use Next.js Image Component (Recommended for Performance)
For better optimization, you can use Next.js Image component:

1. Import the Image component at the top of the file:
```tsx
import Image from "next/image";
```

2. Replace the img tag with:
```tsx
<Image
  src="/logo.png"
  alt="Zreebas Spa Logo"
  width={120}
  height={48}
  className="h-10 md:h-12 w-auto"
  priority
/>
```

## Different Logo Formats

### PNG with Transparency (Recommended)
```
public/logo.png
```

### SVG (For scalable logos)
```
public/logo.svg
```
Update src to:
```tsx
src="/logo.svg"
```

### Multiple Versions
If you have different logos for light/dark backgrounds:
```
public/logo-light.png  (for dark backgrounds)
public/logo-dark.png   (for light backgrounds)
```

Then use the light version:
```tsx
src="/logo-light.png"
```

## Quick Test
After adding your logo:
1. Save all files
2. The dev server will automatically reload
3. Check http://localhost:3001
4. Your logo should appear in the header and footer

## Troubleshooting

**Logo not showing?**
- Make sure the file is in the `public` folder
- Check the file name matches exactly (case-sensitive)
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Logo too big/small?**
- Adjust the `h-10 md:h-12` values
- Use `h-8` for smaller, `h-16` for larger

**Logo not aligned?**
- Add `object-contain` to className for better positioning
- Adjust parent container with `items-center`

## Example
Your final logo code should look like:

```tsx
<Link
  href="#home"
  onClick={() => scrollToSection("home")}
  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
>
  <img
    src="/logo.png"
    alt="Zreebas Spa Logo"
    className="h-10 md:h-12 w-auto object-contain"
  />
</Link>
```

That's it! Your custom logo is now ready. ✨
