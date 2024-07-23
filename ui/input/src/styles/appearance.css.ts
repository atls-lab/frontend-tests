import { vars }                   from '@ui/theme/src/theme.css'

import { createAppearanceStyles } from '../utils'

const primaryDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.default.font'],
  backgroundColor: vars.colors['input.blue.default.background'],
})

const primaryHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.hover.font'],
  backgroundColor: vars.colors['input.blue.hover.background'],
})

const primaryFocusStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.focus.font'],
  backgroundColor: vars.colors['input.blue.focus.background'],
})

const primaryActiveStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.active.font'],
  backgroundColor: vars.colors['input.blue.active.background'],
})

const primaryDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['input.blue.disabled.font'],
  backgroundColor: vars.colors['input.blue.disabled.background'],
})

const whiteDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['input.white.default.font'],
  backgroundColor: vars.colors['input.white.default.background'],
  borderColor: vars.colors['input.white.default.border'],
})

const whiteHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['input.white.hover.font'],
  backgroundColor: vars.colors['input.white.hover.background'],
  borderColor: vars.colors['input.white.hover.border'],
})

const whiteFocusStyles = createAppearanceStyles({
  fontColor: vars.colors['input.white.focus.font'],
  backgroundColor: vars.colors['input.white.focus.background'],
  borderColor: vars.colors['input.white.focus.border'],
})

const whiteActiveStyles = createAppearanceStyles({
  fontColor: vars.colors['input.white.active.font'],
  backgroundColor: vars.colors['input.white.active.font'],
  borderColor: vars.colors['input.white.active.border'],
})

const whiteDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['input.white.disabled.font'],
  backgroundColor: vars.colors['input.white.disabled.background'],
  borderColor: vars.colors['input.white.disabled.border'],
})

export const appearanceVariant = {
  blue: primaryDefaultStyles,
  white: whiteDefaultStyles,
}

export const appearanceHover = {
  blueHover: primaryHoverStyles,
  whiteHover: whiteHoverStyles,
}

export const appearanceFocus = {
  bluePressed: primaryFocusStyles,
  whitePressed: whiteFocusStyles,
}

export const appearanceActive = {
  bluePressed: primaryActiveStyles,
  whitePressed: whiteActiveStyles,
}

export const appearanceDisabled = {
  blueDisabled: primaryDisabledStyles,
  whiteDisabled: whiteDisabledStyles,
}
