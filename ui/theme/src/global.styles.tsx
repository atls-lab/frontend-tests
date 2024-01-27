'use client'

import { Global }    from '@emotion/react'
import { css }       from '@emotion/react'

import React         from 'react'
import { useEffect } from 'react'
import { polyfill }  from 'seamless-scroll-polyfill'

export const GlobalStyles = () => {
  useEffect(() => {
    polyfill()
  }, [])

  return (
    <Global
      styles={css`
        html,
        body,
        #__next {
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -webkit-overflow-scrolling: touch;
          height: 100%;
          scroll-behavior: smooth;
        }

        html,
        body {
          overflow-x: hidden;
          height: auto;
        }

        #__next {
          display: flex;
          flex-direction: column;
        }
      `}
    />
  )
}
