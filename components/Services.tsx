"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SERVICES } from "@/constants/services";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-background-dark">
      <Container>
        <div className="flex flex-col items-start mb-14">
          <div className="max-w-2xl">
            <span className="text-primary font-body uppercase tracking-widest text-sm">
              Curated for You
            </span>
            <h2 className="text-white text-4xl md:text-5xl font-display font-light leading-tight mt-3">
              Signature Bespoke Experiences
            </h2>
            <p className="text-text-muted text-lg font-body mt-4 leading-relaxed">
              Each treatment is a journey tailored to your needs, promising
              profound relaxation and rejuvenation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            let imagePositionClass = "";
            if (service.id === "manicure-pedicure") {
              imagePositionClass = "object-center";
            } else if (service.id === "short-spa-course") {
              imagePositionClass = "object-[center_80%]";
            }

            return (
              <Card
                key={service.id}
                className="group bg-surface-dark border border-primary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                <div className="aspect-video w-full overflow-hidden bg-surface-dark">
                  <img
                    src={service.image}
                    alt={service.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${imagePositionClass}`}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-white">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base font-body text-text-muted leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
