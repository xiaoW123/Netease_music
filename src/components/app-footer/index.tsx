import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: React.FunctionComponent<IProps> = () => {
  return <div>AppFooter</div>
}

export default memo(AppFooter)
