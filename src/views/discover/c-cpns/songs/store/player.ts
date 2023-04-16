import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'
import { parseLyric } from '@/utils/inedx'
import { IRootState } from '@/store'

export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  { state: IRootState } // 定义getState类型
>('current', (id: number, { getState, dispatch }) => {
  const playSongList = getState().playerData.playSongList
  // 判断传入的id是否等于播放列表的id
  const findIndex = playSongList.findIndex((item) => item.id === id)
  if (findIndex === -1) {
    // 如果没有在播放列表中
    getSongDetail(id).then((res: any) => {
      if (!res.songs.length) return
      const song = res.songs[0]
      const newPlaySongList = [...playSongList] // 把不在播放列表的歌曲添加进去
      newPlaySongList.push(song)
      dispatch(changeSongDetail(song)) // 替换播放该歌曲
      dispatch(changePlayListAction(newPlaySongList))
    })
  } else {
    // 如果存在,就替换播放该歌曲
    const song = playSongList[findIndex]
    dispatch(changeSongDetail(song))
    dispatch(changePlaySongIndexAction(findIndex))
  }
  // 获取歌曲信息
  // getSongDetail(id).then((res: any) => {
  //   dispatch(changeSongDetail(res.songs[0]))
  //   console.log(res)
  // })
  // 获取歌词
  getSongLyric(id).then((res: any) => {
    const lyric = parseLyric(res.lrc.lyric)
    dispatch(changeSongLyric(lyric))
  })
})

// 切换播放
export const fetchMusicAction = createAsyncThunk<
  void,
  boolean,
  { state: IRootState }
>('changemuisc', (isNext, { getState, dispatch }) => {
  // 1.获取store中的数据
  const playMode = getState().playerData.playMode
  const songIndex = getState().playerData.playSongIndex
  const songList = getState().playerData.playSongList

  // 2.根据不同的模式计算下一首歌曲
  let newIndex = songIndex // 当前播放的index
  if (playMode === 1) {
    // 为随机播放
    newIndex = Math.floor(Math.random() * songList.length)
  } else {
    // 单曲循环和顺序播放
    newIndex = isNext ? songIndex + 1 : songIndex - 1
    if (newIndex > songList.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = songList.length - 1
  }
  const song = songList[newIndex] // 获取切换的歌曲信息
  dispatch(changeSongDetail(song)) // 播放该歌曲
  dispatch(changePlaySongIndexAction(newIndex)) // 重新设置歌曲的index

  // 3.获取新的歌词
  getSongLyric(song.id).then((res: any) => {
    const lyric = parseLyric(res.lrc.lyric)
    dispatch(changeSongLyric(lyric))
  })
})

interface IPlayerState {
  currentSong: any // 播放歌曲的信息
  songLyric: any
  lyricIndex: number
  playSongList: any[] // 播放列表
  playSongIndex: number // 记录播放列表的歌曲index
  playMode: number // 0:顺序播放，1:随机播放，2:单曲循环
}

const initialState: IPlayerState = {
  currentSong: {
    name: '温柔',
    id: 27785612,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 13193,
        name: '五月天',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '600902000000534560',
    fee: 1,
    v: 77,
    crbt: null,
    cf: '',
    al: {
      id: 38285,
      name: '我们是五月天',
      picUrl:
        'https://p2.music.126.net/v4V40sXKnaqsG0ACyY0aDg==/109951164912221924.jpg',
      tns: [],
      pic_str: '109951164912221924',
      pic: 109951164912221920
    },
    dt: 269800,
    h: {
      br: 320000,
      fid: 0,
      size: 10794885,
      vd: -63963,
      sr: 44100
    },
    m: {
      br: 192000,
      fid: 0,
      size: 6476948,
      vd: -61380,
      sr: 44100
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4317980,
      vd: -59700,
      sr: 44100
    },
    sq: {
      br: 1053723,
      fid: 0,
      size: 35536822,
      vd: -63997,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: '1',
    no: 2,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 8704,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 77,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 684010,
    mv: 10929721,
    publishTime: 1049126400000
  },
  songLyric: {},
  lyricIndex: -1,
  playSongList: [
    {
      name: '温柔',
      id: 27785612,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 13193,
          name: '五月天',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000000534560',
      fee: 1,
      v: 77,
      crbt: null,
      cf: '',
      al: {
        id: 38285,
        name: '我们是五月天',
        picUrl:
          'https://p2.music.126.net/v4V40sXKnaqsG0ACyY0aDg==/109951164912221924.jpg',
        tns: [],
        pic_str: '109951164912221924',
        pic: 109951164912221920
      },
      dt: 269800,
      h: {
        br: 320000,
        fid: 0,
        size: 10794885,
        vd: -63963,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6476948,
        vd: -61380,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4317980,
        vd: -59700,
        sr: 44100
      },
      sq: {
        br: 1053723,
        fid: 0,
        size: 35536822,
        vd: -63997,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8704,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 77,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 684010,
      mv: 10929721,
      publishTime: 1049126400000
    }
  ],
  playSongIndex: -1,
  playMode: 0
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeSongDetail(state, { payload }) {
      state.currentSong = payload
    },
    changeSongLyric(state, { payload }) {
      state.songLyric = payload
    },
    changeLyricIndex(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlayListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})
export const {
  changeSongDetail,
  changeSongLyric,
  changeLyricIndex,
  changePlayListAction,
  changePlaySongIndexAction,
  changePlayModeAction
} = playerSlice.actions
export default playerSlice.reducer
