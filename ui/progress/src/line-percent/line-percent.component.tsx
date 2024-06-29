import React                       from 'react'
import clsx                        from 'clsx'
import { forwardRef }              from 'react'

import { LinePercentProps }        from './line-percent.interfaces'
import { baseLinePercentStyles }   from './line-percent.css'
import { linePercentSprinkles }    from './line-percent.css'
import { roundLinePercentStyles }  from './line-percent.css'
import { squareLinePercentStyles } from './line-percent.css'

export const LinePercent = forwardRef<HTMLDivElement, LinePercentProps>((
  { children, strokeLinecap = 'square', ...props },
  ref
) => {
  const { className, style, otherProps } = linePercentSprinkles(props)

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(
        className,
        otherProps?.className,
        baseLinePercentStyles,
        strokeLinecap === 'round' ? roundLinePercentStyles : squareLinePercentStyles
      )}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})
