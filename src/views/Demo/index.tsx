import React, { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'

import DemoWrapper from './style'

import Carousel from '@/components/Carousel'
import SongMenuItem from '@/components/song-menu-item'

import type { CarouselRef } from '@/components/Carousel'

type Iprops = {
  children?: ReactNode
}

const Demo: FC<Iprops> = () => {
  const myRef = useRef<CarouselRef>(null)

  const elArr = [1, 2, 3, 4, 5]

  function next() {
    if (myRef.current) myRef.current.slickNext()
  }

  return (
    <DemoWrapper>
      {/*   <div className="container wrap-v2">
        <div className="left">
          <Carousel ref={myRef} autoplay={true}>
            {elArr.map((item) => {
              return (
                <div className="item" key={item}>
                  {item}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className="right">
          <button onClick={next}>+</button>
          <button>-</button>
        </div>
      </div> */}

      <SongMenuItem
        songMenu={{
          id: 2075587022,
          type: 0,
          name: '助眠辑 | 自然音，伴灵动乐符萦绕耳畔',
          copywriter: '',
          picUrl:
            'https://p2.music.126.net/sixunTcvD_IXeVqxZnpHkA==/109951163452086313.jpg',
          canDislike: true,
          trackNumberUpdateTime: 1533916733093,
          playCount: 29301288,
          trackCount: 104,
          highQuality: true,
          alg: 'alg_high_quality'
        }}
      ></SongMenuItem>
    </DemoWrapper>
  )
}

export default memo(Demo)
