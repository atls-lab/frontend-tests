import { recipe }             from '@vanilla-extract/recipes'

import { appearanceActive }   from './appearance.css'
import { appearanceDisabled } from './appearance.css'
import { appearanceFocus }    from './appearance.css'
import { appearanceHover }    from './appearance.css'
import { appearanceVariant }  from './appearance.css'
import { baseStyles }         from './base.css'
import { shapeStyles }        from './shape.css'

export const inputStyles = recipe({
  base: baseStyles,

  variants: {
    variant: appearanceVariant,
    hover: appearanceHover,
    focus: appearanceFocus,
    active: appearanceActive,
    disabled: appearanceDisabled,
    size: shapeStyles,
  },

  defaultVariants: {
    variant: 'white',
    size: 'normal',
  },
})
