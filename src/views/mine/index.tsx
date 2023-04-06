import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const mine: React.FunctionComponent<IProps> = () => {
  return <div>mine</div>
}

export default memo(mine)
