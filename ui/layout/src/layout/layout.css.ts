import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { flexboxProperties }      from '@ui/theme/src/properties'
import { layoutProperties }       from '@ui/theme/src/properties'
import { spaceProperties }        from '@ui/theme/src/properties'

const layoutComponentProperties = defineProperties({
  dynamicProperties: {
    boxSizing: true,
    gap: true,
  },
})

export const layoutSprinkles = createRainbowSprinkles(
  flexboxProperties,
  layoutComponentProperties,
  layoutProperties,
  spaceProperties
)

export type LayoutSprinkles = Parameters<typeof layoutSprinkles>[0]
