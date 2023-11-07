import React, { memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'

import DemoWrapper from './style'

import Carousel from '@/components/Carousel'

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
      <div className="container wrap-v2">
        <div className="left">
          <Carousel ref={myRef} autoplay={false}>
            {elArr.map((item) => {
              return <div key={item}>{item}</div>
            })}
          </Carousel>
        </div>
        <div className="right">
          <button onClick={next}>+</button>
          <button>-</button>
        </div>
      </div>
    </DemoWrapper>
  )
}

export default memo(Demo)
