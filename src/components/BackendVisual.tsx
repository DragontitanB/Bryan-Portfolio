import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'
import { useMediaQuery } from '../hooks/useMediaQuery'
import backendLayers from '../assets/backend-layers.svg'
import { useLanguage } from '../hooks/useLanguage'

export function BackendVisual() {
  const scope = useRef<HTMLDivElement>(null)
  const inView = useInView(scope)
  const reducedMotion = useReducedMotionPreference()
  const hasFinePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const floating = inView && reducedMotion === false && hasFinePointer
  const { t } = useLanguage()

  return (
    <div className="backend-visual" aria-hidden="true" ref={scope}>
      <div className="visual-topline"><span>{t.backendVisual.topline}</span><span className="visual-cross">+</span></div>
      <div className="visual-stage">
        <span className="visual-axis">{t.backendVisual.axis}</span>
        <motion.img
          className="backend-art" src={backendLayers} alt="" width="560" height="560"
          initial={false}
          animate={{ y: floating ? [0, -4, 0] : 0 }}
          transition={floating ? { duration: 7, repeat: Infinity, ease: 'easeInOut' } : { duration: 0 }}
        />
        <span className="visual-tag visual-tag--top">{t.backendVisual.logicTag}</span>
        <span className="visual-tag visual-tag--bottom">{t.backendVisual.structureTag}</span>
      </div>
      <div className="visual-bottomline"><span><i />C# / .NET</span><span>{t.backendVisual.bottomline}</span></div>
    </div>
  )
}
