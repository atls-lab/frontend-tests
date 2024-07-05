import React                 from 'react'
import { clsx }              from 'clsx'
import { forwardRef }        from 'react'

import { ButtonProps }       from '../button.interfaces'
import { baseStyles }        from '../styles/base.css'
import { nulledGhostStyles } from './ghost-button.css'
import { shapeGhostStyles }  from './ghost-button.css'

export const GhostButton = forwardRef<HTMLButtonElement, ButtonProps>((
  { children, className, ...props },
  ref
) => (
  <button
    ref={ref}
    className={clsx(className, baseStyles, nulledGhostStyles, shapeGhostStyles)}
    {...props}
  >
    {children}
  </button>
))
