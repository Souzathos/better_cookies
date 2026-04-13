import { Star, Handshake } from 'lucide-react'
import cookieHero from '../assets/red_veltet_nutella.png'
import CTAButton from '../components/ui/CTAButton'
import { WhatsAppIcon, ArrowDownIcon } from '../components/ui/icons'
import { generateWhatsAppLink, generalOrderMessage } from '../utils/whatsapp'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-to-br from-cream via-cream to-cream-alt flex items-center overflow-hidden pt-16"
    >
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-caramel/8 -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-terracotta/6 translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* ── Left: Text content ── */}
        <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          {/* Eyebrow badge */}
          <span
            className="inline-flex items-center gap-2 text-caramel text-sm font-semibold tracking-widest uppercase mb-5 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-6 h-px bg-caramel/50 hidden lg:block" />
            Artesanal & Irresistível
          </span>

          {/* Main headline */}
          <h1
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-chocolate leading-[1.05] mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.25s' }}
          >
            Cookies que você{' '}
            <span className="text-caramel italic">não vai esquecer.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-chocolate/65 text-lg sm:text-xl leading-relaxed mb-9 animate-fade-in-up"
            style={{ animationDelay: '0.45s' }}
          >
            Feitos à mão, recheados com amor e os melhores ingredientes.
            Crocantes por fora, macios por dentro.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
            style={{ animationDelay: '0.65s' }}
          >
            <CTAButton
              variant="whatsapp"
              size="lg"
              href={generateWhatsAppLink(generalOrderMessage())}
              icon={<WhatsAppIcon size={18} />}
            >
              Peça pelo WhatsApp
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              href="#cardapio"
              icon={<ArrowDownIcon size={16} />}
            >
              Ver cardápio
            </CTAButton>
          </div>
        </div>

        {/* ── Right: Visual ── */}
        <div
          className="flex-shrink-0 flex items-center justify-center w-full max-w-xs lg:max-w-sm xl:max-w-md animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="relative w-full max-w-[320px] lg:max-w-[360px] mx-auto">
            {/* Outer warm glow */}
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-caramel/20 to-terracotta/10 blur-3xl pointer-events-none" />

            {/* Photo container */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-chocolate/25">
              <img
                src={cookieHero}
                alt="Cookie Red Velvet com Nutella — Better Cookies"
                className="w-full h-full object-cover"
              />
              {/* Subtle bottom gradient so badges float over the photo */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-chocolate/15 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge: rating */}
            <div
              className="absolute -top-3 -right-5 bg-cream-card rounded-2xl shadow-lg shadow-chocolate/15 px-3.5 py-2.5 flex items-center gap-2 border border-warm-border/50 animate-fade-in-up"
              style={{ animationDelay: '0.9s' }}
            >
              <Star size={18} strokeWidth={1.75} className="text-caramel flex-shrink-0" fill="currentColor" />
              <div>
                <p className="text-xs font-bold text-chocolate leading-none">4.9</p>
                <p className="text-[10px] text-chocolate/50 leading-none mt-0.5">Avaliação</p>
              </div>
            </div>

            {/* Floating badge: artisanal */}
            <div
              className="absolute -bottom-3 -left-5 bg-cream-card rounded-2xl shadow-lg shadow-chocolate/15 px-3.5 py-2.5 flex items-center gap-2 border border-warm-border/50 animate-fade-in-up"
              style={{ animationDelay: '1.1s' }}
            >
              <Handshake size={18} strokeWidth={1.75} className="text-caramel flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-chocolate leading-none">100%</p>
                <p className="text-[10px] text-chocolate/50 leading-none mt-0.5">Artesanal</p>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute top-1/4 -left-4 w-3.5 h-3.5 rounded-full bg-caramel/50 pointer-events-none" />
            <div className="absolute top-1/2 -right-3 w-2.5 h-2.5 rounded-full bg-terracotta/40 pointer-events-none" />
            <div className="absolute top-12 left-1/3 w-2 h-2 rounded-full bg-caramel/60 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-chocolate/30 animate-bounce">
        <div className="w-px h-8 bg-chocolate/20 rounded-full" />
        <ArrowDownIcon size={14} />
      </div>
    </section>
  )
}
