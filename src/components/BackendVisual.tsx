import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'
import backendLayers from '../assets/backend-layers.svg'

export function BackendVisual() {
  const scope = useRef<HTMLDivElement>(null)
  const inView = useInView(scope)
  const reducedMotion = useReducedMotionPreference()
  const floating = inView && reducedMotion === false

  return (
    <div className="backend-visual" aria-hidden="true" ref={scope}>
      <div className="visual-topline"><span>THE BACKEND LAB</span><span className="visual-cross">+</span></div>
      <div className="visual-stage">
        <span className="visual-axis">LOGIC MEETS STRUCTURE</span>
        <motion.img
          className="backend-art" src={backendLayers} alt="" width="560" height="560"
          initial={false}
          animate={{ y: floating ? [0, -4, 0] : 0 }}
          transition={floating ? { duration: 7, repeat: Infinity, ease: 'easeInOut' } : { duration: 0 }}
        />
        <span className="visual-tag visual-tag--top">&#123; logic &#125;</span>
        <span className="visual-tag visual-tag--bottom">&lt; structure /&gt;</span>
      </div>
      <div className="visual-bottomline"><span><i />C# / .NET</span><span>BEHIND THE INTERFACE ↗</span></div>
    </div>
  )
}
