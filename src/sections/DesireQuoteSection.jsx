import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function DesireQuoteSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  return (
    <section className="bg-chocolate-dark py-24 lg:py-32 overflow-hidden relative">
      {/* Background giant cookie — decorative */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden opacity-[0.04]"
        aria-hidden="true"
      >
        <span className="text-[32rem] leading-none">🍪</span>
      </div>

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-caramel/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-caramel/8 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream leading-[1.15] tracking-tight">
            "Cada mordida é um{' '}
            <span className="text-caramel italic">abraço de chocolate.</span>"
          </p>

          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="w-12 h-0.5 bg-caramel rounded-full" />
            <p className="text-cream/40 text-sm tracking-[0.25em] uppercase font-medium mt-1">
              Better Cookies
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
