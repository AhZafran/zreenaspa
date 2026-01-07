"use client";

import { Facebook, Instagram, Phone, MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { CONTACT_INFO } from "@/constants/contact";
import { scrollToSection } from "@/lib/utils";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary">
      <Container>
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Business Info */}
          <div className="flex flex-col gap-4">
            <div className="mb-4">
              {/* Custom Logo */}
              <img
                src="/logo.png"
                alt="Zreenas Spa Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-800 font-body leading-relaxed">
              Your exclusive destination for profound relaxation, bespoke wellness,
              and ultimate beauty. Rediscover your essence.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={CONTACT_INFO.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-white hover:text-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-800" />
              </a>
              <a
                href={CONTACT_INFO.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-white hover:text-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-800" />
              </a>
              <a
                href={CONTACT_INFO.socialMedia.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-white hover:text-primary rounded-full flex items-center justify-center transition-colors text-xs font-bold text-gray-800"
                aria-label="Google Business"
              >
                G
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 hover:bg-white hover:text-[#25D366] rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-gray-800 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-900 font-display font-bold text-lg mb-2">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href.replace("#", ""))}
                  className="text-left text-sm text-gray-800 font-body hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-900 font-display font-bold text-lg mb-2">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-800 font-body text-sm hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-body text-sm">{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="text-gray-900 font-display font-bold text-lg mb-2">Business Hours</h3>
            <ul className="space-y-2">
              {CONTACT_INFO.businessHours.map((schedule, index) => (
                <li key={index} className="text-gray-800 font-body text-sm">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">{schedule.days}</span>
                    <span className="text-sm">{schedule.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-800 font-body">
            © {currentYear} Zreenas Massage & Nails Spa. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a className="text-sm text-gray-800 font-body hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-sm text-gray-800 font-body hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
