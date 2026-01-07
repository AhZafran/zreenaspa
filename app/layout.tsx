import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LocalBusinessSchema, BreadcrumbSchema } from "./structured-data";
import GoogleTagManager from "@/components/GoogleTagManager";

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
        {/* Structured Data */}
        <LocalBusinessSchema />
        <BreadcrumbSchema />
      </head>
      <body className={`${poppins.className} antialiased bg-background-dark text-text-muted`}>
        {/* Google Tag Manager (noscript) */}
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
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </body>
    </html>
  );
}
