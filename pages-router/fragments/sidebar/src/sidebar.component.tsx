import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'

export const Sidebar = () => (
  <Box
    justifyContent='center'
    alignItems='center'
    height='calc(100vh - 50px)'
    width={200}
    padding='huge'
    backgroundColor='darkRed'
    borderTop='boldLightGray'
    borderRight='boldLightGray'
  >
    <Text>
      <FormattedMessage id='app.sidebar-fragment.identity' defaultMessage='SIDEBAR' />
    </Text>
  </Box>
)
