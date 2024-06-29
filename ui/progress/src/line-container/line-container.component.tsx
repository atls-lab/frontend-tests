import React                         from 'react'
import clsx                          from 'clsx'
import { forwardRef }                from 'react'

import { LineContainerProps }        from './line-container.interfaces'
import { baseLineContainerStyles }   from './line-container.css'
import { lineContainerSprinkles }    from './line-container.css'
import { roundLineContainerStyles }  from './line-container.css'
import { squareLineContainerStyles } from './line-container.css'

export const LineContainer = forwardRef<HTMLDivElement, LineContainerProps>((
  { children, trailLinecap = 'square', ...props },
  ref
) => {
  const { className, style, otherProps } = lineContainerSprinkles(props)

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(
        className,
        otherProps?.className,
        baseLineContainerStyles,
        trailLinecap === 'round' ? roundLineContainerStyles : squareLineContainerStyles
      )}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})

LineContainer.defaultProps = {
  backgroundColor: '$gray',
}
