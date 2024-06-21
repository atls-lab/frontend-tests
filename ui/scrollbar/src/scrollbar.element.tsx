import React                 from 'react'
import { CSSProperties }     from 'react'
import { PropsWithChildren } from 'react'

import { vars }              from '@ui/theme/src/theme.css'

import { ScrollbarProps }    from './scrollbar.interfaces'
import { baseStyles }        from './scrollbar.styles.css'

export const ScrollbarElement: React.FC<PropsWithChildren<ScrollbarProps>> = ({
  children,
  width,
}) => {
  const style: CSSProperties = {
    '--scrollbar-width': width ? `${width}px` : '0',
    '--scrollbar-thumb-color': vars.colors.blue,
    '--scrollbar-thumb-radius': vars.radii.f20,
  } as CSSProperties

  return (
    <div className={baseStyles} style={style}>
      {children}
    </div>
  )
}
