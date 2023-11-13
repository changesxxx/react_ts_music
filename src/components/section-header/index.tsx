import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import SectionHeaderWrapper from './style'

type Iprops = {
  children?: ReactNode
  tabList?: string[]
  title: {
    text: string
    link: string
  }
}

const SectionHeader: FC<Iprops> = (props) => {
  const { title, tabList = [] } = props
  return (
    <SectionHeaderWrapper
      className="sprite_02"
      $isEnd={tabList.length > 0 ? 'space-between' : 'flex-end'}
    >
      <div className="title">
        <a className="link" href={title.link}>
          {title.text}
        </a>
      </div>
      <div className="content">
        {tabList.length > 0 && (
          <ul className="tab">
            {tabList.map((item, index) => {
              return (
                <a key={item} className="item">
                  {item}
                  {index !== tabList.length - 1 && (
                    <span className="line">|</span>
                  )}
                </a>
              )
            })}
          </ul>
        )}

        <div className="more">
          <a>更多</a>
          <i className="sprite_02"></i>
        </div>
      </div>
    </SectionHeaderWrapper>
  )
}

export default memo(SectionHeader)
