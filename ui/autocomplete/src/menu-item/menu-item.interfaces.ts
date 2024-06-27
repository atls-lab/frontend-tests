import { HTMLAttributes }    from 'react'
import { PropsWithChildren } from 'react'

export interface MenuItemProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  selected?: boolean
}
