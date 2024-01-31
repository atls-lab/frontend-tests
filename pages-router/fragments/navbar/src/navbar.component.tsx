import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Hello }            from '@ui/hello'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

export const Navbar = () => {
  const { formatMessage } = useIntl()
  return (
    <Column gap={20}>
      <Box
        justifyContent='center'
        alignItems='center'
        padding='huge'
        backgroundColor='darkRed'
        border='boldLightGray'
        boxShadow='black.fifteenHundredthsTransparent'
        height={50}
        gap={20}
      >
        <Text color='white'>
          <FormattedMessage id='app.navbar_fragment.identity' defaultMessage='IDENTITY' />
        </Text>
        <Hello
          hello={formatMessage({
            id: 'app.navbar.hello',
            defaultMessage: 'HELLO TOO FROM NAVBAR',
          })}
        />
      </Box>
    </Column>
  )
}
