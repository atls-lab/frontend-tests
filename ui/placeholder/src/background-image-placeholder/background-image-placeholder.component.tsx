import React                                from 'react'
import { FC }                               from 'react'
import { clsx }                             from 'clsx'

import { BackgroundImagePlaceholderProps }  from './background-image-placeholder.interfaces'
import { backgroundImagePlaceholderStyles } from './background-image-placeholder.css'

export const BackgroundImagePlaceholder: FC<BackgroundImagePlaceholderProps> = ({
  className,
  ...props
}) => <div className={clsx(backgroundImagePlaceholderStyles, className)} {...props} />
