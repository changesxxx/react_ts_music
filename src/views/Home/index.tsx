import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

type Iprops = {
  children?: ReactNode
}

const Home: FC<Iprops> = () => {
  return <div>Home</div>
}

export default memo(Home)
