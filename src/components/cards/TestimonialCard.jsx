const avatarGradients = [
  'from-caramel to-terracotta',
  'from-chocolate to-chocolate-dark',
  'from-terracotta to-caramel',
  'from-[#8B4513] to-caramel',
  'from-caramel to-[#E8A050]',
  'from-chocolate-dark to-terracotta',
]

export default function TestimonialCard({ testimonial, index = 0 }) {
  const gradient = avatarGradients[index % avatarGradients.length]

  return (
    <div className="bg-cream-card rounded-2xl p-6 border border-warm-border/60 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      {/* Opening quote */}
      <div className="text-caramel text-5xl font-serif leading-none mb-2 select-none">"</div>

      {/* Text */}
      <p className="text-chocolate/75 text-sm leading-relaxed flex-1 mb-5 italic">
        {testimonial.text}
      </p>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-caramel text-sm">★</span>
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
        >
          {testimonial.avatar}
        </div>
        <span className="text-chocolate font-semibold text-sm">{testimonial.name}</span>
      </div>
    </div>
  )
}
