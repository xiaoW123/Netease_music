import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Album: React.FunctionComponent<IProps> = () => {
  return <div>Album</div>
}

export default memo(Album)
