import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { vars }                   from '@ui/theme/src/theme.css'

const defaultTextProperties = defineProperties({
  dynamicProperties: {
    cursor: true,
  },
})

const typographyProperties = defineProperties({
  dynamicProperties: {
    textAlign: true,
    fontStyle: true,
  },
  staticProperties: {
    fontSize: vars.fontSizes,
    fontFamily: vars.fonts,
    fontWeight: vars.fontWeights,
    lineHeights: vars.lineHeights,
  },
})

export const textSprinkles = createRainbowSprinkles(defaultTextProperties, typographyProperties)

export type TextSprinkles = Parameters<typeof textSprinkles>[0]
