"use client";

import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CONTACT_INFO } from "@/constants/contact";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl(
    CONTACT_INFO.whatsappNumber,
    CONTACT_INFO.whatsappMessage
  );

  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url('/background-pattern.png')`,
      }}
    >
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto py-20">
          {/* Tagline */}
          <p className="text-primary text-sm font-body uppercase tracking-widest mb-6">
            Your #1 Massage & Spa in Kota Kemuning
          </p>

          {/* Main Headline */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-display font-light leading-tight tracking-tight mb-6">
            Your Sanctuary of <br className="hidden md:block" />
            <span className="italic">Serenity</span> Awaits
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-lg md:text-xl font-body leading-relaxed max-w-3xl mx-auto mb-8">
            At Zreenas, beauty goes beyond appearance. Every treatment, every touch, and every product is designed to nurture confidence, well-being, and self-worth. We believe true beauty empowers women to shine inside and out.
          </p>

          {/* Trust Badge */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-primary fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-body text-white/90 ml-2 uppercase tracking-wide">
              300+ Five-Star Reviews
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              size="lg"
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="gap-2 bg-primary hover:bg-primary/90 text-background-dark font-bold uppercase tracking-wide rounded-full transition-transform hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Explore Experiences
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm rounded-full uppercase tracking-wide transition-transform hover:scale-105 w-full sm:w-auto"
            >
              View Services
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex justify-center animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/50" />
          </div>
        </div>
      </Container>
    </section>
  );
}
