import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'
import { HotV1Wrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import AppItem from '@/components/app-item'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const HotV1: React.FunctionComponent<IProps> = () => {
  const { result } = useAppSelector((state) => {
    return {
      result: state.recommendData.result
    }
  })

  return (
    <HotV1Wrapper>
      <SectionHeaderV1 isShow={true} title="热门推荐" path="/discover/songs" />
      <div className="hot_v1_main">
        {result?.map((item, index) => {
          return (
            <div key={index} className="app_item">
              <AppItem
                imgUrl={item.picUrl}
                title={item.name}
                playCount={item.playCount}
                imgSize={140}
              />
            </div>
          )
        })}
      </div>
    </HotV1Wrapper>
  )
}

export default memo(HotV1)
