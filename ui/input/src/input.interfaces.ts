import { RecipeVariants }      from '@vanilla-extract/recipes'

import { InputHTMLAttributes } from 'react'

import { inputStyles }         from './styles'

type InputHTMLAttributesWithoutSize = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export type InputVariants = Pick<
  NonNullable<RecipeVariants<typeof inputStyles>>,
  'size' | 'variant'
>

export interface InputProps extends InputHTMLAttributesWithoutSize, InputVariants {
  icon?: JSX.Element
}