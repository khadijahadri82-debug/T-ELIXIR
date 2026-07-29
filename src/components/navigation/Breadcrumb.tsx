import type { HTMLAttributes, ReactNode } from 'react'

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
}

export function Breadcrumb({ children, className = '', ...props }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`breadcrumb ${className}`.trim()} {...props}>
      {children}
    </nav>
  )
}
