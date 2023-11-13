import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import type { AppDispatch } from '@/store'

import { useAppSelector } from '@/store'

import { recommendAction } from '@/store/modules/Recommend/recommend'

import RecommendWrapper from './style'
import { shallowEqual, useDispatch } from 'react-redux'
import Banner from './c-cnps/Banner'
import HotRecommend from './c-cnps/hot-recommend'

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
      {/* <Banner bannerList={banners}></Banner> */}
      <div className="recommend_menu wrap-v2 sprite_wrap1">
        <div className="left-content  wrap-v3">
          <HotRecommend></HotRecommend>
        </div>

        <div className="right-content">1</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
