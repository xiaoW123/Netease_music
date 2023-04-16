import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

import { NewItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  name: string
  blurPicUrl: string
  gsName: string
}

const AppNewItem: React.FunctionComponent<IProps> = (props) => {
  const { name, blurPicUrl, gsName } = props

  return (
    <NewItemWrapper>
      <div className="new_item_top">
        <img src={blurPicUrl} alt="" />
        {/* <img src="" alt="" /> */}
        <div className="cover"></div>
        <span className="new_item_icon"></span>
      </div>
      <div className="new_item_title">
        <p>
          <a href="#">{name}</a>
          {/* <a href="#"></a> */}
        </p>
        <span>
          <a href="#">{gsName}</a>
          {/* <a href="#">123</a> */}
        </span>
      </div>
    </NewItemWrapper>
  )
}

export default memo(AppNewItem)
