import { Provider } from 'react-redux'
// 路由懒加载
import ReactDOM from 'react-dom/client'
// router
import { HashRouter } from 'react-router-dom'
import App from '@/App'
// store
import store from '@/store/index'
// 全局样式
import 'normalize.css'
import './assets/css/index.less'
// 主题样式
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)
