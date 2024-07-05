import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { baseInputStyles }        from '../input'

export const baseTextareaContainerStyles = baseInputStyles

const textareaContainerProperties = defineProperties({
  dynamicProperties: {
    color: true,
    backgroundColor: true,
    borderColor: true,

    borderBottomRightRadius: true,
    borderTopRightRadius: true,
    borderBottomLeftRadius: true,
    borderTopLeftRadius: true,
    borderRadius: true,

    paddingRight: true,
    paddingLeft: true,

    height: true,
    borderWidth: true,
    fontSize: true,
    fontWeight: true,
    fontFamily: true,
  },
  shorthands: {
    fontColor: ['color'],
    size: ['height'],
  },
})

export const textareaContainerSprinkles = createRainbowSprinkles(textareaContainerProperties)

export type TextareaContainerSprinkles = Parameters<typeof textareaContainerSprinkles>[0]
