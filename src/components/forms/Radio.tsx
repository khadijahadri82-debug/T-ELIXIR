import type { InputHTMLAttributes } from 'react'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Radio({ label, className = '', ...props }: RadioProps) {
  return <input type="radio" className={`radio ${className}`.trim()} {...props} aria-label={label} />
}
