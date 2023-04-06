import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const musician: React.FunctionComponent<IProps> = () => {
  return <div>musician</div>
}

export default memo(musician)
