import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

import { SectionV1Wrapper } from './style'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  isShow: boolean
  title: string
  path: string
}

const SectionHeaderV1: React.FunctionComponent<IProps> = (props) => {
  const navigate = useNavigate()
  const { isShow, title, path } = props

  function navigateClick(e: any) {
    e.preventDefault()
    navigate(path)
  }

  return (
    <SectionV1Wrapper>
      <a href="#" className="section_v1_a">
        {title}
      </a>
      <div className="section_v1_div">
        {isShow &&
          ['华语', '流行', '摇滚', '民谣', '电子'].map((item) => {
            return (
              <div className="section_item" key={item}>
                <span>{item}</span>
                <span>|</span>
              </div>
            )
          })}
      </div>
      <span className="section_v1_span">
        <a href="#" onClick={(e) => navigateClick(e)}>
          更多
        </a>
        <i></i>
      </span>
    </SectionV1Wrapper>
  )
}

export default memo(SectionHeaderV1)
