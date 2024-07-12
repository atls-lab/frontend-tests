import { Meta }                       from '@storybook/react'
import { StoryObj }                   from '@storybook/react'

import React                          from 'react'

import { Condition }                  from '@ui/condition'
import { Box }                        from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Layout }                     from '@ui/layout'

import { BackgroundImagePlaceholder } from './background-image-placeholder'
import { ImageBoxPlaceholder }        from './image-box-placeholder'
import { ImagePlaceholder }           from './image-placeholder'
import { LogoPlaceholder }            from './logo-placeholder'

const placeholderTypes = [
  'image',
  'image-box',
  'background-image',
  'horizontal-logo',
  'vertical-logo',
] as const

type StoryRenderProps = { type: (typeof placeholderTypes)[number] }

const meta: Meta<StoryRenderProps> = {
  title: 'Components/Placeholder',
  render: ({ type }) => (
    <Column fill alignItems='center' justifyContent='center'>
      <Layout flexBasis='50px' />
      <Condition match={type === 'image'}>
        <ImagePlaceholder />
      </Condition>
      <Condition match={type === 'image-box'}>
        <Box width='320px' height='160px'>
          <ImageBoxPlaceholder />
        </Box>
      </Condition>
      <Condition match={type === 'background-image'}>
        <Box position='absolute' top={0} right={0} bottom={0} left={0}>
          <BackgroundImagePlaceholder />
        </Box>
      </Condition>
      <Condition match={type === 'horizontal-logo'}>
        <LogoPlaceholder type='horizontal' />
      </Condition>
      <Condition match={type === 'vertical-logo'}>
        <LogoPlaceholder type='vertical' />
      </Condition>
      <Layout flexBasis='50px' />
    </Column>
  ),
  tags: ['autodocs'],
  argTypes: {
    type: {
      name: 'Тип',
      description: 'Тип плейсхолдера',
      control: { type: 'radio' },
      options: placeholderTypes,
      table: { category: 'Варианты' },
    },
  },
}

export default meta

export const Placeholder: StoryObj<StoryRenderProps> = {
  args: { type: 'image' },
}
