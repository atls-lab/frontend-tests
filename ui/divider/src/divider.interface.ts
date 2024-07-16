import { BoxProps } from '@ui/layout'

export interface DividerProps {
  rounding?: BoxProps['borderRadius'] | number
  weight?: string | number
  color: BoxProps['backgroundColor'] | string
}
