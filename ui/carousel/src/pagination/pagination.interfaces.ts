import { HTMLAttributes }      from 'react'

import { PaginationSprinkles } from './pagination.css'

export interface ActiveStyles {
  color?: PaginationSprinkles['color']
  backgroundColor?: PaginationSprinkles['backgroundColor']
  borderColor?: PaginationSprinkles['borderColor']
  size?: PaginationSprinkles['size']
  margin?: PaginationSprinkles['margin']
  borderWidth?: PaginationSprinkles['borderWidth']
  borderRadius?: PaginationSprinkles['borderRadius']
}

export interface PaginationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    PaginationSprinkles {
  active?: boolean
  activeStyleOptions?: ActiveStyles
}