import { ConvertPixelToValue } from './convert-pixel-to-value.interfaces'

export const convertPixelToValue: ConvertPixelToValue = (styleValue: string): number => {
  const value = Number(styleValue.replace('px', ''))

  if (Number.isNaN(value)) {
    return 0
  }

  return value
}
