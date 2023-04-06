import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Artist: React.FunctionComponent<IProps> = () => {
  return <div>Artist</div>
}

export default memo(Artist)
