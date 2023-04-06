import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const friend: React.FunctionComponent<IProps> = () => {
  return <div>friend</div>
}

export default memo(friend)
