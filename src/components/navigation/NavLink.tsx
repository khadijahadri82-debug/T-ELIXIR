import type { AnchorHTMLAttributes, ReactNode } from 'react'

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode
}

export function NavLink({ children, className = '', ...props }: NavLinkProps) {
  return (
    <a className={`nav-link ${className}`.trim()} {...props}>
      {children}
    </a>
  )
}
