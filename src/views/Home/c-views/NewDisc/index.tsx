import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import NewDiscrWrapper from './style'

type Iprops = {
  children?: ReactNode
}

const NewDisc: FC<Iprops> = () => {
  return <NewDiscrWrapper>NewDisc</NewDiscrWrapper>
}

export default memo(NewDisc)
