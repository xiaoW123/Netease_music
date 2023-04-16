import React, { memo, useEffect } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

import { AppItemWrapper } from './style'
import { imgUrlFortmat, countsFormat } from '@/utils/inedx'

interface IProps {
  children?: ReactNode
  imgUrl: string
  title?: string
  playCount: number
  imgSize: number
}

const AppItem: React.FunctionComponent<IProps> = (props) => {
  const { imgUrl, title, playCount, imgSize } = props
  return (
    <AppItemWrapper>
      {/* 图片 */}
      <img src={imgUrlFortmat(imgUrl, imgSize)} alt="" />
      {/* 遮罩层 */}
      <a className="cover" href="#"></a>
      {/* bottom */}
      <div className="bottom">
        <span className="bottom_img"></span>
        <span className="bottom_count">{countsFormat(playCount)}</span>
        <a className="bottom_bf" href="#"></a>
      </div>
      {/* 标题 */}
      <p>
        <a title={title} href="#">
          {props.title}
        </a>
      </p>
    </AppItemWrapper>
  )
}

export default memo(AppItem)
