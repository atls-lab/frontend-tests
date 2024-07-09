import { FC }                 from 'react'
import { ReactElement }       from 'react'

import { Divider }            from '../divider'
import { ContentProps }       from './content.interfaces'
import { useDividedChildren } from '../hooks'

export const Content: FC<ContentProps> = ({ divider = 12, children }) =>
  useDividedChildren(children, Divider, { divider }) as ReactElement
