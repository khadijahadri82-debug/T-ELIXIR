import { SelectHTMLAttributes } from 'react'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
}

export function Select({ label, className = '', children, ...props }: SelectProps) {
  return (
    <select className={`select ${className}`.trim()} aria-label={label} {...props}>
      {children}
    </select>
  )
}
