import React, { memo } from 'react'

import { PlayerLeft, PlayerRight, PlayerWrapper } from './style'

export default memo(function JJPlayer() {
  return (
    <PlayerWrapper>
      <div className='content wrap-v2'>
        <PlayerLeft></PlayerLeft>
        <PlayerRight></PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
