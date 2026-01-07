"use client";

import { Phone, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CONTACT_INFO } from "@/constants/contact";
import { getWhatsAppUrl } from "@/lib/utils";

export default function ContactUs() {
  const whatsappUrl = getWhatsAppUrl(
    CONTACT_INFO.whatsappNumber,
    CONTACT_INFO.whatsappMessage
  );

  const googleMapsEmbedUrl =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3371855424866!2d101.53907769999999!3d3.0036272999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb29abdf55fd9%3A0x209a152a76a49dcc!2sZreenas%20Massage%20and%20Nails%20Spa%20(%20Muslimah%20Friendly%20Spa%20)!5e0!3m2!1sen!2smy!4v1767171633732!5m2!1sen!2smy";

  return (
    <section id="contact" className="section-padding bg-background-light">
      <Container>
        <div className="text-center mb-16">
          <span className="text-primary font-body uppercase tracking-widest text-sm">
            Connect with Us
          </span>
          <h2 className="text-text-main text-4xl md:text-5xl font-display font-light leading-tight mt-3">
            Get in <span className="italic">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg font-body mt-4 max-w-2xl mx-auto leading-relaxed">
            We would love to hear from you. Reach out to us for appointments or
            inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <div className="space-y-6">
            <Card className="p-8 hover:shadow-2xl transition-shadow bg-white border-gray-200">
              <h3 className="text-2xl font-display font-semibold text-text-main mb-8">
                Contact Information
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-text-main mb-1 text-lg">Phone</h4>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-gray-600 font-body hover:text-primary transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-text-main mb-1 text-lg">Address</h4>
                  <p className="text-gray-600 font-body">{CONTACT_INFO.address}</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-text-main mb-3 text-lg">
                    Business Hours
                  </h4>
                  <div className="space-y-2">
                    {CONTACT_INFO.businessHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between text-sm font-body"
                      >
                        <span className="text-text-main font-medium">{schedule.days}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <Button
                size="lg"
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="w-full gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Message Us on WhatsApp
              </Button>
            </Card>
          </div>

          {/* Google Maps */}
          <div className="space-y-4">
            <Card className="p-0 overflow-hidden h-full min-h-[400px] bg-white border-gray-200">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zreenas Spa Location"
                className="rounded-xl"
              />
            </Card>

            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://maps.google.com", "_blank")}
              className="w-full gap-2 border-gray-300 text-text-main hover:bg-gray-100"
            >
              <Navigation className="h-5 w-5" />
              Get Directions
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
