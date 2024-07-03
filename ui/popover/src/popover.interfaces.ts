import { ReactElement } from 'react'

import { TooltipProps } from '@ui/tooltip'

export interface PopoverProps extends Omit<TooltipProps, 'text'> {
  content?: ReactElement
  title?: string
}
