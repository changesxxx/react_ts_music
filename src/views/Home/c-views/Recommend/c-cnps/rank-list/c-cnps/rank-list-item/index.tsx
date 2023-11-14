import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { IRank } from '@/service/modules/home/type'
import { imgUrlFormat } from '@/utils/format'

import RankListItemWrapper from './style'

type Iprops = {
  children?: ReactNode
  rankItem: IRank
}

const RankListItem: FC<Iprops> = (props) => {
  const { rankItem } = props

  return (
    <RankListItemWrapper>
      <div className="rank-info">
        <div className="coverImg">
          <a href="./" className="img">
            <img src={imgUrlFormat(rankItem.coverImgUrl, 100)} alt="" />
          </a>
        </div>

        <div className="title">
          <a href="./">
            <h3>{rankItem.name}</h3>
          </a>
          <div className="icon">
            <a href="./" className="btn sprite_02 play"></a>
            <a href="./" className="btn sprite_02 folder"></a>
          </div>
        </div>
      </div>

      <ul className="song">
        {rankItem.tracks.slice(0, 10).map((item, index) => {
          return (
            <li key={item.al.id} className="song-item">
              <span>{index + 1}</span>
              <a className="item omit" href="./">
                {item.al.name}
              </a>
              <div className="oper">
                <a href="./" className="icon sprite_02 play"></a>
                <a href="./" className="icon sprite_icon2 save"></a>
                <a href="./" className="icon sprite_02 folder"></a>
              </div>
            </li>
          )
        })}
        <li className="more">
          <a href="./">查看全部&gt;</a>
        </li>
      </ul>
    </RankListItemWrapper>
  )
}

export default memo(RankListItem)
