import type { HTMLAttributes, ReactNode } from 'react'

export interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}

export function SectionTitle({ children, className = '', ...props }: SectionTitleProps) {
  return (
    <h2 className={`section-title ${className}`.trim()} {...props}>
      {children}
    </h2>
  )
}
