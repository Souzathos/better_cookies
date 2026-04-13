import SectionHeader from '../components/ui/SectionHeader'
import TestimonialCard from '../components/cards/TestimonialCard'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { testimonials } from '../data/testimonials'

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="depoimentos" className="bg-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <SectionHeader
            eyebrow="Depoimentos"
            title="Quem prova, volta."
            subtitle="A gente não precisa falar muito — o produto fala por si. Mas nossos clientes adoram falar também."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              style={{
                transition: `all 0.6s ease ${i * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <TestimonialCard testimonial={testimonial} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
