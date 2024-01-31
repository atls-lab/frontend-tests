import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

import messages          from '../../locales/ru.json'

const App = ({ Component, pageProps, ...props }) => (
  <IntlProvider defaultLocale='ru' locale='ru' messages={messages}>
    <ThemeProvider>
      <Component {...pageProps} {...props} />
    </ThemeProvider>
  </IntlProvider>
)

export default App
