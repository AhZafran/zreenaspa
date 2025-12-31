# Product Requirements Document (PRD)
## Zreebas Massage & Nails Spa Website

---

## 1. Project Overview

### 1.1 Product Name
Zreebas Massage & Nails Spa - Official Website

### 1.2 Purpose
To create a modern, user-friendly single-page application (SPA) that showcases Zreebas Massage & Nails Spa's services, builds trust through testimonials, and facilitates easy customer contact via WhatsApp integration.

### 1.3 Target Audience
- Primary: Women seeking spa, massage, and beauty services
- Age Range: 25-55 years old
- Location: Local customers within the service area
- Tech-savvy users who prefer WhatsApp for quick communication

### 1.4 Business Goals
- Increase customer inquiries through WhatsApp integration
- Showcase services and competitive pricing
- Build credibility through 300+ Google reviews
- Improve online visibility through SEO optimization
- Provide seamless mobile and desktop experience

---

## 2. Technical Stack

### 2.1 Frontend Framework
- **Next.js** (Latest stable version - App Router)
- **React** (Latest version)
- **TypeScript** (Recommended for type safety)

### 2.2 Styling & UI
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for pre-built, accessible components
- **Responsive Design** (Mobile-first approach)

### 2.3 Deployment
- **Platform**: Vercel
- **CI/CD**: Automatic deployments from main branch
- **Domain**: To be configured

### 2.4 Additional Libraries
- **Lucide React** or **React Icons** for icons
- **Framer Motion** (optional) for smooth animations
- **React Google Maps API** for map integration
- **Next SEO** for SEO optimization

---

## 3. Design System

### 3.1 Brand Identity
- **Business Name**: Zreebas Massage & Nails Spa
- **Logo**: Custom logo (to be provided)

### 3.2 Color Palette
- **Primary**: Soft Pink (#FFC0CB, #FFB6C1, or similar shade)
- **Secondary**: Black (#000000)
- **Neutral**: White (#FFFFFF)
- **Accent**: Light gray for backgrounds (#F5F5F5)
- **Text**: Dark gray for body text (#333333)

### 3.3 Typography
- **Headings**: Modern sans-serif (e.g., Inter, Poppins, or Montserrat)
- **Body Text**: Clean sans-serif for readability
- **Font Weights**: 
  - Regular (400) for body text
  - Medium (500) for sub-headings
  - Bold (700) for headings

### 3.4 Design Principles
- Clean and minimal aesthetic
- Feminine and elegant feel
- Professional yet welcoming
- High contrast for readability
- Ample white space

---

## 4. Website Structure & Sections

### 4.1 Section 1: Global Header
**Position**: Fixed/Sticky at top of page

**Components**:
- Logo (Left-aligned)
- Navigation Menu (Center)
  - Home
  - Services
  - Why Choose Us
  - Testimonials
  - Contact Us
- WhatsApp CTA Button (Right-aligned)

**Features**:
- Smooth scroll navigation to sections
- Mobile responsive (hamburger menu on mobile)
- Transparent/solid background on scroll
- WhatsApp button always visible

**WhatsApp CTA**:
- **Button Text**: "Chat with Us" or WhatsApp icon + text
- **Pre-filled Message**: "Hi Zreebas Spa, I would like to know more about your services."
- **Action**: Opens WhatsApp Web/App with pre-filled message
- **Styling**: Prominent, soft pink background with hover effects

---

### 4.2 Section 2: Hero Section
**Purpose**: Create strong first impression and immediate call-to-action

**Components**:
- Hero Image/Video background
  - High-quality photos of spa interior, services, or relaxing ambiance
  - Subtle overlay for text readability
- Main Headline: "Every Woman Deserves Her Me Time" (or alternative suggestions below)
- Subheading: Brief description (1-2 sentences)
  - Example: "Experience ultimate relaxation and rejuvenation at Zreebas Massage & Nails Spa. Your sanctuary for beauty and wellness."
- WhatsApp CTA Button (Primary, large, centered)

**Tagline Alternatives** (Choose best fit):
1. "Every Woman Deserves Her Me Time"
2. "Your Time to Shine, Your Time to Relax"
3. "Because You Deserve to Be Pampered"
4. "Your Wellness Journey Starts Here"
5. "Escape. Relax. Rejuvenate."

**Design Notes**:
- Full viewport height (100vh)
- Center-aligned content
- Elegant typography with emphasis on headline
- Subtle animations (fade-in, slide-up)

---

### 4.3 Section 3: Contact Us
**Purpose**: Provide comprehensive contact information and location

**Components**:

1. **Contact Information Card**:
   - Phone Number (clickable tel: link)
   - Email Address (clickable mailto: link)
   - Physical Address
   - Business Hours
     - Format: Day ranges (e.g., Mon-Fri: 9AM-8PM)
   
2. **WhatsApp Contact Button**:
   - Same pre-filled message as header
   - Prominent placement

3. **Google Maps Integration**:
   - Embedded Google Map iframe
   - Pin location of spa
   - "Get Directions" link to open in Google Maps app

**Layout**:
- Two-column layout on desktop (Contact info left, Map right)
- Stacked on mobile
- Clean card-based design with soft shadows

**Design Notes**:
- Use icons for each contact type (phone, email, location, clock)
- Ensure map is responsive and properly sized
- Contact information should be easily copyable/clickable

---

### 4.4 Section 4: Our Services
**Purpose**: Showcase all services with pricing

**Services List**:
1. Full Body Waxing
2. Body Massage with Scrub & Mandi Bunga
3. Hair Treatments
4. Manicure & Pedicure
5. Facial Treatments
6. Short Spa Course

**Layout**:
- Grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Each service as a card component

**Service Card Components**:
- Service icon/image (optional)
- Service name (heading)
- Brief description (2-3 sentences)
- Price (prominently displayed)
- "Learn More" or hover effect for additional details

**Design Notes**:
- Consistent card height
- Hover effects (lift, shadow, or scale)
- Icons or images should be consistent style
- Clear pricing typography

**Content Requirements**:
- Need detailed service descriptions from client
- Need pricing for each service
- Optional: Service duration, what's included

---

### 4.5 Section 5: Why Choose Us
**Purpose**: Build trust and highlight competitive advantages

**Key Points** (Display 6 out of 7 provided):
1. ⭐ **300+ 5-Star Reviews on Google** - Social proof of excellence
2. 🏠 **Clean & Comfortable Environment** - Premium facilities
3. 💰 **Affordable Pricing** - Great value for money
4. ✨ **Exceptional Value** - Quality without compromise
5. 👥 **Certified Therapists You Can Trust** - Professional expertise
6. 💳 **Easy Payment Options** - Convenient payment methods
7. 🤝 **Polite, Friendly & Professional Service** - Outstanding customer care

**Recommendation**: Choose 6 that best differentiate from competitors. Suggested combination:
- 300+ 5-Star Reviews on Google
- Certified Therapists You Can Trust
- Clean & Comfortable Environment
- Affordable Pricing
- Easy Payment Options
- Polite, Friendly & Professional Service

**Layout**:
- 2x3 grid on desktop
- 2 columns on tablet
- Single column on mobile
- Each point in a card or icon-based layout

**Card Components**:
- Icon (relevant to each point)
- Heading (key benefit)
- Supporting text (1-2 sentences elaborating)

**WhatsApp CTA**:
- Placed at bottom of section
- Text: "Ready to experience the difference? Chat with us now!"

**Design Notes**:
- Icons should be consistent style (line icons or filled)
- Use soft pink accents for icons
- Equal spacing and alignment
- Alternating background colors (optional)

---

### 4.6 Section 6: What Our Patients Say About Us
**Purpose**: Build credibility through customer testimonials

**Components**:
- Section heading
- Testimonial cards in a carousel or grid

**Testimonial Card Structure**:
- 5-star rating display (⭐⭐⭐⭐⭐)
- Customer testimonial text (quote)
- Customer name
- Optional: Date of review

**Layout Options**:
1. **Carousel/Slider** (Recommended)
   - 3 visible on desktop, 2 on tablet, 1 on mobile
   - Auto-play with manual controls
   - Smooth transitions

2. **Grid Layout**
   - 3 columns on desktop
   - Featured testimonials

**Content Requirements**:
- Client will provide existing testimonials
- Format: Name, testimonial text, rating
- Minimum 6-9 testimonials recommended

**Design Notes**:
- Testimonials should be authentic and relatable
- Use quotation marks or speech bubble design
- Consistent card heights (or dynamic)
- Link to Google Reviews page (optional)

---

### 4.7 Section 7: Footer
**Purpose**: Provide additional information and navigation

**Components**:

1. **Business Information**:
   - Logo
   - Tagline
   - Brief description

2. **Quick Links**:
   - Services
   - About Us
   - Contact
   - Privacy Policy (optional)
   - Terms of Service (optional)

3. **Contact Information**:
   - Phone number
   - Email
   - Address
   - Business hours

4. **Social Media Links**:
   - Facebook
   - Instagram
   - TikTok (if applicable)
   - Google Business Profile
   - WhatsApp

5. **Newsletter Signup** (Optional):
   - Simple email input
   - "Stay updated with our offers"

6. **Copyright Notice**:
   - © 2024 Zreebas Massage & Nails Spa. All rights reserved.

**Layout**:
- 4-column layout on desktop
- Stacked on mobile
- Dark background (black) with light text

**Design Notes**:
- Footer should be clean and organized
- Social icons should be clickable and styled
- Use soft pink for hover states
- Adequate padding and spacing

---

## 5. Functional Requirements

### 5.1 WhatsApp Integration
**WhatsApp Number**: [TO BE PROVIDED BY CLIENT]

**Pre-filled Message**: 
```
Hi Zreebas Spa, I would like to know more about your services.
```

**Implementation**:
- Use WhatsApp API link format: `https://wa.me/[PHONE_NUMBER]?text=[ENCODED_MESSAGE]`
- Opens in new tab/window
- Works on both mobile (app) and desktop (WhatsApp Web)

**Button Locations**:
1. Global Header (far right)
2. Hero Section (center, primary CTA)
3. Contact Us Section
4. Why Choose Us Section (bottom)

**Button Variations**:
- Header: Icon + "Chat" (compact)
- Hero: Icon + "Chat with Us on WhatsApp" (prominent)
- Other sections: Icon + "Contact Us" (medium)

### 5.2 Google Maps Integration
**Implementation**:
- Embed Google Maps iframe
- Center on spa location
- Include business marker
- Responsive sizing
- Link to open in Google Maps app

**Address**: [TO BE PROVIDED BY CLIENT]

### 5.3 Navigation
- Smooth scroll to sections
- Active section highlighting in menu
- Mobile hamburger menu
- Scroll-to-top button (optional)

### 5.4 Responsive Design
**Breakpoints**:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Requirements**:
- All sections must be fully responsive
- Touch-friendly tap targets (min 44x44px)
- Readable text sizes (min 16px body)
- Optimized images for different screen sizes

### 5.5 Performance
- Image optimization (Next.js Image component)
- Lazy loading for below-fold content
- Minimize initial bundle size
- Fast page load (< 3 seconds)
- Core Web Vitals compliance

---

## 6. SEO Requirements

### 6.1 Technical SEO
- Semantic HTML5 elements
- Proper heading hierarchy (H1, H2, H3)
- Meta tags (title, description)
- Open Graph tags for social sharing
- Structured data (LocalBusiness schema)
- XML sitemap
- Robots.txt
- Favicon and touch icons

### 6.2 On-Page SEO
**Target Keywords**:
- Spa [Location]
- Massage [Location]
- Nails spa [Location]
- Beauty treatments [Location]
- Body massage [Location]
- Waxing services [Location]

**Meta Information**:
- **Title**: "Zreebas Massage & Nails Spa | [Location] | Premium Spa Services"
- **Description**: "Experience ultimate relaxation at Zreebas Spa. Offering massage, waxing, facials, manicure & pedicure. 300+ 5-star reviews. Book your appointment today!"
- **Alt Text**: Descriptive alt text for all images

### 6.3 Local SEO
- Google Business Profile integration
- NAP consistency (Name, Address, Phone)
- Local business schema markup
- Location-based keywords
- Embedded Google Map

### 6.4 Content Strategy
- Service pages with detailed descriptions
- FAQ section (optional future addition)
- Blog/tips section (optional future addition)
- Regular content updates

---

## 7. Content Requirements

### 7.1 Text Content Needed from Client
1. **Hero Section**:
   - Confirm tagline or choose alternative
   - Subheading text (1-2 sentences)

2. **Services Section**:
   - Detailed description for each service (2-3 sentences)
   - Pricing for each service
   - Service duration (optional)

3. **Contact Information**:
   - WhatsApp number (with country code)
   - Phone number
   - Email address
   - Physical address
   - Business hours (day-by-day)

4. **Testimonials**:
   - Minimum 6-9 customer testimonials
   - Customer names (or first name + initial)
   - Review text
   - Date (optional)

5. **Social Media**:
   - Links to all social media profiles

6. **Footer**:
   - Brief "About Us" text (2-3 sentences)

### 7.2 Visual Assets Needed
1. **Logo**:
   - High-resolution logo (PNG with transparency)
   - Favicon version (ICO or PNG, 512x512px)

2. **Images**:
   - Hero section background (1920x1080px minimum)
   - Service images (optional, 6 images)
   - Spa interior/ambiance photos
   - Team photos (if panel section added later)

3. **Icons**:
   - Custom icons (if not using icon library)

---

## 8. User Flows

### 8.1 Primary User Flow
1. User lands on Hero section
2. User reads tagline and value proposition
3. User clicks WhatsApp CTA or scrolls down
4. User browses services and pricing
5. User reads Why Choose Us section (builds trust)
6. User reads testimonials (social proof)
7. User contacts via WhatsApp or views contact information

### 8.2 Alternative User Flow
1. User searches for spa services on Google
2. Finds website through SEO
3. Lands on homepage
4. Uses navigation to jump to specific section (e.g., Services)
5. Reviews pricing and services
6. Contacts via WhatsApp

### 8.3 Mobile User Flow
1. User accesses site on mobile
2. Taps hamburger menu
3. Navigates to desired section
4. Taps WhatsApp button (opens WhatsApp app directly)
5. Sends inquiry

---

## 9. Development Phases

### Phase 1: Setup & Foundation (Week 1)
- Initialize Next.js project with TypeScript
- Install and configure Tailwind CSS
- Install and setup shadcn/ui
- Setup project structure and folders
- Configure ESLint and Prettier
- Setup Git repository

### Phase 2: Component Development (Week 1-2)
- Create reusable components (Button, Card, Container)
- Develop Header component with navigation
- Develop Hero section
- Implement WhatsApp integration
- Create Footer component

### Phase 3: Section Development (Week 2-3)
- Build Contact Us section with Google Maps
- Build Services section with pricing cards
- Build Why Choose Us section
- Build Testimonials section with carousel
- Ensure all sections are responsive

### Phase 4: Content Integration (Week 3)
- Integrate client-provided content
- Add images and optimize
- Add testimonials
- Configure contact information
- Test all links and CTAs

### Phase 5: SEO & Optimization (Week 3-4)
- Implement SEO meta tags
- Add structured data
- Optimize images
- Test page speed
- Implement lazy loading
- Add analytics (optional)

### Phase 6: Testing & QA (Week 4)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness testing (iOS, Android)
- WhatsApp integration testing
- Google Maps functionality testing
- Form validation testing
- Accessibility testing (WCAG compliance)

### Phase 7: Deployment (Week 4)
- Deploy to Vercel
- Configure custom domain
- Setup SSL certificate
- Test production environment
- Submit to Google Search Console
- Create XML sitemap

### Phase 8: Post-Launch (Ongoing)
- Monitor performance
- Track analytics
- Gather user feedback
- Iterative improvements

---

## 10. Technical Specifications

### 10.1 File Structure
```
zreebas-spa-website/
├── public/
│   ├── images/
│   ├── logo.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ContactUs.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Footer.tsx
│   │   └── ui/ (shadcn components)
│   ├── lib/
│   │   └── utils.ts
│   └── constants/
│       ├── services.ts
│       ├── testimonials.ts
│       └── contact.ts
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

### 10.2 Key Dependencies
```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "tailwindcss": "^3.x",
    "@radix-ui/react-*": "latest",
    "class-variance-authority": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest",
    "lucide-react": "latest",
    "framer-motion": "latest"
  }
}
```

### 10.3 Environment Variables
```
NEXT_PUBLIC_WHATSAPP_NUMBER=[phone_number]
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=[api_key]
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=[embed_url]
NEXT_PUBLIC_GTM_ID=[GTM-XXXXXXX]
```

---

## 11. Accessibility Requirements

### 11.1 WCAG 2.1 Level AA Compliance
- Proper color contrast ratios (4.5:1 for normal text)
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- Alt text for all images
- Semantic HTML structure
- ARIA labels where needed

### 11.2 Specific Considerations
- Touch targets minimum 44x44px
- Readable font sizes (min 16px)
- No auto-playing media
- Captions for video content (if added)
- Skip to main content link

---

## 12. Google Tag Manager Integration

### 12.1 GTM Container Setup
Google Tag Manager (GTM) will be integrated to allow flexible tracking and analytics management without code changes.

### 12.2 Implementation Requirements

**GTM Script Placement**:

1. **Head Script** (place in `<head>` section):
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

2. **Body Script** (place immediately after opening `<body>` tag):
```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### 12.3 Next.js Implementation
- Add GTM scripts to `app/layout.tsx`
- Head script in `<head>` section
- Body script at the start of `<body>` section
- Use environment variable for GTM ID: `NEXT_PUBLIC_GTM_ID`

### 12.4 GTM Container ID
**Placeholder**: `GTM-XXXXXXX` (replace with actual GTM container ID)

**Client Action Required**: 
- Create GTM account and container
- Provide GTM container ID (format: GTM-XXXXXXX)

---

## 13. Maintenance & Updates

### 13.1 Regular Updates
- Content updates (services, pricing)
- Testimonial additions
- Image updates
- Security patches
- Dependency updates

### 13.2 Monitoring
- Uptime monitoring
- Performance monitoring
- Error tracking (Sentry recommended)
- SEO ranking monitoring

---

## 14. Success Criteria

### 15.1 Launch Criteria
- All 7 sections completed and functional
- Mobile responsive on all devices
- WhatsApp integration working correctly
- Google Maps embedded and functional
- All content integrated
- SEO meta tags implemented
- Cross-browser compatible
- Page load speed < 3 seconds
- Zero critical bugs

### 15.2 Business KPIs
- Increase in WhatsApp inquiries
- Improved Google search ranking
- Reduced bounce rate
- Increased time on site
- Higher conversion rate (inquiries to bookings)

---

## 15. Risks & Mitigation

### 16.1 Potential Risks
1. **Content Delays**: Client content not provided on time
   - Mitigation: Use placeholder content, set clear deadlines

2. **Technical Issues**: Browser compatibility, API issues
   - Mitigation: Thorough testing, fallback solutions

3. **Performance**: Large images affecting load time
   - Mitigation: Image optimization, lazy loading

4. **SEO Competition**: High competition in local market
   - Mitigation: Strong local SEO, unique content, regular updates

### 16.2 Assumptions
- Client will provide all required content within agreed timeline
- WhatsApp business account is active
- Google Maps API will be available
- No complex backend functionality needed
- Single language (English or local language)

---

## 16. Approval & Sign-off

### 17.1 Required Approvals
- [ ] Design mockups approved
- [ ] Content approved
- [ ] Functionality approved
- [ ] SEO strategy approved
- [ ] Final website approved
- [ ] Ready for launch

### 17.2 Stakeholders
- Business Owner: [Name]
- Developer: [Name]
- Designer: [Name] (if separate)
- Content Provider: [Name]

---

## 17. Contact & Questions

For any questions or clarifications regarding this PRD, please contact:

**Project Manager/Developer**: [Your Name]
**Email**: [Your Email]
**Client Contact**: [Client Name]
**Client Email**: [Client Email]

---

## Appendix A: Design References

### Recommended Design Inspiration
- Luxury spa websites
- Feminine wellness brands
- Modern SPA/salon templates
- Clean, minimal aesthetic examples

### Color Psychology
- **Soft Pink**: Femininity, care, gentleness, relaxation
- **Black**: Elegance, sophistication, luxury, professionalism

---

## Appendix B: Technical Resources

### Documentation Links
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Vercel Deployment Guide](https://vercel.com/docs)

### Useful Tools
- [Figma](https://figma.com) - Design mockups
- [TinyPNG](https://tinypng.com) - Image optimization
- [Google PageSpeed Insights](https://pagespeed.web.dev) - Performance testing
- [Wave](https://wave.webaim.org) - Accessibility testing

---

## Appendix C: Checklist for Client

### Content Checklist
- [ ] Business logo (high resolution)
- [ ] Favicon
- [ ] Hero background image
- [ ] Service descriptions (6 services)
- [ ] Service pricing
- [ ] WhatsApp number (with country code)
- [ ] Phone number
- [ ] Email address
- [ ] Physical address
- [ ] Business hours
- [ ] Google Maps location/coordinates
- [ ] Customer testimonials (minimum 6)
- [ ] Social media links
- [ ] Any additional photos

### Decisions Needed
- [ ] Final tagline selection
- [ ] Which 6 "Why Choose Us" points to highlight
- [ ] Footer content preferences
- [ ] Analytics tracking preferences
- [ ] Custom domain name (if applicable)

---

**Document Version**: 1.0  
**Last Updated**: December 30, 2024  
**Status**: Draft - Awaiting Client Review

---

*This PRD serves as a comprehensive guide for developing the Zreebas Massage & Nails Spa website. All specifications are subject to change based on client feedback and technical considerations during development.*
