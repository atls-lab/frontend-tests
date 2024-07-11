import React                        from 'react'
import { FC }                       from 'react'

import { Box }                      from '@ui/layout'

import { ImagePlaceholder }         from '../image-placeholder'
import { ImageBoxPlaceholderProps } from './image-box-placeholder.interfaces'

export const ImageBoxPlaceholder: FC<ImageBoxPlaceholderProps> = ({
  size = 32,
  color = '#A0A4B3',
  backgroundColor = '$lightPurple',
}) => (
  <Box
    width='100%'
    height='100%'
    alignItems='center'
    justifyContent='center'
    background={backgroundColor}
  >
    <ImagePlaceholder color={color} size={size} />
  </Box>
)
