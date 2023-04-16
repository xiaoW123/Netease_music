import React, { memo, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// 引入自己包装过的 useAppSelect，useAppDispatch
import { useAppDispatch } from '@/store/index'
import type { FunctionComponent, ReactNode } from 'react'
import {
  fetchRecommendDataAction,
  fetchHotItemDataAction,
  fetchNewAlbumDataAction,
  fetchPlayListDataAction,
  fetchArtistListDataAction
} from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'

interface IProps {
  children?: ReactNode
}
const Recommend: React.FunctionComponent<IProps> = () => {
  const dispatch = useAppDispatch()
  // 1.获取banner数据
  useEffect(() => {
    // 获取轮播数据
    dispatch(fetchRecommendDataAction())
    // 获取热门item数据
    dispatch(fetchHotItemDataAction())
    dispatch(fetchNewAlbumDataAction())
    dispatch(fetchPlayListDataAction())
    dispatch(fetchArtistListDataAction())
  })
  return (
    <RecommendWrapper>
      {/* 轮播图 */}
      <TopBanner />
      {/* 热门推荐 */}
      <HotRecommend />
    </RecommendWrapper>
  )
}

export default memo(Recommend)
