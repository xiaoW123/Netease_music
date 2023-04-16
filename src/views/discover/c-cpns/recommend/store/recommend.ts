import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { stat } from 'fs'
import ranking from '../../ranking'
import {
  getTopBanner,
  getHotItem,
  getNewAlbum,
  getPlayListDetail,
  getArtistList
} from '../service/recommend'

// 2.redux处理异步请求
// 2.1.获取轮播数据
export const fetchRecommendDataAction = createAsyncThunk(
  'fetchRecommend',
  (payload, { dispatch }) => {
    getTopBanner().then((res: any) => {
      dispatch(changeBannersAction(res.banners))
    })
  }
)
// 2.2.获取热门Item数据
export const fetchHotItemDataAction = createAsyncThunk(
  'fetchHotItem',
  (payload, { dispatch }) => {
    getHotItem(8).then((res: any) => {
      dispatch(changeResultAction(res.result))
    })
  }
)
// 2.3.获取新碟上架数据AxiosResponse
export const fetchNewAlbumDataAction = createAsyncThunk(
  'fetchNewAlbum',
  (payload, { dispatch }) => {
    getNewAlbum(10).then((res: any) => {
      // fetchPlayListDataAction()
      // dispatch(fetchPlayListDataAction())
      dispatch(changeNewAlbumAction(res.albums))
    })
  }
)
// 2.4.获取榜单数据
// 2.4.1.将三个结果都拿到，统一放到数组中
// 2.4.2.第一：获取到所有数据的结果后，进行dispatch操作
// 2.4.3.第二：获取到结果一定是有顺序的
// 2.4.4.飙升榜id：19723756; 新歌榜id：3779629; 原创榜id：2884035
const rankingIds = [19723756, 3779629, 2884035]
export const fetchPlayListDataAction = createAsyncThunk(
  'fetchPlayList',
  (payload, { getState, dispatch }) => {
    const promise: Promise<any>[] = [] // Promise数组
    for (const id of rankingIds) {
      promise.push(getPlayListDetail(id))
    }
    Promise.all(promise).then((res) => {
      // 在进行过滤
      const playList = res.map((item) => {
        return item.playlist
      })
      dispatch(changePlayListAction(playList))
    })
  }
)

export const fetchArtistListDataAction = createAsyncThunk(
  'fetchArtistList',
  (payload, { dispatch }) => {
    getArtistList(5001, 5).then((res: any) => {
      dispatch(changeArtistListAction(res.artists))
    })
  }
)

interface InewAlbum {
  albums: any[]
}

// 定义数据类型
interface RecommendState {
  banners: any[]
  result: any[]
  albums: any[]
  rankings: any[]
  artists: any[]
}

const initialState: RecommendState = {
  banners: [],
  result: [],
  albums: [],
  rankings: [],
  artists: []
}

// 1.创建recommendreducer片段
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeResultAction(state, { payload }) {
      state.result = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.albums = payload
    },
    changePlayListAction(state, { payload }) {
      state.rankings = payload
    },
    changeArtistListAction(state, { payload }) {
      state.artists = payload
    }
  }
})
export const {
  changeBannersAction,
  changeResultAction,
  changeNewAlbumAction,
  changePlayListAction,
  changeArtistListAction
} = recommendSlice.actions
export default recommendSlice.reducer
