import React                         from 'react'
import clsx                          from 'clsx'
import { PropsWithChildren }         from 'react'

import { ItemProps }                 from './item.interfaces'
import { baseItemStyles }            from './item.styles.css'
import { highlightedMenuItemStyles } from './item.styles.css'

export const MenuItem: React.FC<PropsWithChildren<ItemProps>> = ({ highlighted, children }) => (
  <li className={clsx(baseItemStyles, highlighted && highlightedMenuItemStyles)}>{children}</li>
)
