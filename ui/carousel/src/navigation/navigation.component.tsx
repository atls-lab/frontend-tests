import React                    from 'react'
import { clsx }                 from 'clsx'
import { forwardRef }           from 'react'

import { NavigationProps }      from './navigation.interfaces'
import { baseNavigationStyles } from './navigation.css'
import { hideNavigationStyles } from './navigation.css'
import { navigationSprinkles }  from './navigation.css'
import { showNavigationStyles } from './navigation.css'
import { createAttachStyles }   from './navigation.utils'
import { createFillStyles }     from './navigation.utils'

export const Navigation = forwardRef<HTMLDivElement, NavigationProps>((
  { children, attach = 'prev', fill = false, show = true, offset, ...props },
  ref
) => {
  const fillStyles = createFillStyles(fill, String(props.height))
  const attachStyles = createAttachStyles(attach, offset)

  const { className, style, otherProps } = navigationSprinkles({
    ...props,
    ...fillStyles,
    ...attachStyles,
  })

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(
        className,
        otherProps?.className,
        baseNavigationStyles,
        show ? showNavigationStyles : hideNavigationStyles
      )}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})

Navigation.defaultProps = {
  borderWidth: 0,
  borderRadius: 0,
}