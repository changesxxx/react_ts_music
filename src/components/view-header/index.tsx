import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import { titleArr } from '@/assets/data/header-item'
import type { Ititle } from '@/assets/data/header-item'
import HeaderWrapper from './style'

type Iprops = {
  children?: ReactNode
}

function tabItemHandle(item: Ititle) {
  if (item.isLink) {
    return (
      <NavLink className="item" to={item.url}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
    )
  } else {
    return (
      <a className="item" href={item.url} rel="noreferrer" target="_blank">
        {item.title}
      </a>
    )
  }
}

const ViewHeader: FC<Iprops> = () => {
  return (
    <HeaderWrapper>
      <div className="container wrap-v1">
        <div className="logo sprite_01">
          <a href="/#">网易云音乐</a>
        </div>
        <div className="tab">
          <ul className="tab-item">
            {titleArr.map((item) => {
              return <li key={item.url}>{tabItemHandle(item)}</li>
            })}
          </ul>
        </div>
        <div className="other">
          <Input
            className="search-input"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined style={{ color: '165, 165, 165' }} />}
          />
          <div className="creator">创作者中心</div>
          <div className="login">
            <a href="/#">登录</a>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(ViewHeader)
