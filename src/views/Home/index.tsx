import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import HomeWrapper from './style'

type Iprops = {
  children?: ReactNode
}

const Home: FC<Iprops> = () => {
  return (
    <HomeWrapper>
      <div className="tab"></div>
    </HomeWrapper>
  )
}

export default memo(Home)
