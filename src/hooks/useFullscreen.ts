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
      } else if ((element as HTMLElement & { webkitRequestFullscreen?: () => Promise<void> }).webkitRequestFullscreen) {
        await (element as HTMLElement & { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen()
      }
    } catch (error) {
      console.warn('Fullscreen not supported:', error)
    }
  }, [elementRef])

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
      } else if ((document as Document & { webkitExitFullscreen?: () => Promise<void> }).webkitExitFullscreen) {
        await (document as Document & { webkitExitFullscreen: () => Promise<void> }).webkitExitFullscreen()
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
