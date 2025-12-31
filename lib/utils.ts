import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a WhatsApp URL with pre-filled message
 * @param phoneNumber - WhatsApp number with country code (e.g., "60123456789")
 * @param message - Pre-filled message text
 * @returns WhatsApp URL
 */
export function getWhatsAppUrl(phoneNumber: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Smooth scroll to section
 * @param elementId - ID of the element to scroll to
 */
export function scrollToSection(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
