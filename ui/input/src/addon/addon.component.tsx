import React                         from 'react'
import { clsx }                      from 'clsx'
import { forwardRef }                from 'react'

import { AddonProps }                from './addon.interfaces'
import { addonSprinkles }            from './addon.css'
import { addonPositionAfterStyles }  from './addon.css'
import { addonPositionBeforeStyles } from './addon.css'
import { baseAddonStyles }           from './addon.css'

export const Addon = forwardRef<HTMLDivElement, AddonProps>((
  {
    children,
    position = 'before',
    attach = 'left',
    paddingLeft,
    paddingRight,
    paddingRatio = 0.5,
    rounding = 0,
    size = '16px',
    ...props
  },
  ref
) => {
  const roundingStyles = {
    borderRadius: attach === 'both' ? 0 : rounding,
    ...(attach === 'left' ? { borderBottomRightRadius: 0, borderTopRightRadius: 0 } : {}),
    ...(attach === 'right' ? { borderBottomLeftRadius: 0, borderTopLeftRadius: 0 } : {}),
  }

  const paddingStyles = {
    size,
    paddingLeft: paddingLeft || `${parseInt(size, 10) * paddingRatio}px`,
    paddingRight: paddingRight || `${parseInt(size, 10) * paddingRatio}px`,
  }

  const { className, style, otherProps } = addonSprinkles({
    ...props,
    ...paddingStyles,
    ...roundingStyles,
  })

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(
        className,
        otherProps?.className,
        baseAddonStyles,
        position === 'before' ? addonPositionBeforeStyles : addonPositionAfterStyles
      )}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})

Addon.defaultProps = {
  borderWidth: '1px',
}
