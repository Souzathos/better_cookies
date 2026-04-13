import SectionHeader from '../components/ui/SectionHeader'
import StepCard from '../components/cards/StepCard'
import CTAButton from '../components/ui/CTAButton'
import { WhatsAppIcon } from '../components/ui/icons'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { orderSteps } from '../data/siteConfig'
import { generateWhatsAppLink, generalOrderMessage } from '../utils/whatsapp'

export default function HowToOrderSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="como-pedir" className="bg-cream-alt py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <SectionHeader
            eyebrow="Como pedir"
            title="Simples assim."
            subtitle="Em 3 passos você já está com seus cookies chegando até você."
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mt-4 mb-14 relative">
          {orderSteps.map((step, i) => (
            <div
              key={step.number}
              style={{
                transition: `all 0.6s ease ${i * 0.2}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              <StepCard step={step} isLast={i === orderSteps.length - 1} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            transition: 'all 0.7s ease 0.6s',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <CTAButton
            variant="whatsapp"
            size="lg"
            href={generateWhatsAppLink(generalOrderMessage())}
            icon={<WhatsAppIcon size={18} />}
          >
            Começar meu pedido
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
