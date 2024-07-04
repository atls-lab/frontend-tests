import { style }                 from '@vanilla-extract/css'

import { CheckAppearanceStyles } from './appearance.interfaces'

export const createCheckAppearanceStyles = ({ color, backgroundColor }: CheckAppearanceStyles) =>
  style({
    color: typeof color === 'function' ? color() : color,
    backgroundColor: typeof backgroundColor === 'function' ? backgroundColor() : backgroundColor,
  })
