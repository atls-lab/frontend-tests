import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { flexboxProperties }      from '@ui/theme/src/properties'
import { layoutProperties }       from '@ui/theme/src/properties'
import { spaceProperties }        from '@ui/theme/src/properties'

export const boxSprinkles = createRainbowSprinkles(
  layoutProperties,
  spaceProperties,
  flexboxProperties
)

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0]
