import './global.css'

import { createGlobalTheme } from '@vanilla-extract/css'

import { borders }           from './theme'
import { colors }            from './theme'
import { fonts }             from './theme'
import { fontSizes }         from './theme'
import { fontWeights }       from './theme'
import { lineHeights }       from './theme'
import { radii }             from './theme'
import { shadows }           from './theme'
import { space }             from './theme'

export const vars = createGlobalTheme(':root', {
  borders,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  shadows,
  space,
})
