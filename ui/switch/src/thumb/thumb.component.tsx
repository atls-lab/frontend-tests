import React                                                                   from 'react'
import { useMemo }                                                       from 'react'
import { clsx }                                                                 from 'clsx'
import { motion }                                                               from 'framer-motion'

import { ThumbElementProps }                                                    from './thumb.interfaces'
import { ThumbSprinkles }                                                       from './thumb.styles.css'

import { baseThumbStyles }                                      from './thumb.styles.css'

import { disabledThumbStyles }                 from './thumb.styles.css'

import { thumbSprinkles } from './thumb.styles.css'

const Thumb: React.FC<ThumbElementProps & ThumbSprinkles> = ({
  checked,
  disabled,
  ...props
}) => {
  const initial = useMemo(() => (checked ? 'checked' : 'visible'), [checked])
  const { className, style, otherProps } = thumbSprinkles(props)

  return (
    <motion.span
      initial={initial}
      animate={checked ? 'checked' : 'visible'}
      className={clsx(baseThumbStyles, disabledThumbStyles, className)}
      style={{ ...style, ...otherProps?.style }}
      {...props}
    />
  )
}
