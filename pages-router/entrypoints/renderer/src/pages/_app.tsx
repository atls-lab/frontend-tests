import '@ui/theme/src/theme.css'

import React from 'react'

const App = ({ Component, pageProps, ...props }) => <Component {...pageProps} {...props} />

export default App
