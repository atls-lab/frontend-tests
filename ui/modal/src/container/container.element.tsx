import React                   from 'react'

import { baseContainerStyles } from './container.styles.css'

const ContainerElement: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div className={baseContainerStyles} {...props} />
}

export { ContainerElement }
