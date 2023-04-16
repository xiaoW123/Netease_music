import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'
import { AppRankingWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/views/discover/c-cpns/songs/store/player'
interface IProps {
  children?: ReactNode
  name: string
  coverImgUrl: string
  tracks: any[]
}

const AppRanking: React.FunctionComponent<IProps> = (props) => {
  const { name, coverImgUrl, tracks } = props
  const dispatch = useAppDispatch()
  // 事件处理函数
  function handlePlayClick(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }
  return (
    <AppRankingWrapper>
      <div className="list_top">
        <img className="list_top_img" src={coverImgUrl} alt="" />
        <span></span>
        <span className="list_top_span">
          <h3>{name}</h3>
          <div>
            <span className="list_top_icon1"></span>
            <span className="list_top_icon2"></span>
          </div>
        </span>
      </div>
      <div className="list_bottom">
        <ul>
          {tracks &&
            tracks.slice(0, 10).map((item, index) => {
              return (
                <li key={item.id}>
                  <span>{index + 1}</span>
                  <a href="#" className="list_music_name">
                    {item.name}
                  </a>
                  <i>
                    <div
                      className="i_icon1"
                      onClick={() => handlePlayClick(item.id)}
                    ></div>
                    <div className="i_icon2"></div>
                    <div className="i_icon3"></div>
                  </i>
                </li>
              )
            })}
        </ul>
        <div className="more">查看全部&gt;</div>
      </div>
    </AppRankingWrapper>
  )
}

export default memo(AppRanking)
