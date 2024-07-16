import { Meta }                         from '@storybook/react'

import React                           from 'react'

import { Layout }                      from '@ui/layout'

import { Divider as DividerComponent } from './divider.component'

export default {
  title: 'Components/Divider',
  component: DividerComponent,
  tags: ['autodocs'],
  argTypes: {
    rounding: {
      name: 'Rounding',
      description: 'Border radius',
      control: {
        type: 'number',
      },
    },
    weight: {
      name: 'Weight',
      description: 'Thickness of the divider',
      control: {
        type: 'number',
      },
    },
    color: {
      name: 'Color',
      description: 'Color of the divider',
      control: {
        type: 'color',
      },
    },
  },
} as Meta

export const Divider = ({ rounding, weight, color }) => (
  <Layout>
    <DividerComponent rounding={rounding} weight={weight} color={color} />
  </Layout>
)

Divider.args = {
  rounding: 17,
  weight: 1,
  color: 'red',
}

Divider.argTypes = {
  rounding: {
    name: 'Закругление',
    description: 'Закругление',
    control: {
      type: 'number',
    },
  },
  weight: {
    name: 'Толщина',
    description: 'Толщина',
    control: {
      type: 'number',
    },
  },
  color: {
    name: 'Цвет',
    description: 'Цвет',
    control: {
      type: 'color',
    },
  },
}
