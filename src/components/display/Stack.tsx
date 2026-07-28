import { HTMLAttributes, ReactNode } from 'react'

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between'
  gap?: string
  children?: ReactNode
}

export function Stack({
  align = 'stretch',
  justify = 'start',
  gap,
  children,
  className = '',
  ...props
}: StackProps) {
  return (
    <div
      className={`stack ${className}`.trim()}
      style={{
        alignItems: align,
        justifyContent: justify === 'between' ? 'space-between' : justify,
        gap,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
