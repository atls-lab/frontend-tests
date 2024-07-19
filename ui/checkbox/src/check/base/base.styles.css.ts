import { style } from '@vanilla-extract/css'

export const checkBaseStyles = style({
  width: '100%',
  height: '100%',
  display: 'none',
  backgroundColor: "black"
});

export const checkCheckedStyles = style({
  display: 'block',
});
