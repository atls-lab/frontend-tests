import { Fallback }             from '@radix-ui/react-avatar'

import React                    from 'react'
import { clsx }                 from 'clsx'
import { forwardRef }           from 'react'

import { FallbackProps }        from './avatar-fallback.interfaces'
import { avatarFallbackStyles } from './avatar-fallback.css'

export const AvatarFallback = forwardRef<HTMLSpanElement, FallbackProps>((
  { size, className, children, ...props },
  ref
) => (
  <Fallback ref={ref} className={clsx(className, avatarFallbackStyles({ size }))} {...props}>
    {children}
  </Fallback>
))