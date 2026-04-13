import { generateWhatsAppLink, cookieOrderMessage } from '../../utils/whatsapp'

const textureStyle = {
  backgroundImage:
    'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
  backgroundSize: '14px 14px',
}

export default function CookieMenuCard({ cookie }) {
  const whatsappHref = generateWhatsAppLink(cookieOrderMessage(cookie.whatsappName))

  return (
    <div className="group bg-cream-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-250 hover:-translate-y-1 border border-warm-border/40 flex flex-col">
      {/* Image / Gradient area */}
      <div className="relative h-36 overflow-hidden flex-shrink-0">
        {cookie.image ? (
          <img
            src={cookie.image}
            alt={cookie.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center relative"
            style={{ background: cookie.gradient }}
          >
            <div className="absolute inset-0" style={textureStyle} />
            <span
              className="text-4xl relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md select-none"
              role="img"
              aria-label={cookie.name}
            >
              🍪
            </span>
          </div>
        )}

        {cookie.badge && (
          <span className="absolute top-2 left-2 bg-caramel text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {cookie.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-serif text-base text-chocolate mb-1 leading-snug">
          {cookie.name}
        </h3>
        <p className="text-chocolate/55 text-xs leading-relaxed flex-1 mb-3 line-clamp-2">
          {cookie.description}
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-transparent border border-warm-border text-chocolate/70 hover:bg-caramel hover:text-white hover:border-caramel text-xs font-semibold py-2 px-4 rounded-xl transition-all duration-200 active:scale-95"
        >
          Quero esse!
        </a>
      </div>
    </div>
  )
}
