import React                  from 'react'
import { FC }                 from 'react'
import { clsx }               from 'clsx'
import { useScroll }          from 'framer-motion'
import { useEffect }          from 'react'
import { useMemo }            from 'react'
import { useRef }             from 'react'

import { useWindowSize }      from '@ui/utils'

import { ParallaxStore }      from '../context'
import { Provider }           from '../context'
import { ParallaxProps }      from './parallax.interfaces'
import { baseParallaxStyles } from './parallax.css'

export const Parallax: FC<ParallaxProps> = ({ children, className, isIphone, ...props }) => {
  const parallaxRef = useRef<HTMLDivElement>(null)

  const { scrollY: scrollViewport } = useScroll()
  const { scrollY: scrollElement } = useScroll({ container: parallaxRef })

  const { innerHeight } = useWindowSize()

  const store = useMemo(
    () => new ParallaxStore(isIphone ? scrollElement : scrollViewport, innerHeight),
    [innerHeight, isIphone, scrollElement, scrollViewport]
  )

  useEffect(() => {
    if (!isIphone) return

    const htmlStyle = document.getElementsByTagName('html')[0].style
    const bodyStyle = document.getElementsByTagName('body')[0].style

    htmlStyle.height = '100%'
    htmlStyle.overflow = 'hidden'
    bodyStyle.height = '100%'
    bodyStyle.overflow = 'hidden'
  }, [isIphone])

  return (
    <Provider value={store}>
      <div ref={parallaxRef} className={clsx(className, baseParallaxStyles)} {...props}>
        {children}
      </div>
    </Provider>
  )
}