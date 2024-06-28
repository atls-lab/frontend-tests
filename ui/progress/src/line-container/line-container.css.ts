import { style }                  from '@vanilla-extract/css'

import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { vars }                   from '@ui/theme'
import { colorProperties }        from '@ui/theme/src/properties'
import { layoutProperties }       from '@ui/theme/src/properties'

export const baseLineContainerStyles = style({
  display: 'flex',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
})

export const roundLineContainerStyles = style({
  borderRadius: vars.radii.full,
})

export const squareLineContainerStyles = style({
  borderRadius: vars.radii.none,
})

export const lineContainerSprinkles = createRainbowSprinkles(colorProperties, layoutProperties)

export type LineContainerSprinkles = Parameters<typeof lineContainerSprinkles>[0]
