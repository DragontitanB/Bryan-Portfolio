import { useEffect, useRef } from 'react'
import { stagger, useAnimate, useInView } from 'motion/react'
import { useReducedMotionPreference } from './useReducedMotionPreference'

interface RevealOptions {
  trigger?: 'load' | 'viewport'
  selector?: string
  delay?: number
}

export function useReveal<T extends HTMLElement>({
  trigger = 'viewport',
  selector,
  delay = 0,
}: RevealOptions = {}) {
  const [scope, animate] = useAnimate<T>()
  const inView = useInView(scope, { once: true, amount: 0.12 })
  const reducedMotion = useReducedMotionPreference()
  const played = useRef(false)
  const ready = trigger === 'load' || inView

  useEffect(() => {
    if (!ready || reducedMotion !== false || played.current || !scope.current) return

    const elements = selector
      ? Array.from(scope.current.querySelectorAll<HTMLElement>(selector))
      : [scope.current]
    if (!elements.length) return

    // Content starts visible in HTML/CSS. Only a running animation changes it.
    // Keep partial opacity so even an interrupted animation cannot hide content.
    played.current = true
    let finished = false
    const restore = () => {
      elements.forEach((element) => {
        element.style.removeProperty('opacity')
        element.style.removeProperty('transform')
      })
    }

    let animation: ReturnType<typeof animate>
    try {
      animation = animate(elements, { opacity: [0.45, 1], y: [10, 0] }, {
        duration: 0.6,
        delay: stagger(0.09, { startDelay: delay }),
        ease: [0.22, 1, 0.36, 1],
      })
    } catch {
      restore()
      return
    }

    void animation.then(() => {
      finished = true
      restore()
    }, restore)

    return () => {
      animation.stop()
      restore()
      // Allow React StrictMode to restart an entrance cancelled during setup.
      if (!finished) played.current = false
    }
  }, [animate, delay, ready, reducedMotion, scope, selector])

  return scope
}
