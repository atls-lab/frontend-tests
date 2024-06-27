/* eslint-disable @typescript-eslint/no-shadow */

import React                 from 'react'
import { AnimatePresence }   from 'framer-motion'
import { FC }                from 'react'
import { useCombobox }       from 'downshift'
import { useEffect }         from 'react'
import { useState }          from 'react'
import { useLayer }          from 'react-laag'

import { Input }             from '@ui/input'

import { Arrow }             from './arrow'
import { AutocompleteProps } from './autocomplete.interfaces'
import { ValueType }         from './autocomplete.interfaces'
import { Indicator }         from './indicator'
import { Layer }             from './layer'
import { Menu }              from './menu'
import { MenuItem }          from './menu-item'

export const Autocomplete: FC<AutocompleteProps> = ({
  options = [],
  value,
  getOptionLabel = (option: ValueType | null) => (option ? option.value : ''),
  onChange,
  onInputChange,
}) => {
  const [items, setItems] = useState(options)

  const {
    isOpen,
    inputValue,
    selectedItem,
    highlightedIndex,
    getMenuProps,
    getInputProps,
    getItemProps,
    getToggleButtonProps,
    openMenu,
  } = useCombobox({
    items,
    itemToString: getOptionLabel,
    defaultSelectedItem: value,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        onChange?.(selectedItem)
      }
    },
    onIsOpenChange: ({ selectedItem, inputValue }) => {
      if (selectedItem && !inputValue) {
        onChange?.({ value: '' })
      }
    },
  })

  const { layerProps, renderLayer, triggerProps, triggerBounds } = useLayer({
    isOpen,
    auto: true,
    triggerOffset: 0,
    placement: 'bottom-start',
    possiblePlacements: ['bottom-start', 'top-start'],
  })

  useEffect(() => {
    if (inputValue && selectedItem && inputValue !== getOptionLabel(selectedItem)) {
      setItems(
        options.filter((item) =>
          getOptionLabel(item).toLowerCase().startsWith(inputValue.toLowerCase()))
      )
    } else {
      setItems(options)
    }
  }, [options, inputValue, selectedItem, getOptionLabel])

  useEffect(() => {
    onInputChange?.(inputValue)
  }, [inputValue, onInputChange])

  const suffix = (
    <Indicator {...getToggleButtonProps()}>
      <Arrow isOpen={isOpen} />
    </Indicator>
  )

  return (
    <>
      <Input
        size='normal'
        variant='blue'
        onFocus={openMenu}
        suffix={suffix}
        {...getInputProps(triggerProps)}
      />
      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <Layer
              ref={layerProps.ref}
              style={{ ...layerProps.style, width: triggerBounds?.width }}
            >
              <Menu {...getMenuProps({ style: {} })}>
                {items.map((item, index) => (
                  <MenuItem
                    {...getItemProps({ key: item.value, index, item })}
                    selected={selectedItem === item}
                    hover={highlightedIndex === index}
                  >
                    {getOptionLabel(item)}
                  </MenuItem>
                ))}
              </Menu>
            </Layer>
          )}
        </AnimatePresence>
      )}
    </>
  )
}
