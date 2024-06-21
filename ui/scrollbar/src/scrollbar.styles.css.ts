import { style } from '@vanilla-extract/css'

export const baseStyles = style({
  overflowY: 'auto',
  width: '100%',
  height: '100%',
  '::-webkit-scrollbar': {
    width: 'var(--scrollbar-width, 0px)',
    height: '0px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'var(--scrollbar-thumb-color, #aaa)',
    borderRadius: 'var(--scrollbar-thumb-radius, 0px)',
  },
})
