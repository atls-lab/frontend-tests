'use client'

import NextLink              from 'next/link'
import React                 from 'react'
import { PropsWithChildren } from 'react'
import { clsx }              from 'clsx'
import { forwardRef }        from 'react'

import { LinkProps }         from './link.interfaces'
import { LinkSprinkles }     from './link.styles.css'
import { baseLinkStyles }    from './link.styles.css'
import { linkSprinkles }     from './link.styles.css'

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps & LinkSprinkles>>((
  { children, path, ...props },
  ref
) => {
  const { className, style, otherProps } = linkSprinkles(props)

  return (
    <NextLink href={path}>
      <a
        ref={ref}
        {...otherProps}
        className={clsx(baseLinkStyles, otherProps?.className, className)}
        style={{ ...style, ...otherProps?.style }}
      >
        {children}
      </a>
    </NextLink>
  )
})
