import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import StationWrapper from './style'

type Iprops = {
  children?: ReactNode
}

const Station: FC<Iprops> = () => {
  return <StationWrapper>Station</StationWrapper>
}

export default memo(Station)
