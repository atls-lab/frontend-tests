import React                       from 'react'
import { Arrow }                   from 'react-laag'
import { motion }                  from 'framer-motion'
import { forwardRef }              from 'react'

import { Condition }               from '@ui/condition'

import { ContainerInner }          from '../container-inner'
import { ContainerTitle }          from '../container-title'
import { ContainerComponentProps } from './container.interfaces'
import { containerStyles }         from './container.css'

export const Container = forwardRef<HTMLDivElement, ContainerComponentProps>((
  { title, content, showArrow, arrowOptions, arrowProps, layerSide, animate, style },
  ref
) => (
  <motion.div
    ref={ref}
    className={containerStyles}
    initial={animate ? { opacity: 0, scale: 0.8 } : {}}
    animate={animate ? { opacity: 1, scale: 1, y: 0 } : {}}
    exit={animate ? { opacity: 0, scale: 0.8 } : {}}
    transition={{ type: 'spring', damping: 30, stiffness: 500 }}
    style={style}
  >
    <Condition match={Boolean(title)}>
      <ContainerTitle>{title}</ContainerTitle>
    </Condition>
    <Condition match={Boolean(content)}>
      <ContainerInner>{content}</ContainerInner>
    </Condition>
    <Condition match={Boolean(showArrow)}>
      <Arrow layerSide={layerSide} {...arrowOptions} {...arrowProps} />
    </Condition>
  </motion.div>
))
