import React                                                           from 'react'

import { forwardRef }                                            from 'react'

import { useState }                                  from 'react'

import { CheckboxProps }                                                from './checkbox.interfaces'
import { boxBaseStyles }                                                from './box'
import { boxShapeStyles }                                from './box'
import { boxColorStyles }                                               from './box/appearance'
import { checkBaseStyles }                                              from './check'
import { checkCheckedStyles }                          from './check'
import { containerBaseStyles }                                          from './container'
import { containerPositionStyles }                 from './container'
import { hiddenInputStyles }                                            from './hidden-input'
import { labelAppearanceStyles }                                        from './label'

import { labelPositionStyles }                   from './label'

import { labelShapeStyles } from './label'

const CheckboxWithoutRef: React.ForwardRefRenderFunction<HTMLDivElement, CheckboxProps> = (
  {
    onCheck,
    children,
    active,
    labelPosition = 'end',
    size = 'medium',
    color = 'blue',
    icon,
    ...props
  },
  ref
) => {
  const [isChecked, setIsChecked] = useState(active)

  const handleCheck = () => {
    setIsChecked(!isChecked)
    onCheck(!isChecked)
  }

  const checkStyle = isChecked ? checkCheckedStyles : ''

  return (
    <div
      className={`${containerBaseStyles} ${containerPositionStyles[labelPosition]}`}
      onClick={handleCheck}
      ref={ref}
      {...props}
    >
      <input
        className={hiddenInputStyles}
        checked={isChecked}
        type='checkbox'
        onChange={() => handleCheck()}
      />
      <div className={`${boxBaseStyles} ${boxShapeStyles[size]} ${boxColorStyles[color]}`}>
        <div className={`${checkBaseStyles} ${checkStyle}`}>{icon}</div>
      </div>
      <div
        className={`${labelShapeStyles} ${labelAppearanceStyles} ${labelPositionStyles[labelPosition]}`}
      >
        {children}
      </div>
    </div>
  )
}

export const Checkbox = forwardRef(CheckboxWithoutRef)
