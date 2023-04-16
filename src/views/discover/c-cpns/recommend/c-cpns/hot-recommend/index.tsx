import React, { memo, Fragment } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

// 组件
import { HotRecommendWrapper } from './style'
import HotV1 from './hot-v1'
import HotV2 from './hot-v2'
import HotV3 from './hot-v3'
import HotItem from './hot-v3/c-cpns/hot-item'
import { useAppSelector } from '@/store'
import { hotRadios } from '@/assets/data/local-data'
import { imgUrlFortmat } from '@/utils/inedx'

interface IProps {
  children?: ReactNode
}

const HotRecommend: React.FunctionComponent<IProps> = () => {
  const { artists } = useAppSelector((state) => {
    return {
      artists: state.recommendData.artists
    }
  })

  return (
    <HotRecommendWrapper className="wrap">
      <div className="left">
        <HotV1 />
        <HotV2 />
        <HotV3 />
      </div>
      <div className="right">
        <div className="login">
          <div>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
          <div>用户登录</div>
        </div>
        <div className="enter_singer">
          <div>
            <span>入驻歌手</span>
            <a href="#">查看全部&gt;</a>
          </div>
          {artists &&
            artists.map((item) => {
              return (
                <HotItem
                  key={item.id}
                  img1v1Url={item.img1v1Url}
                  name={item.name}
                  alias={item.alias}
                />
              )
            })}
          <div className="enter_singer_bottom">申请成为网易音乐人</div>
        </div>
        <div className="popular_anchor">
          <div>
            <span>热门主播</span>
          </div>
          <div>
            {hotRadios &&
              hotRadios.map((item, index) => {
                return (
                  <div key={index}>
                    <span>
                      <img src={imgUrlFortmat(item.picUrl, 40)} alt="" />
                    </span>
                    <span>
                      <a href="#">{item.name}</a>
                      <p>{item.position}</p>
                    </span>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
