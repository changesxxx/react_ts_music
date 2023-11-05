import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

type Iprops = {
  children?: ReactNode
}

const Download: FC<Iprops> = () => {
  return <div>Download</div>
}

export default memo(Download)
