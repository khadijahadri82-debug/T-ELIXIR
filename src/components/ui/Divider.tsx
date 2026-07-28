import { HTMLAttributes } from 'react'

export function Divider({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div role="separator" className={`divider ${className}`.trim()} {...props} />
}
