import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { imgUrlFormat } from '@/utils/format'

import { INewDisc } from '@/service/modules/home/type'

import NewDiscItemWrapper from './style'

type Iprops = {
  children?: ReactNode
  newDisc: INewDisc
}

const NewDiscItem: FC<Iprops> = (props) => {
  const { newDisc } = props
  return (
    <NewDiscItemWrapper className="sprite_02">
      <div className="cover">
        <img src={imgUrlFormat(newDisc.coverUrl, 100)} alt="" />
        <a href="./" className="mask sprite_covor"></a>
        <div className="sprite_icon play"></div>
      </div>
      <p className="disc-name omit">
        <a href="./"> {newDisc.albumName}</a>
      </p>
      <p className="author">
        <a href="./">{newDisc.artistName}</a>
      </p>
    </NewDiscItemWrapper>
  )
}

export default memo(NewDiscItem)
