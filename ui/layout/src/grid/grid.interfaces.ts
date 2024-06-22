import { HTMLAttributes }    from 'react'
import { PropsWithChildren } from 'react'

import { GridSprinkles }     from './grid.css'

export interface GridProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement>,
    GridSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
