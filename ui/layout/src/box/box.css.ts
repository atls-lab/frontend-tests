import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { borderProperties }       from '@ui/theme/src/properties'
import { colorProperties }        from '@ui/theme/src/properties'
import { flexboxProperties }      from '@ui/theme/src/properties'
import { layoutProperties }       from '@ui/theme/src/properties'
import { positionProperties }     from '@ui/theme/src/properties'
import { shadowProperties }       from '@ui/theme/src/properties'
import { spaceProperties }        from '@ui/theme/src/properties'

const boxProperties = defineProperties({
  dynamicProperties: {
    boxSizing: true,
    cursor: true,
    gap: true,
  },
})

export const boxSprinkles = createRainbowSprinkles(
  boxProperties,
  borderProperties,
  colorProperties,
  flexboxProperties,
  layoutProperties,
  positionProperties,
  shadowProperties,
  spaceProperties
)

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0]
