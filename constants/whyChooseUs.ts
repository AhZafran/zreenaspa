export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const WHY_CHOOSE_US: Benefit[] = [
  {
    id: "reviews",
    title: "300+ 5-Star Reviews on Google",
    description: "Join hundreds of satisfied customers who trust us for their wellness journey. Our reputation speaks for itself.",
    icon: "star",
  },
  {
    id: "therapists",
    title: "Certified Therapists You Can Trust",
    description: "Our professional team is fully trained and certified, ensuring you receive the highest quality care and expertise.",
    icon: "award",
  },
  {
    id: "environment",
    title: "Clean & Comfortable Environment",
    description: "Enjoy our pristine, welcoming facilities designed for your ultimate comfort and relaxation.",
    icon: "home",
  },
  {
    id: "pricing",
    title: "Affordable Pricing",
    description: "Premium spa services at prices that won't break the bank. Quality care accessible to everyone.",
    icon: "tag",
  },
  {
    id: "payment",
    title: "Easy Payment Options",
    description: "Multiple convenient payment methods available for your ease. Cash, cards, and e-wallets accepted.",
    icon: "credit-card",
  },
  {
    id: "service",
    title: "Polite, Friendly & Professional Service",
    description: "Experience exceptional customer care from our warm, attentive staff dedicated to your satisfaction.",
    icon: "users",
  },
];
