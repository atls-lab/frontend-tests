import { style }                       from '@vanilla-extract/css'

import { checkBaseStyles }             from './check'
import { createCheckAppearanceStyles } from './check'
import { createCheckShapeStyles }      from './check'

export const checkboxStyles = style([
  checkBaseStyles,
  createCheckAppearanceStyles({}),
  createCheckShapeStyles({ size: 16 }),
])
