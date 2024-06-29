import { HTMLAttributes } from 'react'

import { TextSprinkles }  from './text.css'

export interface TextProps extends TextSprinkles, Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {}
