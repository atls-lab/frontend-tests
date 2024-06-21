import { createGlobalTheme } from '@vanilla-extract/css'

import { colors }            from './theme'
import { radii }             from './theme'
import { fontSizes }         from './theme'
import { fontWeights }       from './theme'
import { fonts }             from './theme'
import { lineHeights }       from './theme'
import { space }             from './theme'

export const vars = createGlobalTheme(':root', {
  colors,
  radii,
  space,
  fontSizes,
  fonts,
  lineHeights,
  fontWeights,
})
