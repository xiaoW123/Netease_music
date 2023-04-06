import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Ranking: React.FunctionComponent<IProps> = () => {
  return <div>Ranking</div>
}

export default memo(Ranking)
