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
          <div className="relative w-full aspect-square max-w-[380px]">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-caramel/25 to-terracotta/15 scale-110 blur-2xl" />

            {/* Middle decorative ring */}
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-caramel/20 animate-[spin_30s_linear_infinite]" />

            {/* Main cookie display */}
            <div
              className="relative w-full h-full rounded-[2.5rem] lg:rounded-[3rem] flex items-center justify-center overflow-hidden shadow-2xl shadow-chocolate/20"
              style={{
                background: 'linear-gradient(145deg, #C8883C 0%, #B85C38 50%, #8B3A20 100%)',
              }}
            >
              {/* Texture overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              {/* Cookie emoji — animated */}
              <span
                className="text-[7rem] sm:text-[8rem] relative z-10 select-none animate-float drop-shadow-2xl"
                role="img"
                aria-label="Cookie artesanal"
              >
                🍪
              </span>
            </div>

            {/* Floating badge: rating */}
            <div className="absolute -top-3 -right-4 sm:top-4 sm:right-0 lg:-right-6 bg-cream-card rounded-2xl shadow-lg shadow-chocolate/15 px-3.5 py-2.5 flex items-center gap-2 border border-warm-border/50 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <span className="text-lg select-none">⭐</span>
              <div>
                <p className="text-xs font-bold text-chocolate leading-none">4.9</p>
                <p className="text-[10px] text-chocolate/50 leading-none mt-0.5">Avaliação</p>
              </div>
            </div>

            {/* Floating badge: artisanal */}
            <div className="absolute -bottom-3 -left-4 sm:bottom-4 sm:left-0 lg:-left-6 bg-cream-card rounded-2xl shadow-lg shadow-chocolate/15 px-3.5 py-2.5 flex items-center gap-2 border border-warm-border/50 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
              <span className="text-lg select-none">🤲</span>
              <div>
                <p className="text-xs font-bold text-chocolate leading-none">100%</p>
                <p className="text-[10px] text-chocolate/50 leading-none mt-0.5">Artesanal</p>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute top-1/4 -left-3 w-3.5 h-3.5 rounded-full bg-caramel/50" />
            <div className="absolute bottom-1/3 -right-2 w-2.5 h-2.5 rounded-full bg-terracotta/40" />
            <div className="absolute top-8 left-1/3 w-2 h-2 rounded-full bg-caramel/60" />
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
