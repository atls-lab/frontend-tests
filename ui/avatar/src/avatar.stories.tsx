import { Meta }                 from '@storybook/react'
import { StoryObj }             from '@storybook/react'

import React                    from 'react'

import { TextTransform }        from '@ui/text-transform'

import { Avatar as AvatarRoot } from './avatar'
import { AvatarVariants }       from './avatar'
import { AvatarFallback }       from './avatar-fallback'
import { AvatarImage }          from './avatar-image'

interface AvatarProps extends AvatarVariants {
  image: string
  fallback: string
}

const meta: Meta<AvatarProps> = {
  title: 'Components/Avatar',
  render: ({ size, shape, image, fallback }) => (
    <AvatarRoot shape={shape} size={size}>
      <AvatarImage src={image} />
      <AvatarFallback size={size}>
        <TextTransform firstLetter upperCase>
          {fallback}
        </TextTransform>
      </AvatarFallback>
    </AvatarRoot>
  ),
  tags: ['autodocs'],
  argTypes: {
    image: {
      name: 'image',
      description: 'Основной контент, изображение',
      table: {
        category: 'Наполнение',
        type: { summary: 'string' },
      },
    },
    fallback: {
      name: 'fallback',
      description: 'Основной контент, описание',
      table: {
        category: 'Наполнение',
        type: { summary: 'string' },
      },
    },
    size: {
      name: 'size',
      description: 'Размер',
      control: { type: 'inline-radio' },
      options: ['small', 'normal', 'large'],
      table: {
        category: 'Форма',
        type: { summary: 'string' },
      },
    },
    shape: {
      name: 'shape',
      description: 'Форма кнопки',
      table: {
        category: 'Форма',
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' },
      },
      control: { type: 'inline-radio' },
      options: ['square', 'circle'],
    },
  },
}

export default meta

type Story = StoryObj<AvatarProps>

export const Avatar: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
    fallback: 'Аватар',
    size: 'normal',
    shape: 'circle',
  },
}