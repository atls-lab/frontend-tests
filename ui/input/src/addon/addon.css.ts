import { style } from '@vanilla-extract/css'

export const addonPositionBeforeStyles = style({
  width: 'auto',
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0,
  borderRightWidth: 0,
})

export const addonPositionAfterStyles = style({
  width: 'auto',
  borderBottomLeftRadius: 0,
  borderTopLeftRadius: 0,
  borderLeftWidth: 0,
})
