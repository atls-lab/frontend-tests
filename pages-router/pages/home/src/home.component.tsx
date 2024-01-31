import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Navbar }           from '@app/navbar-fragment'
import { Sidebar }          from '@app/sidebar-fragment'
import { Hello }            from '@ui/hello'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

const HomePage = () => {
  const { formatMessage } = useIntl()
  return (
    <>
      <Navbar />
      <Row fill>
        <Sidebar />
        <Box gap={20}>
          <Hello
            hello={formatMessage({ id: 'app.home_page.hello', defaultMessage: 'HELLO FROM HOME' })}
          />
          <Text>
            <FormattedMessage id='app.home_page.content' defaultMessage='CONTENT' />
          </Text>
        </Box>
      </Row>
    </>
  )
}

export default HomePage
