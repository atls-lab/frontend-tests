import { HTMLAttributes }    from 'react'
import { PropsWithChildren } from 'react'

import { BoxSprinkles }      from './box.css'

export interface BoxProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement>, BoxSprinkles {}
