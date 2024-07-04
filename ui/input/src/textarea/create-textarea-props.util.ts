import { CSSProperties } from 'react'
import { ElementType }   from 'react'

interface TextareaProps {
  rawInputProps: {
    as: ElementType<any>
    style: {
      maxWidth: CSSProperties['maxWidth']
    }
  }
  containerProps: {
    style: {
      height: CSSProperties['height']
      flexDirection: CSSProperties['flexDirection']
    }
  }
}

export const createTextareaProps = (): TextareaProps => ({
  rawInputProps: {
    as: 'textarea',
    style: { maxWidth: '100%' },
  },
  containerProps: {
    style: { height: 'min-content', flexDirection: 'column' },
  },
})
