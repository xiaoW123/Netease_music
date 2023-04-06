import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const download: React.FunctionComponent<IProps> = () => {
  return <div>download</div>
}

export default memo(download)
