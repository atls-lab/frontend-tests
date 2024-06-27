import React                      from 'react'
import { clsx }                   from 'clsx'
import { forwardRef }             from 'react'

import { MenuItemProps }          from './menu-item.interfaces'
import { baseMenuItemStyles }     from './menu-item.css'
import { hoveredMenuItemStyles }  from './menu-item.css'
import { selectedMenuItemStyles } from './menu-item.css'

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>((
  { children, className, hover, selected, ...props },
  ref
) => (
  <div
    ref={ref}
    className={clsx(
      className,
      baseMenuItemStyles,
      hover && hoveredMenuItemStyles,
      selected && selectedMenuItemStyles
    )}
    {...props}
  >
    {children}
  </div>
))
