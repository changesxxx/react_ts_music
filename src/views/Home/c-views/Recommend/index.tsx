import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import type { AppDispatch } from '@/store'

import { useAppSelector } from '@/store'

import { recommendAction } from '@/store/modules/Recommend/recommend'

import RecommendWrapper from './style'
import { shallowEqual, useDispatch } from 'react-redux'
import Banner from './c-cnps/Banner'

type Iprops = {
  children?: ReactNode
}

const Recommend: FC<Iprops> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(recommendAction())
  }, [])

  return (
    <RecommendWrapper>
      {
        <div className="container wrap-v2">
          <Banner bannerList={banners}></Banner>
        </div>
      }
    </RecommendWrapper>
  )
}

export default memo(Recommend)
