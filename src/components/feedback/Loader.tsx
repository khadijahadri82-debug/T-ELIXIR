import type { HTMLAttributes } from 'react'

export function Loader({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div role="status" className={`loader ${className}`.trim()} {...props} />
}
