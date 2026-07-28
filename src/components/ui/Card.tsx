import { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'article' | 'section' | 'div'
  children?: ReactNode
}

export function Card({ as: Component = 'div', children, className = '', ...props }: CardProps) {
  return (
    <Component className={`card ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}
