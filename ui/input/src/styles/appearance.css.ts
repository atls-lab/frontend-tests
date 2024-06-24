import { vars }                   from '@ui/theme/src/theme.css'

import { createAppearanceStyles } from '../utils'

const primaryDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.default.font'],
  backgroundColor: vars.colors['input.blue.default.background'],
})

const primaryHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.hover.font'],
  backgroundColor: vars.colors['input.blue.hover.font'],
})

const primaryFocusStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.focus.font'],
  backgroundColor: vars.colors['input.blue.focus.font'],
})

const primaryActiveStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.active.font'],
  backgroundColor: vars.colors['input.blue.active.font'],
})

const primaryDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.disabled.font'],
  backgroundColor: vars.colors['input.blue.disabled.font'],
})

export const appearanceVariant = {
  blue: primaryDefaultStyles,
}

export const appearanceHover = {
  blueHover: primaryHoverStyles,
}

export const appearanceFocus = {
  bluePressed: primaryFocusStyles,
}

export const appearanceActive = {
  bluePressed: primaryActiveStyles,
}

export const appearanceDisabled = {
  blueDisabled: primaryDisabledStyles,
}
