export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: "full-body-waxing",
    name: "Full Body Waxing",
    description: "Smooth, hair-free skin with our professional full body waxing service. Gentle techniques for a comfortable experience.",
    image: "/images/services/full-body-waxing.jpg",
  },
  {
    id: "body-massage",
    name: "Body Massage with Scrub & Mandi Bunga",
    description: "Ultimate relaxation package combining therapeutic massage, exfoliating body scrub, and traditional floral bath.",
    image: "/images/services/body-massage.jpg",
  },
  {
    id: "hair-treatments",
    name: "Hair Treatments",
    description: "Revitalize your hair with our nourishing treatments. From deep conditioning to specialized care for all hair types.",
    image: "/images/services/hair-treatment.png",
  },
  {
    id: "manicure-pedicure",
    name: "Manicure & Pedicure",
    description: "Pamper your hands and feet with our luxurious nail care services. Beautiful nails, relaxed you.",
    image: "/images/services/menicure-pedicure.jpg",
  },
  {
    id: "facial-treatments",
    name: "Facial Treatments",
    description: "Rejuvenate your skin with customized facial treatments. Cleanse, hydrate, and restore your natural glow.",
    image: "/images/services/facial-treatments.jpg.png",
  },
  {
    id: "short-spa-course",
    name: "Short Spa Course",
    description: "Perfect introduction to spa wellness. A curated experience combining multiple treatments for total relaxation.",
    image: "/images/services/short-spa-course.png",
  },
];
