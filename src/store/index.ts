import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
// TS类型限制
import type { TypedUseSelectorHook } from 'react-redux'
// 引入recommend的reducer片段
import recommendReducer from '@/views/discover/c-cpns/recommend/store/recommend'
import playerReducer from '@/views/discover/c-cpns/songs/store/player'
const store = configureStore({
  reducer: {
    recommendData: recommendReducer,
    playerData: playerReducer
  }
})

// 1.给store进行TS类型限制，获取该类型
type GetStateFnType = typeof store.getState // 获取store的类型
export type IRootState = ReturnType<GetStateFnType> // 通过ts工具ReturnType 获取函数返回值的类型,比如获取了counter的类型
type DispatchType = typeof store.dispatch // 获取dispatch的类型
// 2.把store重新包装TS类型限制，可参考redux官网
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector // useSelector
export const useAppDispatch: () => DispatchType = useDispatch // dispatch 是一个函数类型

export default store
