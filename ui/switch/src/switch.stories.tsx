import { Meta }                                                  from '@storybook/react'

import React                                                     from 'react'

import { useRef }                                          from 'react'

import { useSwitch }                                              from '@ui/utils'

import { baseHandleStyles }                                       from './switch.style.css'

import { baseThumbStyles }                      from './switch.style.css'

import { disabledThumbStyles } from './switch.style.css'

export default {
  title: 'Компоненты/Переключатель/Примеры',
} as Meta

const HandleElement = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>((
  props,
  ref
) => {
  return <button className={baseHandleStyles} ref={ref} {...props} />
})

interface ThumbElementProps {
  disabled?: boolean
  checked?: boolean
}

const ThumbElement: React.FC<ThumbElementProps> = ({ disabled, checked }) => {
  return (
    <span
      className={`${baseThumbStyles} ${disabled ? disabledThumbStyles : ''}`}
      data-checked={checked}
    />
  )
}

export interface SwitchProps {
  disabled?: boolean
  checked?: boolean
  onChange?: (checked: boolean) => void
  ThumbComponent?: React.ComponentType<any>
  HandleComponent?: React.ComponentType<any>
}

export const Switch: React.FC<SwitchProps> = ({
  disabled,
  checked: defaultValue,
  onChange,
  ThumbComponent = ThumbElement,
  HandleComponent = HandleElement,
}) => {
  const node = useRef<HTMLButtonElement>(null)
  const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

  return (
    <HandleComponent ref={node} onClick={setChecked}>
      <ThumbComponent disabled={disabled} checked={checked} />
    </HandleComponent>
  )
}

const Example = ({ title, children }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
    <div style={{ marginRight: '16px' }}>{children}</div>
    <div style={{ fontFamily: 'primary' }}>{title}</div>
  </div>
)

export const BaseExample: React.FC = () => {
  return <Switch />
}

export const ColorExample = () => {
  return (
    <Switch
      ThumbComponent={(props) => (
        <ThumbElement
          {...props}
          style={{ background: '#ffffff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26)' }}
        />
      )}
      HandleComponent={(props) => (
        <HandleElement {...props} style={{ background: '#4695ff', borderColor: '#4695ff' }} />
      )}
    />
  )
}

export const ShapeExample = () => {
  return (
    <Switch
      ThumbComponent={(props) => <ThumbElement {...props} style={{ borderRadius: 0 }} />}
      HandleComponent={(props) => <HandleElement {...props} style={{ borderRadius: 0 }} />}
    />
  )
}

export const SizeExample = () => {
  return (
    <Switch
      ThumbComponent={(props) => <ThumbElement {...props} style={{ width: 24, height: 24 }} />}
      HandleComponent={(props) => <HandleElement {...props} style={{ width: 64, height: 28 }} />}
    />
  )
}
