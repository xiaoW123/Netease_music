import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Djradio: React.FunctionComponent<IProps> = () => {
  return <div>Djradio</div>
}

export default memo(Djradio)
