import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Returns the WhatsApp contact URL
 * @param _phoneNumber - WhatsApp number with country code (not used, kept for compatibility)
 * @param _message - Pre-filled message text (not used, kept for compatibility)
 * @returns WhatsApp URL
 */
export function getWhatsAppUrl(_phoneNumber: string, _message: string): string {
  return "https://wa.link/qitfh4";
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
