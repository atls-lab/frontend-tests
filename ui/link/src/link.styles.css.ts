import { style } from '@vanilla-extract/css'

import { vars }  from '@ui/theme/src/theme.css'

export const transitionStyles = style({
  transition: '0.2s',
})

export const appearanceLinkStyles = style({
  cursor: 'pointer',
  color: vars.colors.lightBlue,
  textDecoration: 'none',
  selectors: {
    '&:hover': {
      color: vars.colors.blue,
    },
  },
})

export const shapeLinkStyles = style({
  whiteSpace: 'nowrap',
})

export const activeLinkStyles = style({
  color: vars.colors.blue,
})
