import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { colorProperties }        from '@ui/theme/src/properties'
import { layoutProperties }       from '@ui/theme/src/properties'
import { spaceProperties }        from '@ui/theme/src/properties'
import { typographyProperties }   from '@ui/theme/src/properties'

const textProperties = defineProperties({
  dynamicProperties: {
    cursor: true,
    textOverflow: true,
    wordBreak: true,
    whiteSpace: true,
    textTransform: true,
  },
})

export const textSprinkles = createRainbowSprinkles(
  textProperties,
  colorProperties,
  layoutProperties,
  spaceProperties,
  typographyProperties
)

export type TextSprinkles = Parameters<typeof textSprinkles>[0]
