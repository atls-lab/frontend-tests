import { HTMLAttributes }    from 'react'
import { PropsWithChildren } from 'react'

import { LayoutSprinkles }   from './layout.css'

export interface LayoutProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement>,
    LayoutSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
