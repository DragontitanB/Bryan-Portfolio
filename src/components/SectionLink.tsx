import type { ReactNode } from 'react'
import type { SectionId } from '../types/portfolio'
import { ArrowIcon } from './ArrowIcon'

interface SectionLinkProps {
  to: SectionId
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function SectionLink({ to, children, variant = 'primary' }: SectionLinkProps) {
  return (
    <a className={`button button--${variant}`} href={`#${to}`}>
      {children}
      <ArrowIcon />
    </a>
  )
}
