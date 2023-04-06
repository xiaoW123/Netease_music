import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTopBanner } from '../service/recommend'

// 2.redux处理异步请求
export const fetchRecommendDataAction = createAsyncThunk(
  'fetchRecommend',
  (payload, { dispatch }) => {
    // 1.获取顶部的轮播图数据
    getTopBanner().then((res: any) => {
      dispatch(changeBannersAction(res.banners))
    })
  }
)
// 定义数据类型
interface RecommendState {
  banners: any[]
}

const initialState: RecommendState = {
  banners: []
}

// 1.创建recommendreducer片段
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
})
export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
