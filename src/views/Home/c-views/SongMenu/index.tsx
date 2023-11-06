import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import SongMenuWrapper from './style'

type Iprops = {
  children?: ReactNode
}

const SongMenu: FC<Iprops> = () => {
  return <SongMenuWrapper>SongMenu</SongMenuWrapper>
}

export default memo(SongMenu)
