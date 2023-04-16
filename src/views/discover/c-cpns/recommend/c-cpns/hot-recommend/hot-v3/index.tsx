import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'
import { HotV3Wrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import AppRanking from '@/components/app-ranking'
import { shallowEqual, useSelector } from 'react-redux'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const HotV3: React.FunctionComponent<IProps> = () => {
  const { rankings } = useAppSelector((state) => {
    return {
      rankings: state.recommendData.rankings
    }
  }, shallowEqual)

  return (
    <HotV3Wrapper>
      <SectionHeaderV1 isShow={false} title="榜单" path="/discover/ranking" />
      <div className="toplist_box">
        {rankings &&
          rankings.map((item, index) => {
            return (
              <div key={index}>
                <AppRanking
                  name={item.name}
                  coverImgUrl={item.coverImgUrl}
                  tracks={item.tracks}
                />
              </div>
            )
          })}
      </div>
    </HotV3Wrapper>
  )
}

export default memo(HotV3)
