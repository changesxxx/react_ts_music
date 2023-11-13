import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { INewDisc } from '@/service/modules/home/type'
import NewDiscItem from '@/components/new-disc-item'

import NewDiscContentWrapper from './style'

type Iprops = {
  children?: ReactNode
  newDiscList: INewDisc[]
}

const NewDiscContent: FC<Iprops> = (props) => {
  const { newDiscList = [] } = props

  return (
    <NewDiscContentWrapper>
      <div className="disk">
        {newDiscList.map((item) => {
          return <NewDiscItem key={item.albumId} newDisc={item}></NewDiscItem>
        })}
      </div>
    </NewDiscContentWrapper>
  )
}

export default memo(NewDiscContent)
