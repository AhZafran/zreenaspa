"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { TESTIMONIALS } from "@/constants/testimonials";
import { CONTACT_INFO } from "@/constants/contact";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - itemsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= TESTIMONIALS.length - itemsPerView ? 0 : prev + 1
    );
  };

  const visibleTestimonials = TESTIMONIALS.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  if (visibleTestimonials.length < itemsPerView) {
    const remaining = itemsPerView - visibleTestimonials.length;
    visibleTestimonials.push(...TESTIMONIALS.slice(0, remaining));
  }

  return (
    <section id="testimonials" className="section-padding bg-background-dark">
      <Container>
        <div className="text-center mb-16">
          <span className="text-primary font-body uppercase tracking-widest text-sm">
            Testimonials
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-display font-light leading-tight mt-3">
            What Our Customers <span className="italic">Say</span>
          </h2>
          <p className="text-text-muted text-lg font-body mt-4 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued customers have
            to say about their experiences.
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${index}`}
                className="hover:shadow-2xl transition-shadow bg-surface-dark"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-primary fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>
                  <p className="text-text-muted font-body text-base leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-display font-semibold text-white text-lg">
                      {testimonial.name}
                    </p>
                    {testimonial.date && (
                      <p className="text-sm text-text-muted/60 font-body">{testimonial.date}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="rounded-full"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({
                length: Math.ceil(TESTIMONIALS.length / itemsPerView),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * itemsPerView)}
                  className={`h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / itemsPerView) === index
                      ? "bg-primary w-8"
                      : "bg-white/20 w-2 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial set ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <p className="text-text-muted/60 font-body mb-4 text-sm">
            Want to read more? Check out our reviews on Google!
          </p>
          <Button
            variant="outline"
            onClick={() => window.open("https://www.google.com/search?sca_esv=320ca73251b4d27b&hl=en&gl=MY&sxsrf=AE3TifMpRjbf-V0X9sziyEYALSFfmHuU_A:1767171624167&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8s0Oc5omKe7TN5hou7ZIecz4_k3BA7C8Iyjfr4wEpTQcneI9iJa0uP_cq36tn-neOPxGtQA0njlI84VAjZpGk5FNTG1cglOOMYvNpGHuIulhpO2ozUkOuZsrHFnWgyHizntDE1bTdEvemFbI2nl8xsimZ61ka&q=Zreenas+Massage+and+Nails+Spa+%28+Muslimah+Friendly+Spa+%29+Reviews&sa=X&ved=2ahUKEwiBqKmnu-eRAxU5SGwGHcqpHb8Q0bkNegQIJxAE&biw=1920&bih=1000&dpr=1", "_blank")}
          >
            View All Reviews on Google
          </Button>
        </div>
      </Container>
    </section>
  );
}
