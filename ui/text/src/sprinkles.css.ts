import { createSprinkles }  from '@vanilla-extract/sprinkles'
import { defineProperties } from '@vanilla-extract/sprinkles'

import { vars }             from '@ui/theme/src/theme.css'

const defaultTextProperties = defineProperties({
  properties: {
    cursor: ['default', 'pointer'],
  },
})

const typographyProperties = defineProperties({
  properties: {
    fontSize: vars.fontSizes,
    fontFamily: vars.fonts,
    fontWeight: vars.fontWeights,
    lineHeights: vars.lineHeights,
    fontStyle: [
      '-moz-initial',
      'inherit',
      'initial',
      'italic',
      'normal',
      'normal',
      'oblique',
      'revert',
      'revert-layer',
      'unset',
    ],
    textAlign: [
      '-moz-initial',
      '-webkit-match-parent',
      'center',
      'end',
      'inherit',
      'initial',
      'justify',
      'left',
      'match-parent',
      'revert',
      'revert-layer',
      'right',
      'start',
      'unset',
    ],
  },
})

export const textSprinkles = createSprinkles(defaultTextProperties, typographyProperties)

export type TextSprinkles = Parameters<typeof textSprinkles>[0]
