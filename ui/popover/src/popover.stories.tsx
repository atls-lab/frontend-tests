import { Meta }              from '@storybook/react'
import { StoryObj }          from '@storybook/react'

import React                 from 'react'
import { HTMLAttributes }    from 'react'
import { forwardRef }        from 'react'

import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'

import { Popover }           from './popover.component'
import { closeButtonStyles } from './tooltip.css'
import { testButtonStyles }  from './tooltip.css'
import { usePopover }        from './use-popover.hook'

const meta: Meta = {
  title: 'Components/Popover',
  tags: ['autodocs'],
}

export default meta

const TestButton = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((
  { children, ...props },
  ref
) => (
  <div ref={ref} className={testButtonStyles} {...props}>
    {children}
  </div>
))

export const Base: StoryObj = {
  name: 'Базовый',
  render: () => (
    <Column fill alignItems='center'>
      <Layout flexBasis='100px' />
      <Popover
        title='Title'
        trigger='click'
        showArrow={false}
        closeOnOutsideClick={false}
        content={<div>Content</div>}
      >
        <TestButton>Click</TestButton>
      </Popover>
      <Layout flexBasis='100px' />
    </Column>
  ),
}

const TestContent = ({ onClick }) => (
  <div>
    <div>Content</div>
    <div className={closeButtonStyles} onClick={onClick}>
      Close
    </div>
  </div>
)

export const Hook: StoryObj = {
  name: 'Хук',
  render: () => {
    const { triggerProps, render, close, isOpen } = usePopover({ animate: true })

    return (
      <Column fill alignItems='center'>
        <Layout flexBasis='100px' />
        {isOpen && render({ title: 'Title', content: <TestContent onClick={close} /> })}
        <TestButton {...triggerProps}>Hook</TestButton>
        <Layout flexBasis='100px' />
      </Column>
    )
  },
}