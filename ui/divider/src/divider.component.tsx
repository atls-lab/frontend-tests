import React            from 'react'
import { FC }           from 'react'

import { DividerProps } from './divider.interface'

const Divider: FC<DividerProps> = ({
  rounding = '$none',
  weight = 1,
  color = '$black',
  ...props
}) => {
  const style = {
    height: `${weight}px`,
    backgroundColor: color,
    borderRadius: rounding,
    width: '100%',
  }

  return <div style={style} {...props} />
}

export { Divider }
