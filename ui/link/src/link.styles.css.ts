import { createRainbowSprinkles }                   from 'rainbow-sprinkles'

import { defineProperties } from 'rainbow-sprinkles'

const linkComponentProperties = defineProperties({
  dynamicProperties: {
    color: true,
    textDecoration: true,
  },
})

export const linkSprinkles = createRainbowSprinkles(linkComponentProperties)

export type LinkSprinkles = Parameters<typeof linkSprinkles>[0]
