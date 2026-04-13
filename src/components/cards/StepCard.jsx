import { Cookie, MessageCircle, Package } from 'lucide-react'
import { ChevronRight } from '../ui/icons'

const ICONS = { Cookie, MessageCircle, Package }

export default function StepCard({ step, isLast = false }) {
  const Icon = ICONS[step.iconName]

  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Number bubble */}
      <div className="w-16 h-16 rounded-full bg-caramel text-white text-xl font-bold flex items-center justify-center mb-5 shadow-lg shadow-caramel/30 flex-shrink-0">
        {step.number}
      </div>

      {/* Lucide icon */}
      {Icon && (
        <div className="mb-4 text-caramel">
          <Icon size={32} strokeWidth={1.5} />
        </div>
      )}

      {/* Content */}
      <h3 className="font-serif text-xl text-chocolate mb-2">{step.title}</h3>
      <p className="text-chocolate/60 text-sm leading-relaxed max-w-[220px]">
        {step.description}
      </p>

      {/* Arrow connector — shown between steps on desktop */}
      {!isLast && (
        <div className="hidden md:flex absolute top-8 left-[calc(50%+60px)] right-0 items-center">
          <div className="flex-1 border-t-2 border-dashed border-warm-border" />
          <ChevronRight size={16} className="text-warm-border -ml-1 flex-shrink-0" />
        </div>
      )}
    </div>
  )
}
