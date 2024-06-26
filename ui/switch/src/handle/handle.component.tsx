import React, {PropsWithChildren} from 'react'
import { clsx }                                               from 'clsx'

import { HandleSprinkles }                                    from './handle.styles.css'

import { baseHandleStyles }                  from './handle.styles.css'

import { handleSprinkles } from './handle.styles.css'

export const Handle = ({ children, ...props }) => {
  const { className, style, otherProps } = handleSprinkles(props)

  return (
    <button
      className={clsx(baseHandleStyles, className)}
      style={{ ...style, ...otherProps?.style }}
      {...otherProps}
    >
      {children}
    </button>
  )
}
