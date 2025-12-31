import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ContactUs />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
