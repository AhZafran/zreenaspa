"use client";

import { Star, Award, Home, Tag, CreditCard, Users, MessageCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WHY_CHOOSE_US } from "@/constants/whyChooseUs";
import { CONTACT_INFO } from "@/constants/contact";
import { getWhatsAppUrl } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  star: Star,
  award: Award,
  home: Home,
  tag: Tag,
  "credit-card": CreditCard,
  users: Users,
};

export default function WhyChooseUs() {
  const whatsappUrl = getWhatsAppUrl(
    CONTACT_INFO.whatsappNumber,
    CONTACT_INFO.whatsappMessage
  );

  return (
    <section id="why-choose-us" className="section-padding bg-surface-dark">
      <Container>
        <div className="text-center mb-16">
          <span className="text-primary font-body uppercase tracking-widest text-sm">
            Our Philosophy
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-display font-light leading-tight mt-3">
            Why Choose <span className="italic">Zreenas</span>
          </h2>
          <p className="text-text-muted text-lg font-body mt-4 max-w-2xl mx-auto leading-relaxed">
            Discover what makes Zreenas Spa the preferred choice for hundreds of
            satisfied customers seeking ultimate wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_CHOOSE_US.map((benefit) => {
            const Icon = iconMap[benefit.icon] || Star;

            return (
              <Card
                key={benefit.id}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/20 bg-background-dark"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2 font-display">{benefit.title}</CardTitle>
                  <CardDescription className="text-base font-body leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-display font-normal text-white mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-text-muted font-body mb-6 max-w-xl mx-auto leading-relaxed">
            Join our community of happy customers and treat yourself to the
            relaxation you deserve.
          </p>
          <Button
            size="lg"
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="gap-2 shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            Chat with Us Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
