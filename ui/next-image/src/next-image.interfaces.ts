import { ImageProps } from 'next/image'

export interface NextImageProps extends ImageProps {
  wrapperClassName?: string
}
