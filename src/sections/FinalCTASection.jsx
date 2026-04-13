import { Clock, Cookie, Heart } from 'lucide-react'
import CTAButton from '../components/ui/CTAButton'
import { WhatsAppIcon } from '../components/ui/icons'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { generateWhatsAppLink, generalOrderMessage } from '../utils/whatsapp'

export default function FinalCTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden text-center"
      style={{
        background: 'linear-gradient(135deg, #C8883C 0%, #B85C38 50%, #9B3E20 100%)',
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 max-w-2xl mx-auto px-4 sm:px-6 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-6xl mb-6 select-none animate-float">🍪</div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5">
          Bora matar essa vontade?
        </h2>

        <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-md mx-auto">
          Seus cookies estão te esperando. É só chamar no WhatsApp que a gente resolve.
        </p>

        <CTAButton
          variant="white"
          size="xl"
          href={generateWhatsAppLink(generalOrderMessage())}
          icon={<WhatsAppIcon size={22} />}
          className="text-chocolate font-bold shadow-2xl hover:shadow-white/20"
        >
          Pedir agora pelo WhatsApp
        </CTAButton>

        <div className="mt-6 flex items-center justify-center gap-5 text-white/40 text-xs flex-wrap">
          <span className="flex items-center gap-1.5">
            <Clock size={13} strokeWidth={1.75} />
            Atendimento rápido
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5">
            <Cookie size={13} strokeWidth={1.75} />
            Cookies fresquinhos
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5">
            <Heart size={13} strokeWidth={1.75} />
            Feitos com amor
          </span>
        </div>
      </div>
    </section>
  )
}
