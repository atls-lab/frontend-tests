import { style }                  from '@vanilla-extract/css'

import { ButtonAppearanceStyles } from './create-appearance-styles.interfaces'

export const createAppearanceStyles = ({
  fontColor,
  backgroundColor,
  borderColor,
}: ButtonAppearanceStyles) =>
  style({
    color: fontColor,
    backgroundColor,
    borderColor: borderColor || backgroundColor,
  })
