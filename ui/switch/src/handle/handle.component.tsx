import React                                                 from 'react'
import { clsx }                                               from 'clsx'

import { HandleSprinkles }                                    from './handle.styles.css'

import { baseHandleStyles }                  from './handle.styles.css'

import { handleSprinkles } from './handle.styles.css'

export const Handle: React.FC<HandleSprinkles> = ({ ...props }) => {
  const { className, style, otherProps } = handleSprinkles(props)

  return (
    <button
      className={clsx(baseHandleStyles, className)}
      style={{ ...style, ...otherProps?.style }}
      {...otherProps}
    />
  )
}
