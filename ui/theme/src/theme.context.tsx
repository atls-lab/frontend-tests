import { createContext }    from 'react'

import { ThemeContextType } from './theme.interfaces'

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
