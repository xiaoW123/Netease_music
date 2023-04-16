import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

import { HotItemWrapper } from './syule'
import { imgUrlFortmat } from '@/utils/inedx'

interface IProps {
  children?: ReactNode
  img1v1Url: string
  name: string
  alias: any[]
}

const HotItem: React.FunctionComponent<IProps> = (props) => {
  const { img1v1Url, name, alias } = props

  return (
    <HotItemWrapper>
      <span>
        <img src={imgUrlFortmat(img1v1Url, 62)} alt="" />
      </span>
      <span>
        <h4>{name}</h4>
        <p>{alias.join(',')}</p>
      </span>
    </HotItemWrapper>
  )
}

export default memo(HotItem)
