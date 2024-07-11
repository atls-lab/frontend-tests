import React                    from 'react'
import { FC }                   from 'react'

import { Layout }               from '@ui/layout'
import { Text }                 from '@ui/text'

import { ImagePlaceholder }     from '../image-placeholder'
import { LogoPlaceholderProps } from './logo-placeholder.interfaces'

export const LogoPlaceholder: FC<LogoPlaceholderProps> = ({
  type = 'horizontal',
  children = 'Логотип',
  color = 'black',
  size = 32,
}) => (
  <Layout
    flexDirection={type === 'horizontal' ? 'row' : 'column'}
    display='inline-flex'
    alignItems='center'
  >
    <ImagePlaceholder color={color} size={size} />
    <Layout
      ml={type === 'horizontal' ? size * 0.28 : 0}
      mt={type === 'vertical' ? size * 0.28 : 0}
      display='inline-flex'
    >
      <Text fontWeight='$bold' style={{ fontSize: size * 0.56, color }}>
        {children}
      </Text>
    </Layout>
  </Layout>
)
