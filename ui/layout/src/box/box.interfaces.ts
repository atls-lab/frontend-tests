import { HTMLAttributes }    from 'react'
import { PropsWithChildren } from 'react'

import { BoxSprinkles }      from './box.css'

export interface BoxProps
  extends PropsWithChildren,
    Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    BoxSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
