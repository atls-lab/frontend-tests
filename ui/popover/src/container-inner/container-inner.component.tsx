import React                    from 'react'
import { FC }                   from 'react'
import { HTMLAttributes }       from 'react'

import { containerInnerStyles } from './container-inner.css'

export const ContainerInner: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div className={containerInnerStyles} {...props}>
    {children}
  </div>
)
