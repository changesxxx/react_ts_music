import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'

import RankListWrapper from './style'
import SectionHeader from '@/components/section-header'
import { useAppSelector } from '@/store'
import RankListItem from './c-cnps/rank-list-item'

type Iprops = {
  children?: ReactNode
}

const RankList: FC<Iprops> = () => {
  const { rankList } = useAppSelector(
    (state) => ({
      rankList: state.recommend.rankList
    }),
    shallowEqual
  )

  return (
    <RankListWrapper>
      <SectionHeader title={{ text: '榜单', link: './' }}></SectionHeader>

      <div className="rank-container rocommend-top-bg">
        {rankList.map((item) => {
          return <RankListItem key={item.id} rankItem={item}></RankListItem>
        })}
      </div>
    </RankListWrapper>
  )
}

export default memo(RankList)
