import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme'

export const containerInnerStyles = style({
  display: 'flex',
  padding: `${vars.space.g12} ${vars.space.g17}`,
  width: '100%',
})