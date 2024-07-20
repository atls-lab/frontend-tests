import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'

import { Switch }            from '@ui/switch'
import { useHover }          from '@ui/utils'

import { Container }         from './container'
import { Expander }          from './expander'
import { Items }             from './items'
import { Pinner }            from './pinner'
import { Wrapper }           from './wrapper'
import { usePinnedState }    from './hooks'

export const Sidebar: FC<PropsWithChildren> = ({ children }) => {
  const [hovered, hoverProps] = useHover()
  const [pinned, setPinned] = usePinnedState()

  return (
    <Wrapper pinned={pinned}>
      <Container {...hoverProps}>
        <Expander opened={pinned || hovered}>
          <Items>{children}</Items>
          <Pinner>
            <Switch checked={pinned} onChange={setPinned} />
          </Pinner>
        </Expander>
      </Container>
    </Wrapper>
  )
}
