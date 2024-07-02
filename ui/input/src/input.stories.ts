import { Meta }     from '@storybook/react'
import { StoryObj } from '@storybook/react'

import { Input }    from './input.component'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['blue'],
    },
    size: {
      control: { type: 'select' },
      options: ['normal', 'big'],
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
