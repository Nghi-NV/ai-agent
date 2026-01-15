# Slider Component

Main container that manages presentation mode, slide navigation, and animations.

## Props Interface

```typescript
interface SliderProps {
  children: ReactNode[]    // Array of Slide components
  className?: string       // Additional CSS classes
  autoPlay?: boolean       // Auto-advance slides (default: false)
  autoPlayInterval?: number // Interval in ms (default: 5000)
}
```

## Complete Implementation

```tsx
import { useState, useEffect, useCallback, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Presentation, X, Maximize } from 'lucide-react'
import { useKeyboard } from '../hooks/useKeyboard'
import { useFullscreen } from '../hooks/useFullscreen'

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
  const { isFullscreen, toggleFullscreen } = useFullscreen()
  
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

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !isPresenting) return
    const timer = setInterval(nextSlide, autoPlayInterval)
    return () => clearInterval(timer)
  }, [autoPlay, autoPlayInterval, isPresenting, nextSlide])

  // Keyboard navigation
  useKeyboard({
    onNext: nextSlide,
    onPrev: prevSlide,
    onEscape: exitPresentation,
    onFullscreen: toggleFullscreen,
    onTogglePresentation: togglePresentation,
    enabled: isPresenting,
  })

  // Presentation mode styles
  const presentationClasses = isPresenting
    ? 'fixed inset-0 z-50 bg-black'
    : ''

  return (
    <div className={`relative ${presentationClasses} ${className}`}>
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
      </div>

      {/* Slides */}
      <div className="relative h-full flex items-center justify-center">
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

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-glass-bg backdrop-blur-md border border-glass-border
                     hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Progress Dots */}
        <div className="flex gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-glass-bg backdrop-blur-md border border-glass-border
                     hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Top Controls */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-lg bg-glass-bg backdrop-blur-md border border-glass-border
                     hover:bg-white/20 transition-colors"
          aria-label="Toggle fullscreen"
        >
          <Maximize className="w-4 h-4" />
        </button>

        <button
          onClick={togglePresentation}
          className="p-2 rounded-lg bg-glass-bg backdrop-blur-md border border-glass-border
                     hover:bg-white/20 transition-colors"
          aria-label={isPresenting ? 'Exit presentation' : 'Start presentation'}
        >
          {isPresenting ? <X className="w-4 h-4" /> : <Presentation className="w-4 h-4" />}
        </button>
      </div>

      {/* Keyboard Shortcuts Hint */}
      {isPresenting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-4 right-4 text-xs text-white/40"
        >
          Press <kbd className="px-1 py-0.5 bg-white/10 rounded">Esc</kbd> to exit
        </motion.div>
      )}

      {/* Slide Counter */}
      <div className="absolute top-4 left-4 text-sm text-white/50">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  )
}
```

## Usage Example

```tsx
<Slider autoPlay autoPlayInterval={8000}>
  <Slide title="Welcome" subtitle="Introduction" />
  <Slide title="Features" icon={Sparkles} />
  <Slide title="Demo" align="left">
    <CodeBlock code="npm install..." />
  </Slide>
</Slider>
```
