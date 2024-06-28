import { HTMLAttributes }       from 'react'

import { ProgressLinecap }      from '../progress.interfaces'
import { LinePercentSprinkles } from './line-percent.css'

export interface LinePercentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    LinePercentSprinkles {
  strokeLinecap?: ProgressLinecap
}
