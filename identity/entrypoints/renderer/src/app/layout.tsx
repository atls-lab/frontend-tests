import { ThemeProvider } from '@ui/theme'
import React             from 'react'

const RootLayout = ({ children }) => (
  <html>
  <body>
  <ThemeProvider>
    {children}
  </ThemeProvider>
  </body>
  </html>
)

export default RootLayout
