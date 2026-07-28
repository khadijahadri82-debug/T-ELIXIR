import { HTMLAttributes, ReactNode } from 'react'

export interface EmptyStateProps extends HTMLAttributes<HTMLElement> {
  title?: string
  description?: string
  children?: ReactNode
}

export function EmptyState({ title, description, children, className = '', ...props }: EmptyStateProps) {
  return (
    <section className={`empty-state ${className}`.trim()} {...props}>
      {title ? <h2>{title}</h2> : null}
      {description ? <p>{description}</p> : null}
      {children}
    </section>
  )
}
