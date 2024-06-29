import React              from 'react'
import { clsx }           from 'clsx'
import { forwardRef }     from 'react'

import { SYMBOL_SPACE }   from './space.constants'
import { SpaceProps }     from './space.interfaces'
import { spaceSprinkles } from './space.css'

export const Space = forwardRef<HTMLSpanElement, SpaceProps>(({ count = 1, ...props }, ref) => {
  const { className, style, otherProps } = spaceSprinkles(props)

  return (
    <span
      ref={ref}
      {...otherProps}
      className={clsx(className, otherProps?.className)}
      style={{ ...style, ...otherProps?.style }}
    >
      {SYMBOL_SPACE.repeat(count)}
    </span>
  )
})

Space.defaultProps = {
  display: 'inline-flex',
}
