import { Meta }     from '@storybook/react'
import { StoryObj } from '@storybook/react'

import { Button }   from './button.component'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['blue', 'lightBlue'],
    },
    size: {
      control: { type: 'select' },
      options: [
        'normal',
        'medium',
        'large',
        'small',
        'huge',
        'smallSizeMediumRadii',
        'autoSize',
        'semiMedium',
        'autoSizeRound',
      ],
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Variants: Story = {
  args: {
    variant: 'blue',
    children: 'Text',
    size: 'large',
  },
}
