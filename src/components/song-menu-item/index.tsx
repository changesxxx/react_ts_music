import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { IRecommend } from '@/service/modules/home/type'
import { playCountFormat } from '@/utils/format'

import SongMenuItemWrapper from './style'

type Iprops = {
  children?: ReactNode
  songMenu: IRecommend
}

const SongMenuItem: FC<Iprops> = (props) => {
  const { songMenu } = props
  return (
    <SongMenuItemWrapper>
      <div className="song-item">
        <div className="cover">
          <a href="./" className="cover-img">
            <img src={songMenu.picUrl} alt="" className="image" />
          </a>
          <div className="mask image_cover"></div>
          <div className="bottom image_cover">
            <div className="count">
              <span className="icon sprite_icon "></span>
              <span className="sum">{playCountFormat(songMenu.playCount)}</span>
            </div>
            <a href="./" className="play sprite_icon"></a>
          </div>
        </div>

        <div className="dec">
          <a href="./">{songMenu.name}</a>
        </div>
      </div>
    </SongMenuItemWrapper>
  )
}

export default memo(SongMenuItem)
