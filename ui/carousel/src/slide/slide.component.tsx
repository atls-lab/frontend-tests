import React              from 'react'
import { FC }             from 'react'
import { HTMLAttributes } from 'react'
import { clsx }           from 'clsx'

import { slideStyles }    from './slide.css'

export const Slide: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={clsx(className, slideStyles)} {...props}>
    {children}
  </div>
)
