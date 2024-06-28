import React            from 'react'
import { FC }           from 'react'

import { Box }           from '@ui/layout'

import { DividerProps } from './divider.interface'

const Divider: FC<DividerProps> = ({ weight, color, ...props }) => (
  <Box width='100%' height={weight || 1} backgroundColor={color} {...props} />
)

export { Divider }
