import React                       from 'react'
import { AnimatePresence }         from 'framer-motion'
import { FC }                      from 'react'
import { clsx }                    from 'clsx'
import { useEffect }               from 'react'
import { useState }                from 'react'
import { createPortal }            from 'react-dom'

import { Box }                     from '@ui/layout'

import { RendererProps }           from './renderer.interfaces'
import { rendererContainerStyles } from './renderer.css'

export const Renderer: FC<RendererProps> = ({ children, className, opened, ...props }) => {
  const [body, setBody] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setBody(document.body)
  }, [])

  return (
    body &&
    createPortal(
      <AnimatePresence>
        {opened && (
          <Box className={clsx(className, rendererContainerStyles)} {...props}>
            {children}
          </Box>
        )}
      </AnimatePresence>,
      body
    )
  )
}