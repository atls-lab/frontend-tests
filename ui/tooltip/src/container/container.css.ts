import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const baseContainerStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 30,
  minHeight: 32,
  padding: [vars.space.g6, vars.space.g8],
  margin: vars.space.zero,
  color: vars.colors.white,
  wordWrap: 'break-word',
  backgroundColor: vars.colors.blackThreeQuarters,
  borderRadius: vars.radii.f2,
  boxShadow: vars.shadows.gordonsgreen,
  zIndex: 1000,
})