import React, { memo } from 'react'

import { BackTop } from 'antd'
import { BackTopWrapper } from './style'

export default memo(function MyBackTop() {
  return (
    <BackTopWrapper>
      <BackTop>
        <div className='back-top'></div>
      </BackTop>
    </BackTopWrapper>
  )
})
