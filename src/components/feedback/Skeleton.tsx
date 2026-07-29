import type { HTMLAttributes } from 'react'

export function Skeleton({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div aria-busy="true" className={`skeleton ${className}`.trim()} {...props} />
}
