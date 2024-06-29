import React                 from 'react'
import { clsx }              from 'clsx'
import { motion }            from 'framer-motion'

import { useSelect }         from '@ui/utils'

import { MenuItem }          from './item'
import { SelectProps }       from './select.interfaces'
import { baseButtonStyles }  from './button'
import { baseMenuSprinkles } from './menu'
import { baseMenuStyles }    from './menu'

export const Select: React.FC<SelectProps> = ({
  items,
  label,
  value,
  onChangeValue,
  placeholder,
  ...props
}) => {
  const { getMenuItemProps, labelProps, buttonProps, menuProps, renderMenu, highlightedIndex } =
    useSelect({
      items,
      onChange: onChangeValue,
    })

  const { className, style, otherProps } = baseMenuSprinkles(props)

  return (
    <>
      <label {...labelProps}>{label}</label>
      <button {...buttonProps} className={baseButtonStyles}>
        {value}
      </button>
      {renderMenu(
        <motion.ul
          {...otherProps}
          className={clsx(baseMenuStyles, otherProps?.className, className)}
          style={{ ...style, ...otherProps?.style }}
          {...menuProps}
        >
          {items.map((item, index) => (
            <MenuItem
              key={`${item}-${index}`}
              highlighted={index === highlightedIndex}
              {...getMenuItemProps(item, index)}
            >
              {item}
            </MenuItem>
          ))}
        </motion.ul>
      )}
    </>
  )
}
