import React, { memo, useRef, useState, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import Carousel from '@/components/Carousel'
import type { CarouselRef } from '@/components/Carousel'

import BannerWrapper from './style'
import type { IBanner } from '@/service/modules/home/type'

type Iprops = {
  children?: ReactNode
  bannerList: IBanner[]
}

const Banner: FC<Iprops> = (props) => {
  const { bannerList } = props

  const carouselRef = useRef<CarouselRef>(null)

  const [index, setIndex] = useState(0)

  function switchHandle(isNext = true) {
    if (carouselRef.current) {
      isNext ? carouselRef.current.slickNext() : carouselRef.current.slickPrev()
    }
  }

  const getCurrentIndex = useCallback(
    (currentIndex: number) => {
      setIndex(currentIndex)
    },
    [bannerList]
  )

  return (
    <BannerWrapper
      $backgroundImg={`${bannerList[index]?.imageUrl}?imageView&blur=40x20`}
    >
      <div className="banner wrap-v2">
        <div className="left ">
          {bannerList.length && (
            <Carousel
              autoplay={true}
              ref={carouselRef}
              afterChange={getCurrentIndex}
            >
              {bannerList.map((item) => {
                return (
                  <div key={item.imageUrl} className="banner-item">
                    <img src={item.imageUrl} alt="" />
                  </div>
                )
              })}
            </Carousel>
          )}
        </div>
        <div className="right sprite_download">
          <Link to="/download" className="link sprite_download">
            下载客户端
          </Link>
        </div>

        <a
          className="btn sprite_banner prev"
          onClick={() => {
            switchHandle(false)
          }}
        ></a>
        <a
          className="btn sprite_banner next"
          onClick={() => {
            switchHandle()
          }}
        ></a>
      </div>
    </BannerWrapper>
  )
}

export default memo(Banner)
