import React, { memo, useRef } from 'react'
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

  function next() {
    if (carouselRef.current) carouselRef.current.slickNext()
  }

  return (
    <BannerWrapper>
      <div className="left ">
        <button onClick={next}>+</button>
        <Carousel autoplay={true} ref={carouselRef}>
          {bannerList.map((item) => {
            return (
              <div key={item.imageUrl} className="banner-item">
                <img src={item.imageUrl} alt="" />
              </div>
            )
          })}
        </Carousel>
      </div>
      <div className="right sprite_download">
        <Link to="/download" className="link sprite_download">
          下载客户端
        </Link>
      </div>
    </BannerWrapper>
  )
}

export default memo(Banner)
