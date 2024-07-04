import { style }                       from '@vanilla-extract/css'

import clsx                            from 'clsx'

import { CreateAddonsContainerStyles } from './create-addons-container-styles.interfaces'

export const addonsContainerBaseStyles = style({
  width: '100%',
  display: 'flex',
})

export const createAddonsContainerAttachStyles = (borderWidth: number) =>
  style({
    position: 'relative',
    marginRight: borderWidth,
    ':focus': {
      zIndex: 1,
    },
    ':hover': {
      zIndex: 2,
    },
  })

export const createAddonsContainerStyles = ({
  attach,
  borderWidth = 1,
}: CreateAddonsContainerStyles) =>
  clsx(addonsContainerBaseStyles, attach && createAddonsContainerAttachStyles(borderWidth))
