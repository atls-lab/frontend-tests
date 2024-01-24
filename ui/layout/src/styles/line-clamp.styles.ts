import { Property } from 'csstype'

export interface LineClampProps {
  lineClamp?: Property.LineClamp
}

export const lineClampStyles = ({ lineClamp }: LineClampProps) => ({
  '-webkit-line-clamp': lineClamp,
  '-webkit-box-orient': lineClamp && 'vertical',
  'line-clamp': lineClamp,
  display: lineClamp && '-webkit-box',
})
