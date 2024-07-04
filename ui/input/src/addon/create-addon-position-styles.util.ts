import clsx                          from 'clsx'

import { addonPositionAfterStyles }  from './addon.css'
import { addonPositionBeforeStyles } from './addon.css'

export const createAddonPositionStyles = (position?: 'before' | 'after') =>
  clsx(position === 'after' ? addonPositionAfterStyles : addonPositionBeforeStyles)
