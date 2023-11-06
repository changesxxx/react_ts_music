import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import type { AppDispatch } from '@/store'

import { useAppSelector } from '@/store'

import { recommendAction } from '@/store/modules/Recommend/recommend'

import RecommendWrapper from './style'
import { useDispatch } from 'react-redux'

type Iprops = {
  children?: ReactNode
}

const Recommend: FC<Iprops> = () => {
  /* const { banners } = useAppSelector((state) => {
    banners: state.recommend.banner
  }) */

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(recommendAction())
  }, [])

  return (
    <RecommendWrapper>
      {/*     <div className="container wrap-v2">
        {banners.map((item: any) => {
          ;<div key={item.imageUrl}>{item.imageUrl}</div>
        })}
      </div> */}
    </RecommendWrapper>
  )
}

export default memo(Recommend)
