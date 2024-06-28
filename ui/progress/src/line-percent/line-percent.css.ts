import { style }                  from '@vanilla-extract/css'

import { createRainbowSprinkles } from 'rainbow-sprinkles'

import { vars }                   from '@ui/theme'
import { colorProperties }        from '@ui/theme/src/properties'

export const baseLinePercentStyles = style({
  display: 'flex',
  position: 'absolute',
  height: '100%',
  transition: 'all 0.3s linear',
})

export const roundLinePercentStyles = style({
  borderRadius: vars.radii.full,
})

export const squareLinePercentStyles = style({
  borderRadius: vars.radii.none,
})

export const linePercentSprinkles = createRainbowSprinkles(colorProperties)

export type LinePercentSprinkles = Parameters<typeof linePercentSprinkles>[0]
