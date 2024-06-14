import { HTMLAttributes }    from 'react'
import { PropsWithChildren } from 'react'

import { TextSprinkles }     from './sprinkles.css'

export interface TextProps
  extends PropsWithChildren,
    TextSprinkles,
    HTMLAttributes<HTMLSpanElement> {}
