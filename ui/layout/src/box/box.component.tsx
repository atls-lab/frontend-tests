import React            from 'react'
import { forwardRef }   from 'react'

import { BoxProps }     from './box.interfaces'
import { boxSprinkles } from './box.css'

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, ...props }, ref) => {
  const { className, style, otherProps } = boxSprinkles(props)

  return (
    <div ref={ref} className={className} style={{ ...style, ...otherProps?.style }} {...otherProps}>
      {children}
    </div>
  )
})

Box.defaultProps = {
  display: 'flex',
}
