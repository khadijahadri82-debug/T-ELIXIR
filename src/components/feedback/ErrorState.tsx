import { HTMLAttributes, ReactNode } from 'react'

export interface ErrorStateProps extends HTMLAttributes<HTMLElement> {
  title?: string
  message?: string
  children?: ReactNode
}

export function ErrorState({ title, message, children, className = '', ...props }: ErrorStateProps) {
  return (
    <section className={`error-state ${className}`.trim()} {...props}>
      {title ? <h2>{title}</h2> : null}
      {message ? <p>{message}</p> : null}
      {children}
    </section>
  )
}
