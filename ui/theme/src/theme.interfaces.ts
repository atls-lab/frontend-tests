import { ReactNode } from 'react'

import { vars }      from './theme.css'

export interface ThemeContextType {
  theme: typeof vars
}

export interface ThemeProviderProps {
  children: ReactNode
}
