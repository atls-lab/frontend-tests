import React              from 'react'
import { clsx }           from 'clsx'
import { forwardRef }     from 'react'

import { MenuProps }      from './menu.interfaces'
import { baseMenuStyles } from './menu.css'

export const Menu = forwardRef<HTMLDivElement, MenuProps>((
  { children, className, ...props },
  ref
) => (
  <div ref={ref} className={clsx(className, baseMenuStyles)} {...props}>
    {children}
  </div>
))
