import Image                      from 'next/image'
import React                      from 'react'
import { clsx }                   from 'clsx'
import { forwardRef }             from 'react'

import { NextImageProps }         from './next-image.interfaces'
import { nextImageWrapperStyles } from './next-image.css'

export const NextImage = forwardRef<HTMLImageElement, NextImageProps>((
  { wrapperClassName, ...props },
  ref
) => (
  <div className={clsx(nextImageWrapperStyles, wrapperClassName)}>
    <Image ref={ref} {...props} />
  </div>
))
