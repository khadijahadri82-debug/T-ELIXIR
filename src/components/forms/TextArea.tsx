import type { TextareaHTMLAttributes } from 'react'

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export function TextArea({ label, className = '', ...props }: TextAreaProps) {
  return <textarea className={`textarea ${className}`.trim()} {...props} aria-label={label} />
}
