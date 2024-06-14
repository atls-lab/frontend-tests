import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme/src/theme.css'

export const baseStyles = style({
  display: 'inline-flex',
  color: vars.colors.text.black,
  fontWeight: vars.fontWeights.regular,
  fontFamily: vars.fonts.primary,
  fontSize: vars.fontSizes.medium,
  lineHeight: vars.lineHeights.default,
})
