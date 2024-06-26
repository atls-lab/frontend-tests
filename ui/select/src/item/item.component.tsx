import { style }             from '@vanilla-extract/css'

import React                 from 'react'
import { PropsWithChildren } from 'react'

import { ItemProps }         from './item.interfaces'
import { baseItemStyles }    from './item.styles.css'

const highlightedMenuItem = style({
  backgroundColor: 'aqua',
})

export const MenuItem: React.FC<PropsWithChildren<ItemProps>> = ({ highlighted, children }) => {
  const classNames = style([baseItemStyles, highlighted ? highlightedMenuItem : 'aqua'])

  return <li className={classNames}>{children}</li>
}
