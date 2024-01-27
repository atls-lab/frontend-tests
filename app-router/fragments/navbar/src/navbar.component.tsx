import React      from 'react'

import { Hello }  from '@ui/hello'
import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'

export const Navbar = () => (
  <Column gap={20}>
    <Box
      justifyContent='center'
      alignItems='center'
      padding='huge'
      backgroundColor='darkRed'
      border='boldLightGray'
      boxShadow='black.fifteenHundredthsTransparent'
    >
      IDENTITY
    </Box>
    <Hello />
  </Column>
)
