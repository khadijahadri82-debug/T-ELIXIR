import type { HTMLAttributes, ReactNode } from 'react'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4
  gap?: string
  children?: ReactNode
}

const columnStyles: Record<NonNullable<GridProps['columns']>, string> = {
  1: 'grid-1',
  2: 'grid-2',
  3: 'grid-3',
  4: 'grid-4',
}

export function Grid({ columns = 1, gap, children, className = '', ...props }: GridProps) {
  return (
    <div
      className={`${columnStyles[columns]} grid ${className}`.trim()}
      style={{ gap, ...props.style }}
      {...props}
    >
      {children}
    </div>
  )
}
