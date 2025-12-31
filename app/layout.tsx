import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LocalBusinessSchema, BreadcrumbSchema } from "./structured-data";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zreenas Massage & Nails Spa | Muslimah Friendly Spa in Kota Kemuning",
  description:
    "Experience ultimate relaxation at Zreenas Spa - Your #1 Muslimah Friendly Spa in Kota Kemuning. Offering massage, waxing, facials, manicure & pedicure. 300+ 5-star reviews. Book your appointment today!",
  keywords: [
    "spa",
    "massage",
    "nails spa",
    "muslimah friendly spa",
    "kota kemuning spa",
    "shah alam spa",
    "beauty treatments",
    "body massage",
    "waxing services",
    "facial treatments",
    "manicure",
    "pedicure",
  ],
  authors: [{ name: "Zreenas Spa" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Zreenas Massage & Nails Spa | Muslimah Friendly Spa in Kota Kemuning",
    description:
      "Experience ultimate relaxation at Zreenas Spa - Your #1 Muslimah Friendly Spa in Kota Kemuning. Offering massage, waxing, facials, manicure & pedicure. 300+ 5-star reviews.",
    siteName: "Zreenas Massage & Nails Spa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zreenas Massage & Nails Spa | Muslimah Friendly Spa in Kota Kemuning",
    description:
      "Experience ultimate relaxation at Zreenas Spa - Your #1 Muslimah Friendly Spa in Kota Kemuning. Offering massage, waxing, facials, manicure & pedicure. 300+ 5-star reviews.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${poppins.variable}`}>
      <head>
        {/* Google Tag Manager - Head Script */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
        )}
        {/* Structured Data */}
        <LocalBusinessSchema />
        <BreadcrumbSchema />
      </head>
      <body className={`${poppins.className} antialiased bg-background-dark text-text-muted`}>
        {/* Google Tag Manager - Body Script (noscript) */}
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
      </body>
    </html>
  );
}
