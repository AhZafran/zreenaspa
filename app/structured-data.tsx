import { CONTACT_INFO } from "@/constants/contact";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Zreenas Massage & Nails Spa",
    image: "https://zreenasspa.com/logo.png", // TO BE UPDATED with actual domain
    "@id": "https://zreenasspa.com", // TO BE UPDATED with actual domain
    url: "https://zreenasspa.com", // TO BE UPDATED with actual domain
    telephone: CONTACT_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "36 Ground Floor, Jalan Anggerik Vanilla M 31/M",
      addressLocality: "Kota Kemuning, Shah Alam",
      addressRegion: "Selangor",
      postalCode: "40460",
      addressCountry: "MY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "3.0088", // Kota Kemuning coordinates
      longitude: "101.5400",
    },
    openingHoursSpecification: CONTACT_INFO.businessHours.map((schedule) => {
      const [startTime, endTime] = schedule.hours
        .split(" - ")
        .map((time) => time.trim());

      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: schedule.days.split(" - ").map((day) => day.trim()),
        opens: startTime,
        closes: endTime,
      };
    }),
    sameAs: [
      CONTACT_INFO.socialMedia.facebook,
      CONTACT_INFO.socialMedia.instagram,
      CONTACT_INFO.socialMedia.googleBusiness,
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "300",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://zreenasspa.com", // TO BE UPDATED with actual domain
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://zreenasspa.com#services", // TO BE UPDATED with actual domain
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
