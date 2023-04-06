import React, { memo } from 'react'
import type { FunctionComponent, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const product: React.FunctionComponent<IProps> = () => {
  return <div>product</div>
}

export default memo(product)
