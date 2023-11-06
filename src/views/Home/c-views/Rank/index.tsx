import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import RankWrapper from './style'

type Iprops = {
  children?: ReactNode
}

const Rank: FC<Iprops> = () => {
  return <RankWrapper>Rank</RankWrapper>
}

export default memo(Rank)
