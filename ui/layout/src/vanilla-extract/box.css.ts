import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { flexboxProperties }      from './properties'
import { layoutProperties }       from './properties'
import { spaceProperties }        from './properties'

export const boxSprinkles = createRainbowSprinkles(
  layoutProperties,
  spaceProperties,
  flexboxProperties
)

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0]
