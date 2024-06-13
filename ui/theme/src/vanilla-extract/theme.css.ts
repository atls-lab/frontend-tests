import { createGlobalTheme } from '@vanilla-extract/css'

import { colors }            from './theme/colors.js'
import { radii }             from './theme/radii.js'
import { space }             from './theme/space.js'

export const vars = createGlobalTheme(':root', {
  colors,
  radii,
  space,
})
