import React, { memo, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// 引入自己包装过的 useAppSelect，useAppDispatch
import { useAppDispatch, useAppSelect } from '@/store/index'
import type { FunctionComponent, ReactNode } from 'react'
import { addCounter } from '@/store/modules/counter'
import { shallowEqual } from 'react-redux'
import hyRequest from '@/service'

import { fetchRecommendDataAction } from '@/views/discover/c-cpns/recommend/store/recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FunctionComponent<IProps> = () => {
  const dispatch = useAppDispatch()
  // 1.获取banner数据
  useEffect(() => {
    dispatch(fetchRecommendDataAction())
  })
  // 获取store数据，但是需要做ts的类型限制,在stor中进行了限制,这里就会进行类型推导，不用在限制
  // const { counter } = useAppSelect((state) => {
  //   return {
  //     counter: state.count.counter
  //   }
  // }, shallowEqual)

  return <div>Recommend</div>
}

export default memo(Recommend)
