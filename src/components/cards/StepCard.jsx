export default function StepCard({ step, isLast = false }) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Number bubble */}
      <div className="w-16 h-16 rounded-full bg-caramel text-white text-xl font-bold flex items-center justify-center mb-4 shadow-lg shadow-caramel/30 flex-shrink-0">
        {step.number}
      </div>

      {/* Icon */}
      <div className="text-4xl mb-4 select-none">{step.icon}</div>

      {/* Content */}
      <h3 className="font-serif text-xl text-chocolate mb-2">{step.title}</h3>
      <p className="text-chocolate/60 text-sm leading-relaxed max-w-[220px]">
        {step.description}
      </p>

      {/* Arrow connector — shown between steps on desktop */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(50%+60px)] right-0 h-px">
          <div className="w-full flex items-center">
            <div className="flex-1 border-t-2 border-dashed border-warm-border" />
            <span className="text-warm-border text-lg ml-1">›</span>
          </div>
        </div>
      )}
    </div>
  )
}
