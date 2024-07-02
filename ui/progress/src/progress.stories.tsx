import React        from 'react'
import { useState } from 'react'

import { Button }   from '@ui/button'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Row }      from '@ui/layout'

import { Circle }   from './circle'
import { Line }     from './line'

export default {
  title: 'Components/Progress',
}

export const Base = () => (
  <Column width='300px'>
    <Layout>
      <Line percent={50} />
    </Layout>
    <Layout flexBasis='16px' />
    <Layout width='100%'>
      <Circle percent={50} width='200px' height='200px' />
    </Layout>
  </Column>
)

Base.story = {
  name: 'Базовый',
}

export const Size = () => (
  <Column width='400px'>
    <Layout>
      <Line percent={50} />
    </Layout>
    <Layout flexBasis='16px' />
    <Layout>
      <Line percent={50} strokeWeight={15} />
    </Layout>
    <Layout flexBasis='16px' />
    <Layout width='100%'>
      <Row alignItems='center' flexWrap='wrap'>
        <Layout>
          <Circle percent={30} width='50px' height='50px' />
        </Layout>
        <Layout flexBasis='16px' />
        <Layout>
          <Circle percent={50} trailWidth={2} strokeWeight={12} width='100px' height='100px' />
        </Layout>
        <Layout flexBasis='16px' />
        <Layout>
          <Circle percent={80} trailWidth={8} strokeWeight={15} width='150px' height='150px' />
        </Layout>
      </Row>
    </Layout>
  </Column>
)

Size.story = {
  name: 'Размеры',
}

export const Dinamic = () => {
  const [percent, setPercent] = useState(40)

  const increase = () => {
    let newPercent = percent + 10
    if (newPercent > 100) {
      newPercent = 100
    }
    setPercent(newPercent)
  }

  const decline = () => {
    let newPercent = percent - 10
    if (newPercent < 0) {
      newPercent = 0
    }
    setPercent(newPercent)
  }

  return (
    <Column width='400px'>
      <Layout>
        <Line percent={percent} />
      </Layout>
      <Layout flexBasis='16px' />
      <Layout>
        <Button onClick={() => decline()}>Отнять</Button>
        <Button onClick={() => increase()}>Прибавить</Button>
      </Layout>
      <Layout flexBasis='16px' />
      <Layout width='100%'>
        <Circle percent={percent} width='200px' height='200px' />
      </Layout>
    </Column>
  )
}

Dinamic.story = {
  name: 'Изменить значение',
}

export const LineCap = () => (
  <Column width='400px'>
    <Layout>
      <Line percent={40} strokeLinecap='round' trailLinecap='round' />
    </Layout>
    <Layout flexBasis='16px' />
    <Layout>
      <Line percent={40} />
    </Layout>
    <Layout flexBasis='16px' />
    <Layout width='100%'>
      <Row>
        <Layout>
          <Circle percent={40} strokeLinecap='round' width='150px' height='150px' />
        </Layout>
        <Layout flexBasis='16px' />
        <Layout>
          <Circle percent={40} width='150px' height='150px' />
        </Layout>
      </Row>
    </Layout>
  </Column>
)

LineCap.story = {
  name: 'Форма на концах',
}

export const MultyLines = () => (
  <Column width='400px'>
    <Layout>
      <Line percent={[20, 50, 100]} strokeColor={['#1890ff', '#52c41a', '#ff4d4f']} />
    </Layout>
    <Layout flexBasis='16px' />
    <Layout width='100%'>
      <Circle
        percent={[33, 33, 34]}
        strokeLinecap='square'
        strokeColor={['#1890ff', '#52c41a', '#ff4d4f']}
        width='200px'
        height='200px'
      />
    </Layout>
  </Column>
)

MultyLines.story = {
  name: 'Несколько сегментов',
}

export const Gradient = () => (
  <Column width='400px'>
    <Layout>
      <Line
        percent={[20, 50, 100]}
        strokeColor={[
          { direction: 'to left', from: 'purple', to: 'pink' },
          { '100%': '#108ee9', '0%': '#87d068' },
          { '0%': 'red', '100%': 'yellow' },
        ]}
      />
    </Layout>
    <Layout flexBasis='16px' />
    <Layout width='100%'>
      <Circle
        percent={[33, 33, 34]}
        strokeColor={[
          { '0%': 'purple', '100%': 'pink' },
          { '0%': 'red', '100%': 'yellow' },
          { '100%': '#108ee9', '0%': '#87d068' },
        ]}
        width='200px'
        height='200px'
      />
    </Layout>
  </Column>
)

Gradient.story = {
  name: 'Градиенты',
}

export const CircleGap = () => (
  <Column width='400px'>
    <Layout>
      <Circle percent={40} gapDegree={70} width='200px' height='200px' />
    </Layout>
    <Layout flexBasis='16px' />
    <Layout width='100%'>
      <Circle percent={40} gapDegree={70} gapPosition='bottom' width='200px' height='200px' />
    </Layout>
  </Column>
)

CircleGap.story = {
  name: 'Разрыв круга',
}
