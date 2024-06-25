import { RecipeVariants }       from '@vanilla-extract/recipes'

import { ButtonHTMLAttributes } from 'react'
import { PropsWithChildren }    from 'react'

import { buttonStyles }         from './styles/styles.css'

export type ButtonVariants = Pick<
  NonNullable<RecipeVariants<typeof buttonStyles>>,
  'size' | 'variant'
>

export enum IconPlacement {
  LEFT = 'Left',
  RIGHT = 'Right',
}

export interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  icon?: JSX.Element
  iconPlacement?: IconPlacement
}
