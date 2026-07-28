import { InputHTMLAttributes } from 'react'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Checkbox({ label, className = '', ...props }: CheckboxProps) {
  return <input type="checkbox" className={`checkbox ${className}`.trim()} {...props} aria-label={label} />
}
