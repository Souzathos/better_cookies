import { generateWhatsAppLink, cookieOrderMessage } from '../../utils/whatsapp'

const textureStyle = {
  backgroundImage:
    'radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)',
  backgroundSize: '18px 18px',
}

export default function CookieCard({ cookie }) {
  const whatsappHref = generateWhatsAppLink(cookieOrderMessage(cookie.whatsappName))

  return (
    <div className="group bg-cream-card rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-warm-border/40 flex flex-col h-full">
      {/* Image / Gradient area */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        {cookie.image ? (
          <img
            src={cookie.image}
            alt={cookie.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center relative"
            style={{ background: cookie.gradient }}
          >
            <div className="absolute inset-0" style={textureStyle} />
            <span
              className="text-7xl relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg select-none"
              role="img"
              aria-label={cookie.name}
            >
              🍪
            </span>
          </div>
        )}

        {/* Badge */}
        {cookie.badge && (
          <div className="absolute top-4 left-4 bg-caramel text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {cookie.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-chocolate mb-2 leading-snug">
          {cookie.name}
        </h3>
        <p className="text-chocolate/60 text-sm leading-relaxed flex-1 mb-5">
          {cookie.description}
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-chocolate hover:bg-chocolate-dark text-cream text-sm font-semibold py-3 px-6 rounded-2xl transition-all duration-200 hover:shadow-lg active:scale-95"
        >
          Quero esse! 🍪
        </a>
      </div>
    </div>
  )
}
