export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light = false,
  centered = true,
  className = '',
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <span
          className={`block text-sm font-semibold tracking-widest uppercase mb-3 ${
            light ? 'text-caramel' : 'text-caramel'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 ${
          light ? 'text-cream' : 'text-chocolate'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed max-w-xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-cream/60' : 'text-chocolate/60'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
