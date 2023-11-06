import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import RecommendWrapper from './style'

type Iprops = {
  children?: ReactNode
}

const Recommend: FC<Iprops> = () => {
  return (
    <RecommendWrapper>
      <div className="container wrap-v2">1</div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
