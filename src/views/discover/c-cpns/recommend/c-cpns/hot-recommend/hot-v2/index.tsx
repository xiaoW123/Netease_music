import React, { memo, useRef } from 'react'
import type { FunctionComponent, ReactNode, ElementRef } from 'react'
import { HotV2Wrapper } from './style'
import SectionHeaderV1 from '@/components/section-header-v1'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'
import AppItem from '@/components/app-item'
import { useHref } from 'react-router-dom'
import AppNewItem from '@/components/app-new-item'

interface IProps {
  children?: ReactNode
}

const HotV2: React.FunctionComponent<IProps> = () => {
  const bnnerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { albums } = useAppSelector((state) => {
    return {
      albums: state.recommendData.albums
    }
  })
  function leftButton() {
    bnnerRef.current?.prev()
  }
  function rightButton() {
    bnnerRef.current?.next()
  }

  return (
    <HotV2Wrapper>
      <SectionHeaderV1 title="新碟上架" isShow={false} path="/discover/album" />
      <div className="hot_v2_main">
        <div className="hot_v2_item">
          <Carousel ref={bnnerRef} dots={false}>
            {[0, 1, 2].map((item) => {
              return (
                <div key={item}>
                  <div className="hot_v2_newitem">
                    {albums
                      .slice(item * 4, (item + 1) * 4)
                      .map((items, indexs) => {
                        return (
                          <div key={items.id} className="albums_item">
                            <AppNewItem
                              key={indexs}
                              name={items.name}
                              blurPicUrl={items.blurPicUrl}
                              gsName={items.artist?.name}
                            />
                          </div>
                        )
                      })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className="v2_left" onClick={leftButton}></div>
        <div className="v2_right" onClick={rightButton}></div>
      </div>
    </HotV2Wrapper>
  )
}

export default memo(HotV2)
