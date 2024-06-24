'use client'

import NextLink                        from 'next/link'
import React                           from 'react'
import { forwardRef }            from 'react'
import { PropsWithChildren }           from 'react'
import { clsx }                         from 'clsx'

import { LinkProps }                   from './link.interfaces'
import { LinkSprinkles }                from './link.styles.css'

import { linkSprinkles } from './link.styles.css'

export const Link: React.FC<LinkProps> = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<LinkProps & LinkSprinkles>
>(({ children, href, ...props }, ref) => {
  const { className, style, otherProps } = linkSprinkles(props)

  return (
    <NextLink href={href}>
      <a
        ref={ref}
        className={clsx(className)}
        style={{ ...style, ...otherProps?.style }}
        {...otherProps}
      >
        {children}
      </a>
    </NextLink>
  )
})
