import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { shallowEqual } from 'react-redux'

import SectionHeader from '@/components/section-header'

import HotRecommendWrapper from './style'
import { useAppSelector } from '@/store'

type Iprops = {
  children?: ReactNode
}

const HotRecommend: FC<Iprops> = () => {
  const { recommendList } = useAppSelector(
    (state) => ({
      recommendList: state.recommend.recommendList
    }),
    shallowEqual
  )
  useEffect(() => {
    console.log(recommendList)
  }, [recommendList])

  return (
    <HotRecommendWrapper>
      <SectionHeader
        title={{ text: '热门推荐', link: '/' }}
        tabList={['华语', '流行', '摇滚', '民谣', '电子']}
      ></SectionHeader>

      <div className="menu-container">
        {recommendList.map((item) => {
          return <div key={item.id}>{item.name}</div>
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
