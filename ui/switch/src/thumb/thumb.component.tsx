import React                   from 'react'
import { clsx }                from 'clsx'
import { motion }              from 'framer-motion'
import { useMemo }             from 'react'

import { ThumbElementProps }   from './thumb.interfaces'
import { ThumbSprinkles }      from './thumb.styles.css'
import { thumbMotionVariants } from './thumb.motion'
import { baseThumbStyles }     from './thumb.styles.css'
import { disabledThumbStyles } from './thumb.styles.css'
import { thumbSprinkles }      from './thumb.styles.css'

export const Thumb: React.FC<ThumbElementProps & ThumbSprinkles> = ({
  checked,
  disabled,
  ...props
}) => {
  const initial = useMemo(() => (checked ? 'checked' : 'visible'), [checked])
  const { className, style, otherProps } = thumbSprinkles(props)

  return (
    <motion.span
      initial={initial}
      animate={checked && !disabled ? 'checked' : 'visible'}
      {...otherProps}
      className={clsx(
        baseThumbStyles,
        disabled ? disabledThumbStyles : '',
        otherProps?.className,
        className
      )}
      style={{ ...style, ...otherProps?.style }}
    />
  )
}

Thumb.defaultProps = {
  variants: thumbMotionVariants,
}
