import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface SlideProps {
  title: string
  subtitle?: string
  description?: string
  children?: ReactNode
  icon?: LucideIcon
  image?: string
  align?: 'left' | 'center' | 'right'
  layout?: 'default' | 'split' | 'fullbleed'
  className?: string
}

export function Slide({
  title,
  subtitle,
  description,
  children,
  icon: Icon,
  image,
  align = 'center',
  layout = 'default',
  className = ''
}: SlideProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  if (layout === 'split') {
    return (
      <div className={`h-full w-full overflow-y-auto ${className}`}>
        <div className="min-h-full w-full flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12">
          {/* Left: Content */}
          <motion.div variants={container} initial="hidden" animate="show"
            className="flex flex-col justify-center order-2 lg:order-1">
            {subtitle && <motion.p variants={item} className="text-accent uppercase tracking-wider mb-2 lg:mb-3 text-xs sm:text-sm font-medium">{subtitle}</motion.p>}
            <motion.h2 variants={item} className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">{title}</motion.h2>
            {description && <motion.p variants={item} className="text-base lg:text-xl text-white/70 mb-4 lg:mb-8">{description}</motion.p>}
            {children && <motion.div variants={item}>{children}</motion.div>}
          </motion.div>
          {/* Right: Visual */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center order-1 lg:order-2 mb-4 lg:mb-0">
            {image && <img src={image} alt="" className="rounded-2xl shadow-2xl max-h-[30vh] lg:max-h-[80vh] w-auto object-contain" />}
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className={`h-full w-full overflow-y-auto ${className}`}>
      <div className={`min-h-full w-full flex flex-col justify-center p-4 sm:p-8 md:p-12 lg:p-16 ${alignmentClasses[align]}`}>
        <motion.div variants={container} initial="hidden" animate="show"
          className="max-w-5xl w-full bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-14 shadow-2xl my-auto">
          {Icon && (
            <motion.div variants={item} className="mb-4 lg:mb-6">
              <div className="inline-flex p-3 lg:p-4 bg-primary/20 rounded-xl lg:rounded-2xl glow">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
              </div>
            </motion.div>
          )}
          {subtitle && <motion.p variants={item} className="text-xs sm:text-sm md:text-base font-medium text-accent uppercase tracking-wider mb-2 lg:mb-3">{subtitle}</motion.p>}
          <motion.h2 variants={item} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent leading-tight mb-3 lg:mb-6">{title}</motion.h2>
          {description && <motion.p variants={item} className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl leading-relaxed mb-4 lg:mb-8">{description}</motion.p>}
          {children && <motion.div variants={item}>{children}</motion.div>}
        </motion.div>
      </div>
    </div>
  )
}
