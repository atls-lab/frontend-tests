import { style }            from '@vanilla-extract/css'

import { CheckShapeStyles } from './shape.interfaces'

export const createCheckShapeStyles = ({ size, borderRadius }: CheckShapeStyles) =>
  style({
    height: size,
    width: size,
    borderRadius,
  })
