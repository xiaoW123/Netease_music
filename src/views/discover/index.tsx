import React, { memo, Suspense } from 'react'
import type { FunctionComponent, ReactNode } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

// 自己引入的文件
import { DiscoverWrapper } from './style'
import { discoverMenu } from '@/assets/data/local-data'

interface IProps {
  children?: ReactNode
}

const Discover: React.FunctionComponent<IProps> = () => {
  return (
    <DiscoverWrapper>
      <div className="item_header">
        <div className="item_son wrap-v1">
          {discoverMenu.map((item) => {
            return (
              <div key={item.link} className="item_son1">
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </div>
      </div>
      {/* 子路由占位符 */}
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </DiscoverWrapper>
  )
}

export default memo(Discover)
