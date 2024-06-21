import React               from 'react'

import { baseImageStyles } from './image.styles'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<ImageProps> = (alt, props) => (
  <img className={baseImageStyles} alt={alt} {...props} />
)
