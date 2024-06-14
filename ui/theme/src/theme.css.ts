import { createGlobalTheme } from '@vanilla-extract/css'

import { colors }            from './vanilla-extract'
import { radii }             from './vanilla-extract'
import { fontSizes }         from './vanilla-extract'
import { fontWeights }       from './vanilla-extract'
import { fonts }             from './vanilla-extract'
import { lineHeights }       from './vanilla-extract'
import { space }             from './vanilla-extract'

export const vars = createGlobalTheme(':root', {
  colors,
  radii,
  space,
  fontSizes,
  fonts,
  lineHeights,
  fontWeights,
})
