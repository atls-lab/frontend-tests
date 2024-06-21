'use client'

import React                 from 'react'
import { PropsWithChildren } from 'react'
import { memo }              from 'react'

import { ScrollbarElement }  from './scrollbar.element'
import { ScrollbarProps }    from './scrollbar.interfaces'

export const Scrollbar: React.FC<PropsWithChildren<ScrollbarProps>> = memo(({
  children,
  width,
}) => <ScrollbarElement width={width}>{children}</ScrollbarElement>)
