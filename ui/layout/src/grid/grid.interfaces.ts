import { HTMLAttributes } from 'react'

import { GridSprinkles }  from './grid.css'

export interface GridProps extends HTMLAttributes<HTMLDivElement>, GridSprinkles {
  fill?: boolean
  fullViewportWidth?: boolean
  fullViewportHeight?: boolean
}
