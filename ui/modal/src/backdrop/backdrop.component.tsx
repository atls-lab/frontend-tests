import React                      from 'react'

import { BackdropElement }        from './backdrop.element'
import { BackdropProps }          from './backdrop.interfaces'
import { backdropMotionVariants } from './backdrop.motion'
import { baseBackdropStyles }     from './backdrop.styles.css'

const Backdrop: React.FC<BackdropProps> = (props) => {
  return (
    <BackdropElement
      className={baseBackdropStyles}
      variants={backdropMotionVariants}
      animate='target'
      initial='enter'
      exit='exit'
      {...props}
    />
  )
}

export { Backdrop }
