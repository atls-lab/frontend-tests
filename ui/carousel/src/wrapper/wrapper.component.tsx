import React                       from 'react'
import { clsx }                    from 'clsx'
import { motion }                  from 'framer-motion'
import { forwardRef }              from 'react'

import { WrapperProps }            from './wrapper.interfaces'
import { baseWrapperStyles }       from './wrapper.css'
import { horizontalWrapperStyles } from './wrapper.css'
import { verticalWrapperStyles }   from './wrapper.css'

export const Wrapper = forwardRef<HTMLDivElement, WrapperProps>((
  { children, className, direction = 'horizontal', ...props },
  ref
) => (
  <motion.div
    ref={ref}
    className={clsx(
      className,
      baseWrapperStyles,
      direction === 'horizontal' ? horizontalWrapperStyles : verticalWrapperStyles
    )}
    {...props}
  >
    {children}
  </motion.div>
))
