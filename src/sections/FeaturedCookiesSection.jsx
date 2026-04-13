import SectionHeader from '../components/ui/SectionHeader'
import CookieCard from '../components/cards/CookieCard'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { featuredCookies } from '../data/cookies'

export default function FeaturedCookiesSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="queridinhos"
      className="bg-cream py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <SectionHeader
            eyebrow="Os queridinhos"
            title="Impossível pedir só um."
            subtitle="Nossos campeões de pedido. Feitos com ingredientes que fazem toda a diferença."
          />
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex md:hidden gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
          {featuredCookies.map((cookie, i) => (
            <div
              key={cookie.id}
              className="snap-start flex-shrink-0 w-72"
              style={{
                transition: `all 0.5s ease ${i * 0.15}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <CookieCard cookie={cookie} />
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {featuredCookies.map((cookie, i) => (
            <div
              key={cookie.id}
              style={{
                transition: `all 0.6s ease ${i * 0.15}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              <CookieCard cookie={cookie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
