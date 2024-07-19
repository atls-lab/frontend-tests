import { styleVariants } from '@vanilla-extract/css'

export const labelPositionStyles = styleVariants({
  start: { marginRight: 0 },
  end: { marginLeft: 0 },
  top: { marginBottom: 0 },
  bottom: { marginTop: 0 },
});
