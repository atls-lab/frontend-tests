import { Image }             from '@radix-ui/react-avatar'

import React                 from 'react'
import { clsx }              from 'clsx'
import { forwardRef }        from 'react'

import { ImageProps }        from './avatar-image.interfaces'
import { avatarImageStyles } from './avatar-image.css'

export const AvatarImage = forwardRef<HTMLImageElement, ImageProps>((
  { className, children, ...props },
  ref
) => (
  <Image ref={ref} className={clsx(className, avatarImageStyles)} {...props}>
    {children}
  </Image>
))