import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { typographyProperties }   from '@ui/theme/src/properties'

const textProperties = defineProperties({
  dynamicProperties: {
    cursor: true,
  },
})

export const textSprinkles = createRainbowSprinkles(textProperties, typographyProperties)

export type TextSprinkles = Parameters<typeof textSprinkles>[0]
