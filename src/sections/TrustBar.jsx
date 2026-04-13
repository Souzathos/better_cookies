import { trustItems } from '../data/siteConfig'

export default function TrustBar() {
  return (
    <div className="bg-chocolate text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-cream/10">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 py-5 px-4 text-center sm:text-left"
            >
              <span className="text-2xl select-none">{item.icon}</span>
              <div>
                <p className="font-serif text-xl text-caramel font-bold leading-none">
                  {item.value}
                </p>
                <p className="text-xs text-cream/55 mt-0.5 leading-tight">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
