/**
 * @docs https://swiperjs.com/
 */

import { Meta }        from '@storybook/react'
import { StoryObj }    from '@storybook/react'

import React           from 'react'
import { SwiperSlide } from 'swiper/react'

import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'

import { BaseSwiper }  from './swiper.component'

const meta: Meta = {
  title: 'Components/Swiper',
  render: () => (
    <Column fill alignItems='center' justifyContent='center'>
      <Layout flexBasis='50px' />
      <BaseSwiper
        slidesPerView={3}
        spaceBetween={60}
        loop
        width={1920}
        grabCursor
        touchEventsTarget='container'
      >
        {Array.from({ length: 7 }, (_, index) => (
          <SwiperSlide key={index}>
            <Box
              width='300px'
              height='300px'
              justifyContent='center'
              alignItems='center'
              backgroundColor='$blueProtective'
            >
              {index}
            </Box>
          </SwiperSlide>
        ))}
      </BaseSwiper>
      <Layout flexBasis='50px' />
    </Column>
  ),
  tags: ['autodocs'],
}

export default meta

export const Swiper: StoryObj = {
  name: 'Базовый',
}
