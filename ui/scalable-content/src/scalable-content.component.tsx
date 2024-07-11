import React                     from 'react'
import { FC }                    from 'react'
import { clsx }                  from 'clsx'

import { ScalableContentProps }  from './scalable-content.interfaces'
import { useScale }              from './hooks'
import { scalableContentStyles } from './scalable-content.css'

export const ScalableContent: FC<ScalableContentProps> = ({ className, style, ...props }) => {
  const { ref, style: scaleStyle } = useScale()

  return (
    <div
      ref={ref}
      className={clsx(scalableContentStyles, className)}
      style={{ ...style, ...scaleStyle }}
      {...props}
    />
  )
}
