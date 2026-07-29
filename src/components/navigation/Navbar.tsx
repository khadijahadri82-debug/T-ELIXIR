import type { HTMLAttributes } from 'react'

export function Navbar({ className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return <nav className={`navbar ${className}`.trim()} {...props} />
}
