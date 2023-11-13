import React, { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'

import { useAppSelector } from '@/store'

import SectionHeader from '@/components/section-header'
import Carousel from '@/components/Carousel'
import type { CarouselRef } from '@/components/Carousel'

import NewDiscContent from './c-cnps/disc-content'

import NewDiscWrapper from './style'

type Iprops = {
  children?: ReactNode
}

const NewDisc: FC<Iprops> = () => {
  const carouselRef = useRef<CarouselRef>(null)

  const { newDiscList = [] } = useAppSelector(
    (state) => ({
      newDiscList: state.recommend.newDiscList
    }),
    shallowEqual
  )

  function switchHandle(isNext = true) {
    if (carouselRef.current) {
      isNext ? carouselRef.current.slickNext() : carouselRef.current.slickPrev()
    }
  }

  return (
    <NewDiscWrapper>
      <div className="container">
        <SectionHeader title={{ text: '新碟上架', link: '/' }}></SectionHeader>

        <div className="new-disc">
          {newDiscList.length > 0 && (
            <div className="content">
              <Carousel autoplay={false} ref={carouselRef}>
                <NewDiscContent
                  newDiscList={newDiscList.slice(0, 5)}
                ></NewDiscContent>
                <NewDiscContent
                  newDiscList={newDiscList.slice(5, 10)}
                ></NewDiscContent>
              </Carousel>
            </div>
          )}

          <div
            className="btn sprite_02 left"
            onClick={() => {
              switchHandle(false)
            }}
          ></div>
          <div
            className="btn sprite_02 right"
            onClick={() => {
              switchHandle()
            }}
          ></div>
        </div>
      </div>
    </NewDiscWrapper>
  )
}

export default memo(NewDisc)
