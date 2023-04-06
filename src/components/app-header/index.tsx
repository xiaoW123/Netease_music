import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'
// 自己引入的文件
import { HeaderWrapper } from './stytle'
import header_titles from '@/assets/data/header_titles.json'
import { NavLink } from 'react-router-dom'
// 引入antdUI的组件
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
interface IProps {
  children?: ReactNode
}

const AppHeader: React.FunctionComponent<IProps> = () => {
  // 判断一级路由
  function showItem(item: any) {
    if (item.type === 'path') {
      return <NavLink to={item.link}>{item.title}</NavLink>
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="header-box wrap-v1">
        {/* logo模块 */}
        <h1 className="logo sprite_01"></h1>
        {/* 导航模块 */}
        <ul className="header-ul">
          {header_titles.map((item) => {
            return <li key={item.title}>{showItem(item)}</li>
          })}
        </ul>
        {/* 登录模块 */}
        <div className="header-login">
          <div className="login-v1">
            <Input
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="login-v2">
            <a href="#">创作者中心</a>
          </div>
          <div className="login-v3">
            <a href="#">登录</a>
          </div>
        </div>
      </div>
      <div className="m-subnav-up"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
