import { HTMLAttributes } from 'react'

export function Spinner({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div role="status" className={`spinner ${className}`.trim()} {...props} />
}
