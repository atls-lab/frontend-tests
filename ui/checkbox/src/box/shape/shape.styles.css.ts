import { style }                from '@vanilla-extract/css'

import { styleVariants } from '@vanilla-extract/css'

import { BoxShapeStyles }        from './shape.interfaces'

export const createBoxBaseShapeStyles = (size: number, borderWidth: number | string) =>
  style({
    height: size,
    width: size,
    borderWidth,
  })

export const createPatternStyles = (borderRadius: number | string) =>
  styleVariants({
    square: {
      borderRadius,
    },
    circle: {
      borderRadius: '50%',
    },
  })

export const createBoxShapeStyles = ({
  size,
  borderWidth = 1,
  borderRadius = 0,
}: BoxShapeStyles) => {
  const baseShapeStyles = createBoxBaseShapeStyles(size, borderWidth)
  const patternStyles = createPatternStyles(borderRadius)

  return { baseShapeStyles, patternStyles }
}
