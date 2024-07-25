import 'react-datepicker/dist/react-datepicker.css'

import React                      from 'react'
import DatepickerComponent        from 'react-datepicker'
import { FC }                     from 'react'
import { useEffect }              from 'react'
import { setDefaultLocale }       from 'react-datepicker'

import { DatepickerProps }        from './datepicker.interface'
import { createAppearanceStyles } from './utils'
import { createShapeStyles }      from './utils'
import { registerLocales }        from './utils'

export const Datepicker: FC<DatepickerProps> = ({ withBaseStyle = true, ...props }) => {
  useEffect(() => {
    registerLocales()
    setDefaultLocale('ru')
  }, [])

  useEffect(() => {
    if (withBaseStyle) {
      const shapeStyles = createShapeStyles(props)
      const appearanceStyles = createAppearanceStyles(props)
    }
  }, [withBaseStyle, props])

  return <DatepickerComponent {...props} />
}
