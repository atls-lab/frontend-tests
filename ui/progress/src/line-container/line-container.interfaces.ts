import { HTMLAttributes }         from 'react'

import { ProgressLinecap }        from '../progress.interfaces'
import { LineContainerSprinkles } from './line-container.css'

export interface LineContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    LineContainerSprinkles {
  trailLinecap?: ProgressLinecap
}
