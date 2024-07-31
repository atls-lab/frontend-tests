import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { flexboxProperties }      from '@ui/theme/src/properties'
import { layoutProperties }       from '@ui/theme/src/properties'
import { positionProperties }     from '@ui/theme/src/properties'
import { spaceProperties }        from '@ui/theme/src/properties'

export const parallaxSprinkles = createRainbowSprinkles(
  flexboxProperties,
  layoutProperties,
  positionProperties,
  spaceProperties
)

export type ParallaxSprinkles = Parameters<typeof parallaxSprinkles>[0]
