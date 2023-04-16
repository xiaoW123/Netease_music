import React, { memo, useCallback, useRef, useState } from 'react'
import type { FunctionComponent, ReactNode, ElementRef } from 'react'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
// import { CSSTransition } from 'react-transition-group'
// 样式
import { TopBannerWrapper } from './style'
// 引入轮播组件
import { Carousel } from 'antd'

interface IProps {
  children?: ReactNode
}
// 轮播图组件
const TopBanner: React.FunctionComponent<IProps> = () => {
  // 1.定义组件内部数据
  const [currentIndex, setCurrentIndex] = useState(0)
  // 2.获取DOM,(需要指定类型),因为是获取的是ant的UI组件
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  // 3.获取store数据
  const { banners } = useAppSelector((state) => {
    return {
      banners: state.recommendData.banners
    }
  }, shallowEqual)

  // 4.事件处理函数
  // 设置轮播图左右按钮
  function leftClick() {
    bannerRef.current?.prev()
  }
  function rightClick() {
    bannerRef.current?.next()
  }
  const changeImg = useCallback((current: number, next: number) => {
    setCurrentIndex(next)
  }, [])
  let bgImgUrl = banners[currentIndex]?.imageUrl
  if (bgImgUrl) {
    bgImgUrl = bgImgUrl + '?imageView&blur=40x20'
  }

  return (
    <TopBannerWrapper>
      <div
        className="top_banner_bgimg"
        style={{ background: `url(${bgImgUrl})` }}
      >
        <div className="wrap top_banner_box">
          {/* 轮播 */}
          <div className="top_banner_img">
            {/* beforeChange={changeImg} */}
            <Carousel
              effect="fade"
              autoplay={true}
              ref={bannerRef}
              beforeChange={changeImg}
            >
              {banners &&
                banners.map((item, index) => {
                  return (
                    <div key={item.imageUrl} className="top_banner_item">
                      <img src={item.imageUrl} alt="" />
                    </div>
                  )
                })}
            </Carousel>
            {/* letf and right */}
            <div className="top_banner_left" onClick={leftClick}></div>
            <div className="top_banner_right" onClick={rightClick}></div>
          </div>
          {/* Download */}
          <div className="top_banner_download">
            <a href="#"></a>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
          </div>
        </div>
      </div>
    </TopBannerWrapper>
  )
}

export default memo(TopBanner)
