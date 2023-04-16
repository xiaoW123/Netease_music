// import React from 'react'
import { Suspense, useEffect } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import Demo01 from './views/demo'
// 引入组件
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/discover/c-cpns/songs/app-player-bar'
import { useAppDispatch } from './store'
import { fetchCurrentSongAction } from './views/discover/c-cpns/songs/store/player'
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(2035279723))
  }, [])

  return (
    <div>
      <AppHeader />
      <Suspense fallback="">
        <div>{useRoutes(routes)}</div>
      </Suspense>
      {/* 播放器 */}
      <AppPlayerBar />
    </div>
  )
}

export default App
