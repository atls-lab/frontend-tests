import { HTMLAttributes }    from 'react'
import { PropsWithChildren } from 'react'

import { TextSprinkles }     from './text.css'

export interface TextProps
  extends PropsWithChildren,
    TextSprinkles,
    Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {}
