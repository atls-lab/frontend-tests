import '@ui/theme'

import React from 'react'

const App = ({ Component, pageProps, ...props }) => <Component {...pageProps} {...props} />

export default App
