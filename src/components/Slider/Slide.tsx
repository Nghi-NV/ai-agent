import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

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
  // Text alignment cho nội dung bên trong card
  const textAlignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
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
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center order-2 lg:order-1 transform-gpu">
            {subtitle && <motion.p variants={item} className="text-accent uppercase tracking-wider mb-2 lg:mb-3 text-xs sm:text-sm font-medium">{subtitle}</motion.p>}
            <motion.h2 variants={item} className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">{title}</motion.h2>
            {description && <motion.p variants={item} className="text-base lg:text-xl text-white/70 mb-4 lg:mb-8">{description}</motion.p>}
            {children && <motion.div variants={item}>{children}</motion.div>}
          </motion.div>
          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center justify-center order-1 lg:order-2 mb-4 lg:mb-0 transform-gpu">
            {image && <img src={image} alt="" className="rounded-2xl shadow-2xl max-h-[30vh] lg:max-h-[80vh] w-auto object-contain" />}
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className={`h-full w-full overflow-y-auto ${className}`}>
      {/* Container luôn căn giữa màn hình với items-center */}
      <div className="min-h-full w-full flex flex-col justify-center items-center p-4 sm:p-8 md:p-12 lg:p-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl w-full bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 lg:p-14 shadow-2xl my-auto transform-gpu">
          {/* Header section - follows slide alignment */}
          <div className={textAlignmentClasses[align]}>
            {Icon && (
              <motion.div variants={item} className="mb-4 lg:mb-6">
                <div className="inline-flex p-3 lg:p-4 bg-primary/20 rounded-xl lg:rounded-2xl glow">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
              </motion.div>
            )}
            {subtitle && <motion.p variants={item} className="text-xs sm:text-sm md:text-base font-medium text-accent uppercase tracking-wider mb-2 lg:mb-3">{subtitle}</motion.p>}
            <motion.h2 variants={item} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent leading-tight mb-3 lg:mb-6">{title}</motion.h2>
            {description && <motion.p variants={item} className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl leading-relaxed mb-4 lg:mb-8 mx-auto">{description}</motion.p>}
          </div>
          {/* Content section - always left-aligned for proper table/list display */}
          {children && <motion.div variants={item} className="text-left">{children}</motion.div>}
        </motion.div>
      </div>
    </div>
  )
}
