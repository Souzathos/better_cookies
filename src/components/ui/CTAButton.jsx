const variants = {
  primary: 'bg-caramel hover:bg-terracotta text-white shadow-md hover:shadow-lg',
  whatsapp: 'bg-whatsapp hover:bg-green-600 text-white shadow-md hover:shadow-green-500/30 hover:shadow-lg',
  outline: 'border-2 border-caramel text-caramel hover:bg-caramel hover:text-white',
  dark: 'bg-chocolate hover:bg-chocolate-dark text-cream shadow-md hover:shadow-lg',
  white: 'bg-white hover:bg-cream text-chocolate shadow-lg hover:shadow-xl',
  ghost: 'text-chocolate/70 hover:text-chocolate underline-offset-4 hover:underline',
}

const sizes = {
  sm: 'px-4 py-2 text-xs font-semibold',
  md: 'px-5 py-2.5 text-sm font-semibold',
  lg: 'px-7 py-3.5 text-base font-semibold',
  xl: 'px-10 py-4 text-lg font-bold',
}

export default function CTAButton({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  icon,
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full',
    'transition-all duration-200 active:scale-95',
    variants[variant],
    sizes[size],
    className,
  ].join(' ')

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('https://')
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {icon}
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {icon}
      {children}
    </button>
  )
}
