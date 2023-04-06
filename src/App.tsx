// import React from 'react'
import { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import Demo01 from './views/demo'
// 引入组件
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
function App() {
  return (
    <div>
      <AppHeader />
      <Suspense fallback="">
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
