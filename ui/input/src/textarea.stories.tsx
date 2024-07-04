import { Meta }                             from '@storybook/react'
import { StoryObj }                         from '@storybook/react'

import React                                from 'react'
import clsx                                 from 'clsx'
import { useRef }                           from 'react'
import { useState }                         from 'react'

import { ConditionalRender }                from '@ui/conditional-render'
import { ForwardEventsState }               from '@ui/events-state'
import { Box }                              from '@ui/layout'
import { SimpleUpload }                     from '@ui/upload'
import { UploadResult }                     from '@ui/upload'
import { vars }                             from '@ui/theme'

import { RawInput }                         from './raw-input'
import { createAddonPositionStyles }        from './addon'
import { attachmentBaseStyles }             from './attachment'
import { createAttachmentAppearanceStyles } from './attachment'
import { createAttachmentPositionStyles }   from './attachment'
import { createAttachmentShapeStyles }      from './attachment'
import { baseInputStyles }                  from './input'
import { createTextareaProps }              from './textarea'
import { textareaAddonContainerStyles }     from './textarea'
import { createAddonsContainerStyles }      from './utils'
import { createAppearanceStyles }           from './utils'
import { createShapeStyles }                from './utils'

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
    const ref = useRef<HTMLInputElement>(null)

    const { containerProps, rawInputProps } = createTextareaProps()

    const ConditionalRenderElement = ConditionalRender()

    const attach = getAddonPosition(addonBefore, addonAfter)

    return (
      <Box width={containerWidth} justifyContent='center'>
        <div className={createAddonsContainerStyles({ borderWidth, attach: Boolean(attach) })}>
          <ConditionalRenderElement
            className={clsx(
              baseInputStyles,
              createAppearanceStyles({
                fontColor,
                backgroundColor,
                borderColor,
              }),
              createShapeStyles({
                size,
                borderWidth,
                fontFamily,
                fontSize,
                fontWeight,
                rounding: shapeRounding,
                paddingLeft,
                paddingRight,
              }),
              createAddonPositionStyles('before')
            )}
          >
            {addonBefore}
          </ConditionalRenderElement>
          <ForwardEventsState ref={ref} events={['focus', 'blur']}>
            <div
              className={clsx(
                baseInputStyles,
                createAppearanceStyles({
                  fontColor: addonFontColor,
                  backgroundColor: addonBackgroundColor,
                  borderColor: addonBorderColor,
                }),
                createShapeStyles({
                  size,
                  borderWidth,
                  fontFamily,
                  fontSize,
                  fontWeight,
                  rounding: shapeRounding,
                  paddingLeft,
                  paddingRight,
                })
              )}
              // rounding={rounding}
              // attach={attach}
              {...containerProps}
            >
              <ConditionalRenderElement
                className={clsx(
                  attachmentBaseStyles,
                  createAttachmentShapeStyles({
                    fontFamily,
                    fontSize,
                    fontWeight,
                  }),
                  createAttachmentPositionStyles('prefix', 6, 6),
                  createAttachmentAppearanceStyles(fontColor)
                )}
              >
                {prefix}
              </ConditionalRenderElement>
              <RawInput
                ref={ref}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                {...rawInputProps}
              />
              <div className={textareaAddonContainerStyles}>
                <SimpleUpload
                  bucket='bucket'
                  multiple
                  onFile={(file) => setFiles([...files, file])}
                >
                  <span>Upload file</span>
                </SimpleUpload>
              </div>
              <ConditionalRenderElement
                className={clsx(
                  attachmentBaseStyles,
                  createAttachmentShapeStyles({
                    fontFamily,
                    fontSize,
                    fontWeight,
                  }),
                  createAttachmentPositionStyles('suffix', 6, 6),
                  createAttachmentAppearanceStyles(fontColor)
                )}
              >
                {suffix}
              </ConditionalRenderElement>
            </div>
          </ForwardEventsState>
          <ConditionalRenderElement
            className={clsx(
              baseInputStyles,
              createAppearanceStyles({
                fontColor: addonFontColor,
                backgroundColor: addonBackgroundColor,
                borderColor: addonBorderColor,
              }),
              createShapeStyles({
                size,
                borderWidth,
                fontFamily,
                fontSize,
                fontWeight,
                rounding: shapeRounding,
                paddingLeft,
                paddingRight,
              }),
              createAddonPositionStyles('after')
            )}
          >
            {addonAfter}
          </ConditionalRenderElement>
        </div>
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
      name: 'Размер',
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
      control: {
        type: 'select',
        options: vars.fonts,
      },
    },
    fontWeight: {
      name: 'Насыщенность шрифта',
      description: 'Насыщенность шрифта текста',
      table: {
        category: 'Представление',
        subcategory: 'Форма',
      },
      control: {
        type: 'select',
        options: vars.fontWeights,
      },
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

export const TextArea: StoryObj = {
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
