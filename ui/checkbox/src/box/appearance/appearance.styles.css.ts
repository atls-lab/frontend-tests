import { style }               from '@vanilla-extract/css'

import { BoxAppearanceStyles } from './appearance.interfaces'

export const createBoxAppearanceStyles = ({
  borderColor,
  backgroundColor,
}: BoxAppearanceStyles) => {
  const borderColorValue = typeof borderColor === 'function' ? borderColor() : borderColor
  const backgroundColorValue =
    typeof backgroundColor === 'function' ? backgroundColor() : backgroundColor

  return style({
    borderColor: borderColorValue,
    backgroundColor: backgroundColorValue,
  })
}
