import { siteConfig } from '../data/siteConfig'

/**
 * Generates a wa.me link with an optional pre-filled message.
 */
export function generateWhatsAppLink(message = '') {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

/**
 * Pre-filled message for ordering a specific cookie.
 */
export function cookieOrderMessage(cookieName) {
  return `Oi, Better Cookies! Quero pedir o cookie de ${cookieName} 🍪`
}

/**
 * Generic order message for general CTAs.
 */
export function generalOrderMessage() {
  return `Oi, Better Cookies! Quero fazer um pedido 🍪`
}
