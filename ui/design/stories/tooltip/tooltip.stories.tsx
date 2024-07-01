import React                from 'react'
import { HTMLAttributes }   from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'
import { useState }         from 'react'

import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Box }              from '@ui/layout'
import { Tooltip }          from '@ui/tooltip'
// import { testContainerStyles } from './tooltip.css'
import { useTooltip }       from '@ui/tooltip'

import { testButtonStyles } from './tooltip.css'

export default {
  title: 'Components/Tooltip',
}

const TestButton = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((
  { children, ...props },
  ref
) => (
  <div ref={ref} className={testButtonStyles} {...props}>
    {children}
  </div>
))

export const Base = () => (
  <Column justifyContent='center' alignItems='center'>
    <Layout minHeight='400px' width='1000px' pt='50px' pl='150px'>
      <Tooltip text='test' trigger='click' animate>
        <TestButton>Base</TestButton>
      </Tooltip>
    </Layout>
  </Column>
)

Base.story = {
  name: 'Базовый',
}

export const Hook = () => {
  const { triggerProps, render } = useTooltip({ animate: true })

  return (
    <Row>
      <Layout mt='50px'>
        {render({ text: 'Hook' })}
        <TestButton {...triggerProps}>Hook</TestButton>
      </Layout>
    </Row>
  )
}

Hook.story = {
  name: 'Хук',
}

export const Anchor = () => (
  <Column m='50px' justifyContent='center' alignItems='center'>
    <Row mb='50px'>
      <Layout mr='24px'>
        <Tooltip text='test' anchor='top-start'>
          <TestButton>top-start</TestButton>
        </Tooltip>
      </Layout>
      <Layout mr='24px'>
        <Tooltip text='test' anchor='top-center'>
          <TestButton>top-center</TestButton>
        </Tooltip>
      </Layout>
      <Layout>
        <Tooltip text='test' anchor='top-end'>
          <TestButton>top-right</TestButton>
        </Tooltip>
      </Layout>
    </Row>
    <Row mb='50px'>
      <Layout mr='24px'>
        <Tooltip text='test' anchor='bottom-start'>
          <TestButton>bottom-start</TestButton>
        </Tooltip>
      </Layout>
      <Layout mr='24px'>
        <Tooltip text='test' anchor='bottom-center'>
          <TestButton>bottom-center</TestButton>
        </Tooltip>
      </Layout>
      <Layout>
        <Tooltip text='test' anchor='bottom-end'>
          <TestButton>bottom-end</TestButton>
        </Tooltip>
      </Layout>
    </Row>
    <Row mb='50px'>
      <Layout mr='24px'>
        <Tooltip text='test' anchor='left-center'>
          <TestButton>left-center</TestButton>
        </Tooltip>
      </Layout>
    </Row>
    <Row>
      <Layout mr='24px'>
        <Tooltip text='test' anchor='right-center'>
          <TestButton>right-center</TestButton>
        </Tooltip>
      </Layout>
    </Row>
  </Column>
)

Anchor.story = {
  name: 'Привязка',
}

export const Trigger = () => (
  <Row justifyContent='center' alignItems='center'>
    <Layout mt='50px' mr='24px'>
      <Tooltip text='test' trigger='click'>
        <TestButton>Click</TestButton>
      </Tooltip>
    </Layout>
    <Layout mt='50px' mr='24px'>
      <Tooltip text='test' trigger='hover'>
        <TestButton>Hover</TestButton>
      </Tooltip>
    </Layout>
    <Layout mt='50px'>
      <Tooltip text='test' trigger='menu'>
        <TestButton>Context menu</TestButton>
      </Tooltip>
    </Layout>
  </Row>
)

Trigger.story = {
  name: 'Триггер',
}

export const WithArrow = () => (
  <Row justifyContent='center' alignItems='center'>
    <Layout mt='50px'>
      <Tooltip text='test' showArrow>
        <TestButton>Arrow</TestButton>
      </Tooltip>
    </Layout>
  </Row>
)

WithArrow.story = {
  name: 'Стрелка',
}

export const WithContainer = () => (
  <Row justifyContent='center' alignItems='center'>
    <Layout mt='50px'>
      <Tooltip text='test' container={<Box />}>
        <TestButton>WithContainer</TestButton>
      </Tooltip>
    </Layout>
  </Row>
)

WithContainer.story = {
  name: 'Собственный контейнер',
}

export const Animate = () => (
  <Row justifyContent='center' alignItems='center'>
    <Layout mt='50px' mr='24px'>
      <Tooltip text='test' animate>
        <TestButton>With animate</TestButton>
      </Tooltip>
    </Layout>
    <Layout mt='50px'>
      <Tooltip text='test'>
        <TestButton>Without animate</TestButton>
      </Tooltip>
    </Layout>
  </Row>
)

Animate.story = {
  name: 'Анимация',
}

export const Controlled = () => {
  const [open, setOpen] = useState(false)

  return (
    <Row justifyContent='center' alignItems='center'>
      <Layout mt='50px' mr='24px'>
        <Tooltip text='test' trigger='hover' isOpen={open} closeOnOutsideClick={false} animate>
          <TestButton>Controlled</TestButton>
        </Tooltip>
      </Layout>
      <Layout mt='50px'>
        <TestButton onClick={() => setOpen(!open)}>Click</TestButton>
      </Layout>
    </Row>
  )
}

Controlled.story = {
  name: 'Управляемое открытие',
}
