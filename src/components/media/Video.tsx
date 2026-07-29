import type { VideoHTMLAttributes } from 'react'

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {}

export function Video({ className = '', ...props }: VideoProps) {
  return <video className={`media-video ${className}`.trim()} {...props} />
}
