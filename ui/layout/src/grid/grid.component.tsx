import React                        from 'react'
import { clsx }                     from 'clsx'
import { forwardRef }               from 'react'

import { GridProps }                from './grid.interfaces'
import { fillStyles }               from '../styles'
import { fullViewportHeightStyles } from '../styles'
import { fullViewportWidthStyles }  from '../styles'
import { gridSprinkles }            from './grid.css'

export const Grid = forwardRef<HTMLDivElement, GridProps>((
  { children, fill, fullViewportWidth, fullViewportHeight, ...props },
  ref
) => {
  const { className, style, otherProps } = gridSprinkles(props)

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(
        className,
        otherProps?.className,
        fill && fillStyles,
        fullViewportWidth && fullViewportWidthStyles,
        fullViewportHeight && fullViewportHeightStyles
      )}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})

Grid.defaultProps = {
  display: 'grid',
  boxSizing: 'border-box',
}
