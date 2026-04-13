import logo from '../assets/logo.png'
import SectionHeader from '../components/ui/SectionHeader'
import { ArrowRightIcon, InstagramIcon } from '../components/ui/icons'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { siteConfig } from '../data/siteConfig'

export default function BrandStorySection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation()
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation()

  return (
    <section
      id="sobre"
      className="bg-chocolate-dark py-20 lg:py-32 overflow-hidden relative"
    >
      {/* Subtle decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-caramel/5 blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: text ── */}
          <div
            ref={leftRef}
            className={`transition-all duration-800 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="block text-sm font-semibold tracking-widest uppercase mb-4 text-caramel">
              Nossa história
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-cream leading-tight mb-8">
              Feitos com amor desde{' '}
              <span className="text-caramel italic">o primeiro dia.</span>
            </h2>

            <div className="space-y-5">
              <p className="text-cream/65 text-lg leading-relaxed">
                A Better Cookies nasceu de uma paixão genuína por cookies feitos do
                jeito certo: ingredientes de verdade, receitas aperfeiçoadas ao longo
                do tempo, carinho em cada etapa do processo.
              </p>
              <p className="text-cream/65 text-lg leading-relaxed">
                São mais de 2 anos adoçando a vida de pessoas que nos descobrem e
                nunca mais conseguem pedir de outro lugar. Não é exagero — é o que
                a gente ouve todo dia.
              </p>
              <p className="text-cream/65 text-lg leading-relaxed">
                Cada lote é preparado com atenção, porque acreditamos que comida feita
                com amor tem um sabor que nenhuma fábrica consegue imitar.
              </p>
            </div>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-caramel hover:text-caramel/75 font-semibold transition-colors mt-8 group"
            >
              <InstagramIcon size={18} />
              Nos siga no Instagram
              <ArrowRightIcon size={15} />
            </a>
          </div>

          {/* ── Right: visual ── */}
          <div
            ref={rightRef}
            className={`transition-all duration-800 delay-200 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Main card */}
              <div
                className="rounded-3xl p-10 text-center relative overflow-hidden border border-caramel/20"
                style={{
                  background: 'linear-gradient(145deg, rgba(200,136,60,0.12) 0%, rgba(42,24,16,0.8) 50%, rgba(200,136,60,0.08) 100%)',
                }}
              >
                {/* Texture */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="h-32 w-32 rounded-full overflow-hidden shadow-2xl shadow-black/40 ring-4 ring-caramel/25 flex items-center justify-center">
                      <img
                        src={logo}
                        alt="Better Cookies"
                        className="w-full h-full object-cover scale-[1.6] mr-3 mt-1"
                      />
                    </div>
                  </div>
                  <p className="font-serif text-3xl text-cream mb-2">
                    {siteConfig.name}
                  </p>
                  <p className="text-caramel/80 text-sm tracking-widest uppercase font-medium mb-8">
                    Desde 2022
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {[
                      { value: '+2 anos', label: 'de história' },
                      { value: '+5.000', label: 'cookies entregues' },
                      { value: '4.9★', label: 'avaliação' },
                      { value: '100%', label: 'artesanal' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-cream/5 border border-caramel/15 rounded-2xl p-4"
                      >
                        <p className="font-serif text-xl text-caramel">{stat.value}</p>
                        <p className="text-cream/45 text-xs mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full border border-caramel/15 pointer-events-none" />
              <div className="absolute -bottom-7 -left-7 w-36 h-36 rounded-full border border-caramel/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
