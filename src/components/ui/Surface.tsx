import { HTMLAttributes, ReactNode } from 'react'

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export function Surface({ children, className = '', ...props }: SurfaceProps) {
  return (
    <div className={`surface ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
