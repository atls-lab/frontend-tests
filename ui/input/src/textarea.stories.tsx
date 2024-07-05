import { Meta }                      from '@storybook/react'
import { StoryObj }                  from '@storybook/react'

import React                         from 'react'
import { useRef }                    from 'react'
import { useState }                  from 'react'

import { Condition }                 from '@ui/condition'
import { ForwardEventsState }        from '@ui/events-state'
import { Box }                       from '@ui/layout'
import { SimpleUpload }              from '@ui/upload'
import { UploadResult }              from '@ui/upload'

import { Addon }                     from './addon'
import { Attachment }                from './attachment'
import { TextareaContainer }         from './textarea'
import { addonsContainerBaseStyles } from './addon'
import { baseInputStyles }           from './input'

const getAddonPosition = (addonBefore, addonAfter) => {
  if (addonBefore && addonAfter) {
    return 'both'
  }

  if (addonBefore) {
    return 'left'
  }

  if (addonAfter) {
    return 'right'
  }

  return null
}

const meta: Meta = {
  title: 'Components/Input',
  render: ({
    containerWidth,
    size,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    borderWidth,
    fontFamily,
    fontSize,
    fontWeight,
    shapeRounding,
    paddingLeft,
    paddingRight,
    fontColor,
    backgroundColor,
    borderColor,
    addonFontColor,
    addonBackgroundColor,
    addonBorderColor,
    rounding,
  }) => {
    const [value, setValue] = useState('контент')
    const [files, setFiles] = useState<Array<UploadResult>>([])
    const ref = useRef<HTMLTextAreaElement>(null)

    const attach = getAddonPosition(addonBefore, addonAfter)

    const addonProps = {
      fontColor: addonFontColor,
      backgroundColor: addonBackgroundColor,
      borderColor: addonBorderColor,
      size: `${size}px`,
      borderWidth,
      fontFamily,
      fontSize: `${fontSize}px`,
      fontWeight,
      rounding: shapeRounding,
      paddingLeft,
      paddingRight,
    }

    const textareaContainerProps = {
      fontColor,
      backgroundColor,
      borderColor,
      size: `${size}px`,
      borderWidth,
      fontFamily,
      fontSize: `${fontSize}px`,
      fontWeight,
      rounding,
      paddingLeft,
      paddingRight,
    }

    const attachmentProps = {
      offsetLeft: '6px',
      offsetRight: '6px',
      fontFamily,
      fontSize: `${fontSize}px`,
      fontWeight,
      fontColor,
    }

    return (
      <Box fill flexDirection='column' alignItems='center' justifyContent='center'>
        <Box width={`${containerWidth}px`} justifyContent='center'>
          <div className={addonsContainerBaseStyles} style={{ marginRight: borderWidth || 1 }}>
            <Condition match={Boolean(addonBefore)}>
              <Addon position='before' attach={attach} {...addonProps}>
                {addonBefore}
              </Addon>
            </Condition>
            <ForwardEventsState ref={ref} events={['focus', 'blur']}>
              <TextareaContainer attach={attach} {...textareaContainerProps}>
                <Condition match={Boolean(prefix)}>
                  <Attachment type='prefix' {...attachmentProps}>
                    {prefix}
                  </Attachment>
                </Condition>
                <textarea
                  ref={ref}
                  className={baseInputStyles}
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  style={{ maxWidth: '100%' }}
                />
                <Condition match={Boolean(suffix)}>
                  <Attachment type='suffix' {...attachmentProps}>
                    {suffix}
                  </Attachment>
                </Condition>
              </TextareaContainer>
            </ForwardEventsState>
            <Condition match={Boolean(addonAfter)}>
              <Addon position='after' attach={attach} {...addonProps}>
                {addonAfter}
              </Addon>
            </Condition>
          </div>
        </Box>
        <Box flexDirection='column' width={`${containerWidth}px`}>
          <SimpleUpload bucket='bucket' multiple onFile={(file) => setFiles([...files, file])}>
            <span>Upload file</span>
          </SimpleUpload>
        </Box>
      </Box>
    )
  },
  tags: ['autodocs'],
  argTypes: {
    containerWidth: {
      name: 'Контейнер',
      description: 'Ширина контейнера',
      table: {
        category: 'Наполнение',
      },
      control: {
        type: 'range',
        min: 300,
        max: 1200,
        step: 10,
      },
    },
    prefix: {
      name: 'Префикс',
      description: 'Дополнительная информация перед полем ввода',
      table: {
        category: 'Наполнение',
      },
    },
    suffix: {
      name: 'Суффикс',
      description: 'Дополнительная информация после поля ввода',
      table: {
        category: 'Наполнение',
      },
    },
    addonBefore: {
      name: 'Аддон слева',
      description: 'Дополнительная блок перед полем ввода',
      table: {
        category: 'Наполнение',
      },
    },
    addonAfter: {
      name: 'Аддон справа',
      description: 'Дополнительная блок после поля ввода',
      table: {
        category: 'Наполнение',
      },
    },
    size: {
      name: 'Размер',
      description: 'Высота',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    borderWidth: {
      name: 'Размер обводки',
      description: 'Размер обводки',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    fontFamily: {
      name: 'Шрифт',
      description: 'Шрифт',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: { type: 'select' },
      options: ['Roboto', 'Inter'],
    },
    fontWeight: {
      name: 'Насыщенность шрифта',
      description: 'Насыщенность шрифта текста',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: { type: 'select' },
      options: [400, 500, 600],
    },
    fontSize: {
      name: 'Размер шрифта',
      description: 'Размер шрифта текста',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    shapeRounding: {
      name: 'Скругление',
      description: 'Скругление углов кнопки',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    paddingLeft: {
      name: 'Отступ слева',
      description: 'Отступ слева от края до контента',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    paddingRight: {
      name: 'Отступ справа',
      description: 'Отступ справа от края до контента',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'number',
      },
    },
    fontColor: {
      name: 'Цвет текста',
      description: 'Цвет текста',
      table: {
        category: 'Представление',
        subcategory: 'Внешний вид',
      },
      control: {
        type: 'color',
      },
    },
    backgroundColor: {
      name: 'Цвет заливки',
      description: 'Цвет текста',
      table: {
        category: 'Представление',
        subcategory: 'Внешний вид',
      },
      control: {
        type: 'color',
      },
    },
    borderColor: {
      name: 'Цвет обводки',
      description: 'Цвет обводки',
      table: {
        category: 'Представление',
        subcategory: 'Внешний вид',
      },
      control: {
        type: 'color',
      },
    },
    addonFontColor: {
      name: 'Цвет текста аддона',
      description: 'Цвет текста аддона',
      table: {
        category: 'Представление',
        subcategory: 'Внешний вид',
      },
      control: {
        type: 'color',
      },
    },
    addonBackgroundColor: {
      name: 'Цвет заливки аддона',
      description: 'Цвет текста аддона',
      table: {
        category: 'Представление',
        subcategory: 'Внешний вид',
      },
      control: {
        type: 'color',
      },
    },
    addonBorderColor: {
      name: 'Цвет обводки аддона',
      description: 'Цвет обводки аддона',
      table: {
        category: 'Представление',
        subcategory: 'Внешний вид',
      },
      control: {
        type: 'color',
      },
    },
    rounding: {
      name: 'Скругление',
      description: 'Устанавливает величину скругления',
      table: {
        category: 'Модификаторы',
        subcategory: 'Форма',
      },
    },
  },
}

export default meta

export const Textarea: StoryObj = {
  args: {
    containerWidth: 300,
    prefix: '',
    suffix: '',
    addonBefore: '',
    addonAfter: '',
    size: 36,
    borderWidth: 1,
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 12,
    shapeRounding: undefined,
    paddingLeft: 8,
    paddingRight: 12,
    fontColor: 'blue',
    backgroundColor: 'white',
    borderColor: 'blue',
    addonFontColor: 'white',
    addonBackgroundColor: 'blue',
    addonBorderColor: 'blue',
    rounding: 0,
  },
}
