import { style } from '@vanilla-extract/css'

export const containerPositionStyles = {
  start: style({
    flexDirection: 'row-reverse',
  }),
  top: style({
    flexDirection: 'column-reverse',
  }),
  end: style({
    flexDirection: 'row',
  }),
  bottom: style({
    flexDirection: 'column',
  }),
}
