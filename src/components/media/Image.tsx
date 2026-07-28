import { ImgHTMLAttributes } from 'react'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function Image({ className = '', ...props }: ImageProps) {
  return <img className={`media-image ${className}`.trim()} {...props} />
}
