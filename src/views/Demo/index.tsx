import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'

import DemoWrapper from './style'
import type { AppDispatch } from '@/store'
import { recommendAction } from '@/store/modules/Recommend/recommend'

import { shallowEqual, useDispatch } from 'react-redux'

import SectionHeader from '@/components/section-header'
import Carousel from '@/components/Carousel'
import NewDiscItem from '@/components/new-disc-item'
import { useAppSelector } from '@/store'
import NewDisc from '@/views/Home/c-views/Recommend/c-cnps/new-disc/c-cnps/disc-content'

type Iprops = {
  children?: ReactNode
}

const Demo: FC<Iprops> = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { newDiscList } = useAppSelector(
    (state) => ({
      newDiscList: state.recommend.newDiscList
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(recommendAction())
    console.log(newDiscList)
  }, [])

  return (
    <DemoWrapper>
      <div className="container wrap-v2">
        <div className="container">
          <SectionHeader
            title={{ text: '新碟上架', link: '/' }}
          ></SectionHeader>

          <div className="new-disc">
            {newDiscList.length > 0 && (
              <div className="content">
                <Carousel autoplay={false}>
                  <NewDisc newDiscList={newDiscList.slice(0, 5)}></NewDisc>
                  <NewDisc newDiscList={newDiscList.slice(5, 10)}></NewDisc>
                </Carousel>
              </div>
            )}

            <div className="btn sprite_02 left"></div>
            <div className="btn sprite_02 right"></div>
          </div>
        </div>
      </div>
    </DemoWrapper>
  )
}

export default memo(Demo)
