import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

type Iprops = {
  children?: ReactNode
}

const Focus: FC<Iprops> = () => {
  return <div>Focus</div>
}

export default memo(Focus)
