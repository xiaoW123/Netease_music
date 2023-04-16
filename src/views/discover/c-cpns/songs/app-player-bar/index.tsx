import React, { memo, useEffect, useRef, useState } from 'react'
import type { FunctionComponent, ReactNode } from 'react'
import { AppPlayerBarWrapper } from './style'

import { Slider } from 'antd'
import { imgUrlFortmat, getPlayerUrl, formatTime } from '@/utils/inedx'
import classNames from 'classnames'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import {
  changeLyricIndex,
  changePlayModeAction,
  fetchMusicAction
} from '../store/player'
import { message } from 'antd'
interface IProps {
  children?: ReactNode
}

const AppPlayBar: React.FunctionComponent<IProps> = (props) => {
  // 数据与状态
  const [isZt, setIsZt] = useState(false)
  const [durayion, setDuraytion] = useState(0) // 记录总时间
  const [progress, setProgress] = useState(0) // 当前时间/总时间
  const [currentTime, setCurrentTime] = useState(0) // 当前播放时间
  const [isSliding, setIsSliding] = useState(false) // 记录进度条当前是否为拖拽状态
  const audioRef = useRef<HTMLAudioElement>(null)
  const {
    currentSong = [],
    songLyric,
    lyricIndex,
    playMode
  } = useAppSelector((state) => {
    return {
      currentSong: state.playerData.currentSong, // 歌曲信息
      songLyric: state.playerData.songLyric, // 歌词
      lyricIndex: state.playerData.lyricIndex, // 记录的歌词index
      playMode: state.playerData.playMode
    }
  }, shallowEqual)
  useEffect(() => {
    setDuraytion(currentSong.dt) // 设置获取到的歌曲的总时长
    // 1.播放音乐
    if (!audioRef.current) return
    audioRef.current.src = getPlayerUrl(currentSong.id) // 获取歌曲
    audioRef.current
      .play()
      .then(() => {
        console.log('播放成功')
        setIsZt(true)
      })
      .catch((err) => {
        console.log('播放失败')
        setIsZt(false)
      })
    setDuraytion(currentSong.dt) // 获取音乐的总时长
  }, [currentSong])

  // 事件处理函数
  const dispatch = useAppDispatch()
  // 2.暂停按钮
  function ztbfClick() {
    const isPaused = audioRef.current!.paused // 是否播放
    isPaused
      ? audioRef.current?.play().catch(() => setIsZt(false))
      : audioRef.current?.pause()
    setIsZt(isPaused)
  }
  // 3.播放进度处理 audio标签的属性 播放进度发生改变就触发
  function handleTimeUpdate() {
    const currentTime = audioRef.current!.currentTime * 1000 // 获取歌曲播放的当前时间
    if (!isSliding) {
      const progress = (currentTime / durayion) * 100 // 获取播放时间与总时间的比例，因为进度条只能设置整数，所以 *100
      setProgress(progress)
      setCurrentTime(currentTime)
    }

    // 1.根据时间匹配歌词
    let index = songLyric.length - 1 // 默认最后一句歌词
    for (let i = 0; i < songLyric.length; i++) {
      const lyric = songLyric[i]
      if (lyric.time > currentTime) {
        index = i - 1 // 当歌词的时间大于当前的时间时，播放前一句歌词
        break
      }
    }
    // console.log(songLyric[index].text) // 会重复触发多次数据，多次渲染
    // 解决：使用store记录index
    if (lyricIndex === index || index === -1) return // 如果当前播放的歌词index与记录的index一样就return
    dispatch(changeLyricIndex(index))

    // 展示歌词
    if (songLyric[index].text.length === 0) return
    message.open({
      content: songLyric[index].text,
      key: 'lyric',
      duration: 0,
      style: {
        position: 'fixed',
        left: '18%',
        transform: 'translateX(-50%) ',
        top: '400px'
      }
    })
  }

  // 4.点击进度条
  function handleSliderChanged(value: number) {
    const currentTime = (value / 100) * durayion // 获取点击的位置占总长的比例
    audioRef.current!.currentTime = currentTime / 1000
    setCurrentTime(currentTime) // 重新设置当前时间
    setProgress(value) // 重新设置比例
    setIsSliding(false)
  }
  // 5.拖拽进度条
  function handleSliderChanging(value: number) {
    setIsSliding(true) // 当前为拖拽状态
    setProgress(value) // 重新设置占比
    const currentTime = (value / 100) * durayion // 获取拽的当前时间
    setCurrentTime(currentTime)
  }
  // 6.切换播放模式，0:顺序播放，1:随机播放，2:单曲循环
  function handleChangePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayModeAction(newPlayMode))
  }

  // 7.切换播放，上一首 or 下一首,默认下一首
  function handleChangeMusic(isNext = true) {
    dispatch(fetchMusicAction(isNext))
  }
  // 8.上一首播放完后自动播放下一首
  function handleTimeEnded() {
    if (playMode === 2) {
      // 单曲循环
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      // 随机和顺序，直接调用
      handleChangeMusic(true)
    }
  }
  return (
    <AppPlayerBarWrapper playMode={playMode}>
      <div className="wrap play_bar_box">
        {/* 左边播放设置 */}
        <div className="play_bar_left">
          {/* 上一首 */}
          <span onClick={() => handleChangeMusic(false)}></span>
          <span
            onClick={ztbfClick}
            className={classNames(isZt ? 'left_bfzt_f' : 'left_bfzt')}
          ></span>
          {/* 下一首 */}
          <span onClick={() => handleChangeMusic(true)}></span>
        </div>
        {/* 中间播放信息 */}
        <div className="play_bar_center">
          {/* 图片 */}
          <div className="center_img">
            <img src={imgUrlFortmat(currentSong.al.picUrl, 34)} alt="" />
          </div>
          {/* 信息 */}
          <div className="center_xx">
            <span className="center_xx_span1">
              <a href="#">{currentSong.name}</a>
              <i></i>
            </span>
            <span className="center_xx_span2">
              <a href="#">{currentSong.ar?.[0].name}</a>
              <i></i>
            </span>
            {/* 进度条 */}
            <div className="jdt">
              <Slider
                step={0.2}
                value={progress}
                tooltip={{ formatter: null }}
                onAfterChange={handleSliderChanged}
                onChange={handleSliderChanging}
              />
              <div className="jdt_cs">
                <div>{formatTime(currentTime)}</div>&nbsp;/&nbsp;
                <div>{formatTime(durayion)}</div>
              </div>
            </div>
          </div>
        </div>
        {/* 右边图标 */}
        <div className="play_bar_right">
          <div>
            <span className="left_icon1"></span>
            <span className="left_icon2"></span>
            <span className="left_icon3"></span>
          </div>
          <div>
            <span className="right_icon1"></span>
            <span className="right_icon2" onClick={handleChangePlayMode}></span>
            <span className="right_icon3"></span>
          </div>
        </div>
      </div>
      {/* 右上角  */}
      <div></div>
      {/* 音乐播放器 */}
      {/* onTimeUpdate：时间发生更新时改变 */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTimeEnded}
      />
    </AppPlayerBarWrapper>
  )
}

export default memo(AppPlayBar)
