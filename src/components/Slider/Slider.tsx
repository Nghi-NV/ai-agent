import { AnimatePresence, motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { useKeyboard } from '../../hooks'

interface SliderProps {
  children: ReactNode[]
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function Slider({
  children,
  className = '',
  autoPlay = false,
  autoPlayInterval = 5000
}: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPresenting, setIsPresenting] = useState(false)

  const totalSlides = children.length

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const exitPresentation = useCallback(() => {
    setIsPresenting(false)
  }, [])

  const togglePresentation = useCallback(() => {
    setIsPresenting(prev => !prev)
  }, [])

  const startPresentation = useCallback(() => {
    setIsPresenting(true)
    setCurrentSlide(0)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !isPresenting) return
    const timer = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(timer)
  }, [autoPlay, autoPlayInterval, isPresenting, nextSlide])

  // Keyboard navigation - P key works even when not presenting
  useKeyboard({
    onNext: nextSlide,
    onPrev: prevSlide,
    onEscape: exitPresentation,
    onFullscreen: () => { }, // No-op or remove if supported
    onTogglePresentation: togglePresentation,
    isPresenting,
  })

  // ========== LANDING PAGE MODE ==========
  if (!isPresenting) {
    return (
      <div className={`relative ${className} overflow-x-hidden overflow-y-auto`}>
        {/* Background gradient orbs */}
        {/* Static background for better scroll performance */}
        <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        {/* Landing Content - Layout fixed for scrolling */}
        <div className="w-full min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl w-full mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex p-5 bg-primary/20 rounded-3xl mb-8 glow"
            >
              <Play className="w-12 h-12 text-primary" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-accent uppercase tracking-wider mb-4 text-sm font-medium"
            >
              Knowledge Sharing Session
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">Sử Dụng AI</span>
              <br />
              <span className="text-white/80">Trong Công Việc</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto"
            >
              Hướng dẫn toàn diện về Prompt Engineering, AI Tools,
              và cách áp dụng AI vào quy trình phát triển phần mềm (SDLC).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center"
            >
              <button
                onClick={startPresentation}
                className="px-8 py-4 bg-primary hover:bg-primary-light text-white font-semibold 
                           rounded-xl glow transition-all duration-300 flex items-center gap-3
                           text-lg cursor-pointer hover:scale-105"
              >
                <Play className="w-5 h-5" />
                Bắt đầu
              </button>
            </motion.div>

            {/* Session Agenda List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-24 text-left max-w-3xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-8 text-center bg-white/10 py-3 rounded-lg">Nội Dung Chương Trình</h3>
              <div className="space-y-6">
                {[
                  { title: 'Viết Prompt Hiệu Quả', desc: 'Cách viết prompt để AI hiểu đúng ý bạn' },
                  { title: 'Công Cụ AI', desc: 'ChatGPT, Claude, Gemini, Cursor, Antigravity' },
                  { title: 'Skills & Workflows', desc: 'Tính năng mới trong IDE giúp AI hiểu project' },
                  { title: 'Mẹo & Lỗi Hay Gặp', desc: 'Kinh nghiệm từ thực tế' },
                  { title: 'BMAD & Spec Kit', desc: 'Phương pháp làm việc với AI agents' },
                  { title: 'Ví Dụ Thực Tế', desc: 'Lumi Tester, Android Mirror và các dự án khác' },
                  { title: 'Hỏi Đáp', desc: 'Trao đổi, thảo luận' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* All Slides Content - Scrollable with optimized rendering */}
        <div className="w-full">
          {children.map((child, index) => (
            <section
              key={index}
              className="min-h-screen w-full py-8 transform-gpu"
            >
              {child}
            </section>
          ))}
        </div>
      </div>
    )
  }

  // ========== PRESENTATION MODE ==========
  return (
    <div className={`fixed inset-0 z-50 bg-bg-base ${className}`}>
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Slides */}
      <div className="relative h-full flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full h-full"
          >
            {children[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
