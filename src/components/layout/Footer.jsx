import { WhatsAppIcon, InstagramIcon } from '../ui/icons'
import { generateWhatsAppLink, generalOrderMessage } from '../../utils/whatsapp'
import { siteConfig } from '../../data/siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-chocolate-dark text-cream/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="text-center md:text-left max-w-xs">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="text-3xl select-none">🍪</span>
              <h3 className="font-serif text-2xl text-cream">{siteConfig.name}</h3>
            </div>
            <p className="text-sm leading-relaxed text-cream/55">
              {siteConfig.tagline}
            </p>
            <p className="text-sm mt-1 text-cream/40">Feitos com amor em cada detalhe.</p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-cream/60 hover:text-caramel transition-colors px-4 py-2.5 rounded-full border border-cream/10 hover:border-caramel/40"
            >
              <InstagramIcon size={17} />
              {siteConfig.instagramHandle}
            </a>
            <a
              href={generateWhatsAppLink(generalOrderMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-cream/60 hover:text-whatsapp transition-colors px-4 py-2.5 rounded-full border border-cream/10 hover:border-whatsapp/40"
            >
              <WhatsAppIcon size={17} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/8 px-4 sm:px-6 py-5 text-center text-xs text-cream/30">
        © {year} {siteConfig.name}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
