import { useState, useEffect } from 'react'
import CTAButton from '../ui/CTAButton'
import { WhatsAppIcon, MenuIcon, CloseIcon } from '../ui/icons'
import { generateWhatsAppLink, generalOrderMessage } from '../../utils/whatsapp'
import { navLinks } from '../../data/siteConfig'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm border-b border-warm-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-xl text-chocolate hover:text-caramel transition-colors flex items-center gap-2"
          aria-label="Better Cookies — Início"
        >
          <span className="text-2xl select-none">🍪</span>
          <span className="font-bold tracking-tight">Better Cookies</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-chocolate/65 hover:text-chocolate transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <CTAButton
            variant="whatsapp"
            size="sm"
            href={generateWhatsAppLink(generalOrderMessage())}
            icon={<WhatsAppIcon size={15} />}
            className="hidden sm:inline-flex"
          >
            Peça agora
          </CTAButton>

          <button
            className="md:hidden p-2 text-chocolate hover:text-caramel transition-colors rounded-lg"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-warm-border px-4 pb-5 shadow-lg">
          <nav aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="flex items-center py-3.5 text-chocolate font-medium border-b border-warm-border/50 last:border-0 hover:text-caramel transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={generateWhatsAppLink(generalOrderMessage())}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-4 flex items-center justify-center gap-2 bg-whatsapp hover:bg-green-600 text-white font-semibold py-3.5 px-6 rounded-full transition-all active:scale-95"
          >
            <WhatsAppIcon size={18} />
            Peça pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
