import { defineProperties } from 'rainbow-sprinkles'

import { vars }             from '../theme.css'

export const shadowProperties = defineProperties({
  staticProperties: {
    boxShadow: vars.shadows,
    textShadow: vars.shadows,
  },
})
