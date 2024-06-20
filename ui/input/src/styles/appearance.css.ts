import { vars }                   from '@ui/theme/src/theme.css'

import { createAppearanceStyles } from '../utils'

const primaryDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors.input.primary.default.font,
  backgroundColor: vars.colors.input.primary.default.background,
})

const primaryHoverStyles = createAppearanceStyles({
  fontColor: vars.colors.input.primary.hover.font,
  backgroundColor: vars.colors.input.primary.hover.background,
})

const primaryFocusWithinStyles = createAppearanceStyles({
  fontColor: vars.colors.input.primary.focus.font,
  backgroundColor: vars.colors.input.primary.focus.background,
})

const primaryActiveStyles = createAppearanceStyles({
  fontColor: vars.colors.input.primary.active.font,
  backgroundColor: vars.colors.input.primary.active.background,
})

const primaryDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors.input.primary.disabled.font,
  backgroundColor: vars.colors.input.primary.disabled.background,
})

export const primaryInputStyles = {
  default: primaryDefaultStyles,
  hover: primaryHoverStyles,
  focus: primaryFocusWithinStyles,
  active: primaryActiveStyles,
  disabled: primaryDisabledStyles,
}
