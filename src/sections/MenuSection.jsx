import { useState } from 'react'
import SectionHeader from '../components/ui/SectionHeader'
import CookieMenuCard from '../components/cards/CookieMenuCard'
import CTAButton from '../components/ui/CTAButton'
import { WhatsAppIcon } from '../components/ui/icons'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { menuCookies, menuCategories } from '../data/cookies'
import { generateWhatsAppLink, generalOrderMessage } from '../utils/whatsapp'

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const { ref, isVisible } = useScrollAnimation()

  const filtered =
    activeCategory === 'todos'
      ? menuCookies
      : menuCookies.filter((c) => c.category === activeCategory)

  return (
    <section id="cardapio" className="bg-cream-alt py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <SectionHeader
            eyebrow="Cardápio"
            title="Escolha seus favoritos."
            subtitle="Todos feitos com ingredientes selecionados. Escolha os seus e monte um pedido irresistível."
          />

          {/* Category filters */}
          <div className="flex gap-2.5 justify-center mb-10 flex-wrap">
            {menuCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-caramel text-white shadow-md shadow-caramel/30'
                    : 'bg-cream-card text-chocolate/60 hover:text-chocolate border border-warm-border hover:border-caramel/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cookie grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
          {filtered.map((cookie, i) => (
            <div
              key={cookie.id}
              style={{
                transition: `all 0.5s ease ${(i % 5) * 0.07}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              <CookieMenuCard cookie={cookie} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-chocolate/50 text-sm mb-4">
            Está com dúvida? A gente te ajuda a montar o pedido perfeito.
          </p>
          <CTAButton
            variant="whatsapp"
            size="lg"
            href={generateWhatsAppLink(generalOrderMessage())}
            icon={<WhatsAppIcon size={18} />}
          >
            Montar meu pedido
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
