import { style } from '@vanilla-extract/css'

export const createAttachmentPositionStyles = (
  type: 'prefix' | 'suffix',
  offsetLeft: number,
  offsetRight: number
) => (type === 'prefix' ? style({ paddingRight: offsetLeft }) : style({ paddingLeft: offsetRight }))
