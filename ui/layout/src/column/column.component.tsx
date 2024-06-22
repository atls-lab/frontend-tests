import React           from 'react'
import { forwardRef }  from 'react'

import { Layout }      from '../layout'
import { LayoutProps } from '../layout'

export const Column = forwardRef<HTMLDivElement, LayoutProps>((props, ref) => (
  <Layout ref={ref} {...props} />
))

Column.defaultProps = {
  flexDirection: 'column',
  height: '100%',
}
