import React                 from 'react'
import { HTMLAttributes }    from 'react'
import { clsx }              from 'clsx'
import { forwardRef }        from 'react'

import { hiddenInputStyles } from './hidden-input.css'

export const HiddenInput = forwardRef<HTMLInputElement, HTMLAttributes<HTMLInputElement>>((
  { className, ...props },
  ref
) => <input ref={ref} className={clsx({ className, hiddenInputStyles })} {...props} />)
