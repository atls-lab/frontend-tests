import React      from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'

export const Navbar = () => (
  <Column gap={20}>
    <Box
      justifyContent='center'
      alignItems='center'
      padding='$g24'
      backgroundColor='darkRed'
      border='boldLightGray'
      boxShadow='black.fifteenHundredthsTransparent'
    >
      IDENTITY
    </Box>
  </Column>
)
