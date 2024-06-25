import React                 from 'react'
import { PropsWithChildren } from 'react'
import { clsx }              from 'clsx'
import { forwardRef }        from 'react'

import { baseImageStyles }   from './image.styles.css'
import { imageSprinkles }    from './image.styles.css'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image = forwardRef<HTMLImageElement, PropsWithChildren<ImageProps>>((
  { alt, className, width, height, ...props },
  ref
) => {
  const { style, otherProps } = imageSprinkles({
    ...props,
    width,
    height,
  })

  return (
    <img
      ref={ref}
      className={clsx(baseImageStyles, className)}
      alt={alt}
      style={{ ...style, ...otherProps?.style }}
      {...props}
      width={width}
      height={height}
    />
  )
})
