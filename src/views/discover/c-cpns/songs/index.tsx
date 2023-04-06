import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Songs: React.FunctionComponent<IProps> = () => {
  return <div>Songs</div>
}

export default memo(Songs)
