import { style }         from '@vanilla-extract/css'

import { CSSProperties } from 'react'

export interface AttachmentShapeStyles {
  fontFamily?: CSSProperties['fontFamily']
  fontSize?: CSSProperties['fontSize']
  fontWeight?: CSSProperties['fontWeight']
}

export const createAttachmentShapeStyles = ({
  fontSize,
  fontWeight,
  fontFamily,
}: AttachmentShapeStyles) => style({ fontSize, fontWeight, fontFamily })
