import { HTMLAttributes } from 'react'

export function Footer({ className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return <footer className={`footer ${className}`.trim()} {...props} />
}
