'use client'

import NextLink                 from 'next/link'
import React                    from 'react'
import { PropsWithChildren }    from 'react'

import { LinkProps }            from './link.interfaces'
import { activeLinkStyles }     from './link.styles.css'
import { appearanceLinkStyles } from './link.styles.css'
import { shapeLinkStyles }      from './link.styles.css'
import { transitionStyles }     from './link.styles.css'

export const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  href,
  children,
  active,
  isTextWrapped,
}) => {
  const classNames = [
    appearanceLinkStyles,
    isTextWrapped && shapeLinkStyles,
    active && activeLinkStyles,
    transitionStyles,
  ].join(' ')

  return (
    <NextLink href={href} className={classNames}>
      {children}
    </NextLink>
  )
}
