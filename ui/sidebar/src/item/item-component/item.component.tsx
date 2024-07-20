import React                from 'react'
import { FC }               from 'react'
import { clsx }             from 'clsx'

import { ItemProps }        from './item.interfaces'
import { activeItemStyles } from './item.css'
import { baseItemStyles }   from './item.css'

export const Item: FC<ItemProps> = ({ children, active, className, ...props }) => (
  <a className={clsx(className, baseItemStyles, active && activeItemStyles)} {...props}>
    {children}
  </a>
)
