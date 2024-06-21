import React      from 'react'

import { Button } from '@ui/button'
import { Box }    from '@ui/layout'
import { Text }   from '@ui/text'

const HomePage = () => (
  <Box width='100%' maxWidth='1224px' flexDirection='column' margin='auto' padding={'$g12'}>
    <Box width='200px' margin='$g17'>
      <Text fontSize='$large' fontWeight='$bold' textAlign='center'>
        Hello World!
      </Text>
    </Box>
    <Button size='large' variant='lightBlue' style={{ width: 200 }}>
      <Text fontSize='$medium' fontWeight='$regular'>
        CLICK
      </Text>
    </Button>
  </Box>
)

export default HomePage
