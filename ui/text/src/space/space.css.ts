import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { layoutProperties }       from '@ui/theme/src/properties'

export const spaceSprinkles = createRainbowSprinkles(layoutProperties)

export type SpaceSprinkles = Parameters<typeof spaceSprinkles>[0]
