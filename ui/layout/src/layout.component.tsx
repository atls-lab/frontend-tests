'use client'

import styled                   from '@emotion/styled'
import { Layout as BaseLayout } from '@atls-ui-parts/layout'
import { Box as BaseBox }       from '@atls-ui-parts/layout'
import { Row as BaseRow }       from '@atls-ui-parts/layout'
import { Column as BaseColumn } from '@atls-ui-parts/layout'

import { TypographyProps }      from 'styled-system'
import { typography }           from 'styled-system'

import { LineClampProps }       from './styles'
import { LayoutWithGap }        from './styles'
import { lineClampStyles }      from './styles'
import { gapStyles }            from './styles'

type GeneralProps = LayoutWithGap & LineClampProps

export const Layout = styled(BaseLayout)<GeneralProps>(gapStyles, lineClampStyles)

export const Box = styled(BaseBox)<GeneralProps & TypographyProps>(
  typography,
  gapStyles,
  lineClampStyles
)

export const Row = styled(BaseRow)<GeneralProps>(gapStyles, lineClampStyles)

export const Column = styled(BaseColumn)<GeneralProps>(gapStyles, lineClampStyles)
