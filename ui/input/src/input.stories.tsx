import { Meta }     from '@storybook/react'
import { StoryObj } from '@storybook/react'

import { Input }    from './input.component'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Вариант инпута',
      control: { type: 'inline-radio' },
      options: ['blue'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' },
      },
    },
    size: {
      description: 'Размер инпута',
      control: { type: 'inline-radio' },
      options: ['normal', 'big'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Variants: Story = {
  args: {
    variant: 'blue',
    size: 'normal',
  },
}