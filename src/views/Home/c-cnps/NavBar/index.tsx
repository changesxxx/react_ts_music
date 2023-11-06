import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import NavBarWrapper from './style'

import { HomeTabItem } from '@/assets/data/header-item'

type Iprops = {
  children?: ReactNode
}

const NavBar: FC<Iprops> = () => {
  return (
    <NavBarWrapper>
      {HomeTabItem.map((item) => {
        return (
          /* end 作用:类似严格匹配
           我们在home配置了子路由并且首页为recommend 当我们切换至别的路径是为:home/xxx
           而/home 如果不加end关键字 匹配/home/xxx 所以子路由也会有active状态
           */
          <NavLink className="tab-item" to={item.url} end key={item.title}>
            <span className="title">{item.title}</span>
          </NavLink>
        )
      })}
    </NavBarWrapper>
  )
}

export default memo(NavBar)
