import { HTMLAttributes, ReactNode } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
  children?: ReactNode
}

const badgeStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'badge badge--default',
  success: 'badge badge--success',
  warning: 'badge badge--warning',
  danger: 'badge badge--danger',
  info: 'badge badge--info',
}

export function Badge({ variant = 'default', children, className = '', ...props }: BadgeProps) {
  return (
    <span className={`${badgeStyles[variant]} ${className}`.trim()} {...props}>
      {children}
    </span>
  )
}
