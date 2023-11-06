import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import HomeWrapper from './style'
import NavBar from './c-cnps/NavBar'

type Iprops = {
  children?: ReactNode
}

const Home: FC<Iprops> = () => {
  return (
    <HomeWrapper>
      <div className="header">
        <div className="tab wrap-v1">
          <div className="container">
            <NavBar></NavBar>
          </div>
        </div>
      </div>
      <div className="main">
        <Suspense fallback="">
          <Outlet></Outlet>
        </Suspense>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
