import React                   from 'react'
import { HTMLAttributes }      from 'react'
import { FC }                  from 'react'
import { clsx }                from 'clsx'
import { useInView }           from 'react-intersection-observer'

import { Condition }           from '@ui/condition'

import { baseInViewBoxStyles } from './in-view-box.css'

export const InViewBox: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const [ref, inView] = useInView({ triggerOnce: false })

  return (
    <div ref={ref} className={clsx(className, baseInViewBoxStyles)} {...props}>
      <Condition match={inView}>{children}</Condition>
    </div>
  )
}
