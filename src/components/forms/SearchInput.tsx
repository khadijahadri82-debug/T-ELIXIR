import type { InputHTMLAttributes } from 'react'

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function SearchInput({ label, className = '', ...props }: SearchInputProps) {
  return <input type="search" className={`search-input ${className}`.trim()} {...props} aria-label={label} />
}
