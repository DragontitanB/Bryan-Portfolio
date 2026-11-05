import { motion } from 'motion/react'
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'
import type { ReactNode } from 'react'
import type { SectionId } from '../types/portfolio'
import { ArrowIcon } from './ArrowIcon'

interface SectionLinkProps {
  to: SectionId
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function SectionLink({ to, children, variant = 'primary' }: SectionLinkProps) {
  const reducedMotion = useReducedMotionPreference()

  return (
    <motion.a
      className={`button button--${variant}`} href={`#${to}`} initial={false}
      animate={{ y: 0, scale: 1 }}
      whileHover={reducedMotion === false ? { y: -2 } : undefined}
      whileFocus={reducedMotion === false ? { y: -2 } : undefined}
      whileTap={reducedMotion === false ? { scale: 0.98 } : undefined}
      transition={{ duration: reducedMotion ? 0 : 0.18 }}
    >
      {children}
      <ArrowIcon />
    </motion.a>
  )
}
