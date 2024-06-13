import { recipe }             from '@vanilla-extract/recipes'

import { appearanceVariant }  from './appearance.css'
import { appearanceHover }    from './appearance.css'
import { appearancePressed }  from './appearance.css'
import { appearanceDisabled } from './appearance.css'
import { baseStyles }         from './base.css'
import { shapeStyles }        from './shape.css'

export const buttonStyles = recipe({
  base: baseStyles,

  variants: {
    variant: appearanceVariant,
    hover: appearanceHover,
    pressed: appearancePressed,
    disabled: appearanceDisabled,
    size: shapeStyles,
  },

  defaultVariants: {
    variant: 'blue',
    size: 'medium',
  },
})
