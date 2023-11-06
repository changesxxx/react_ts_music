import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import SingerWrapper from './style'

type Iprops = {
  children?: ReactNode
}

const Singer: FC<Iprops> = () => {
  return <SingerWrapper>Singer</SingerWrapper>
}

export default memo(Singer)
