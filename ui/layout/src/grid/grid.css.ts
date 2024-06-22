import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { flexboxProperties }      from '@ui/theme/src/properties'
import { gridProperties }         from '@ui/theme/src/properties'
import { layoutProperties }       from '@ui/theme/src/properties'
import { spaceProperties }        from '@ui/theme/src/properties'

const gridComponentProperties = defineProperties({
  dynamicProperties: {
    boxSizing: true,
    gap: true,
  },
})

export const gridSprinkles = createRainbowSprinkles(
  flexboxProperties,
  gridComponentProperties,
  gridProperties,
  layoutProperties,
  spaceProperties
)

export type GridSprinkles = Parameters<typeof gridSprinkles>[0]
