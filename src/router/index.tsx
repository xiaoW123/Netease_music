// router带的TS类型，用来规定路由配置
import React from 'react'
import type { RouteObject } from 'react-router-dom' // router-ts类型
import { Navigate } from 'react-router-dom' // router-api
// 引入组件
// import Discover from '@/views/discover'
// 组件懒加载
const Discover = React.lazy(() => import('@/views/discover'))
const Download = React.lazy(() => import('@/views/download'))
const Friend = React.lazy(() => import('@/views/friend'))
const Mine = React.lazy(() => import('@/views/mine'))
const Musician = React.lazy(() => import('@/views/musician'))
const Product = React.lazy(() => import('@/views/product'))
// 二级路由
const Album = React.lazy(() => import('@/views/discover/c-cpns/album'))
const Artist = React.lazy(() => import('@/views/discover/c-cpns/artist'))
const Djradio = React.lazy(() => import('@/views/discover/c-cpns/djradio'))
const Songs = React.lazy(() => import('@/views/discover/c-cpns/songs'))
const Recommend = React.lazy(() => import('@/views/discover/c-cpns/recommend'))
const Ranking = React.lazy(() => import('@/views/discover/c-cpns/ranking'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    // 二级路由
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/Songs',
        element: <Songs />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/friend',
    element: <Friend />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/musician',
    element: <Musician />
  },
  {
    path: '/product',
    element: <Product />
  }
]
export default routes
