# Keyboard Navigation Hook

Custom hooks for keyboard shortcuts, fullscreen toggle, and slide progress tracking.

## useKeyboard Hook

Handles all keyboard navigation in presentation mode.

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` / `↓` / `Space` / `Enter` | Next slide |
| `←` / `↑` | Previous slide |
| `Escape` | Exit presentation mode |
| `F` | Toggle fullscreen |
| `P` | Toggle presentation mode |

### Implementation

```typescript
import { useEffect, useCallback } from 'react'

interface UseKeyboardOptions {
  onNext: () => void
  onPrev: () => void
  onEscape: () => void
  onFullscreen: () => void
  onTogglePresentation: () => void
  enabled?: boolean
}

export function useKeyboard({
  onNext,
  onPrev,
  onEscape,
  onFullscreen,
  onTogglePresentation,
  enabled = true
}: UseKeyboardOptions) {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!enabled) return

    // Prevent default for navigation keys
    const navigationKeys = [
      'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown',
      'Space', 'Escape', 'Enter', 'KeyF', 'KeyP'
    ]
    
    if (navigationKeys.includes(event.code)) {
      event.preventDefault()
    }

    switch (event.code) {
      // Next slide
      case 'ArrowRight':
      case 'ArrowDown':
      case 'Space':
      case 'Enter':
        onNext()
        break

      // Previous slide
      case 'ArrowLeft':
      case 'ArrowUp':
        onPrev()
        break

      // Exit presentation
      case 'Escape':
        onEscape()
        break

      // Toggle fullscreen
      case 'KeyF':
        onFullscreen()
        break

      // Toggle presentation mode
      case 'KeyP':
        onTogglePresentation()
        break
    }
  }, [enabled, onNext, onPrev, onEscape, onFullscreen, onTogglePresentation])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])
}
```

---

## useFullscreen Hook

Handles fullscreen mode toggle with cross-browser support.

```typescript
import { useCallback, useState, useEffect } from 'react'

export function useFullscreen(elementRef?: React.RefObject<HTMLElement>) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(document.fullscreenElement !== null)
    }
    document.addEventListener('fullscreenchange', handleChange)
    return () => document.removeEventListener('fullscreenchange', handleChange)
  }, [])

  const enterFullscreen = useCallback(async () => {
    const element = elementRef?.current || document.documentElement
    
    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen()
      } else if ((element as any).webkitRequestFullscreen) {
        await (element as any).webkitRequestFullscreen()
      }
    } catch (error) {
      console.warn('Fullscreen not supported:', error)
    }
  }, [elementRef])

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
      } else if ((document as any).webkitExitFullscreen) {
        await (document as any).webkitExitFullscreen()
      }
    } catch (error) {
      console.warn('Exit fullscreen failed:', error)
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }, [enterFullscreen, exitFullscreen])

  return {
    isFullscreen,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen
  }
}
```

---

## useSlideProgress Hook

Tracks current slide progress for progress bars and indicators.

```typescript
export function useSlideProgress(current: number, total: number) {
  return {
    current,
    total,
    progress: total > 0 ? ((current + 1) / total) * 100 : 0,
    isFirst: current === 0,
    isLast: current === total - 1,
    label: `${current + 1} / ${total}`
  }
}
```

### Usage Example

```tsx
function SlideIndicator({ current, total }: { current: number; total: number }) {
  const { progress, label, isFirst, isLast } = useSlideProgress(current, total)
  
  return (
    <div className="flex items-center gap-4">
      <span className="text-white/50">{label}</span>
      <div className="w-40 h-1 bg-white/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
```
