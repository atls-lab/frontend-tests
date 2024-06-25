import { HTMLAttributes } from 'react'

import { SpaceSprinkles } from './space.css'

export interface SpaceProps extends SpaceSprinkles, HTMLAttributes<HTMLSpanElement> {
  count?: number
}
