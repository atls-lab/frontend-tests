import { HTMLAttributes }      from 'react'

import { AttachmentSprinkles } from './attachment.css'

export interface AttachmentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    Omit<AttachmentSprinkles, 'paddingLeft' | 'paddingRight'> {
  type: 'prefix' | 'suffix'
  offsetLeft: string
  offsetRight: string
}
