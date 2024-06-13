import '@ui/theme/src/vanilla-extract/theme.css'

import React             from 'react'

import { ThemeProvider } from '@ui/theme'

const App = ({ Component, pageProps, ...props }) => (
  <ThemeProvider>
    <Component {...pageProps} {...props} />
  </ThemeProvider>
)

export default App
