import React, { memo, Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { discoverMenu } from '@/common/local-data'

import { DiscoverWrapper, TopMenu } from './style'

export default memo(function HYDiscover(props) {
  const { route } = props

  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {discoverMenu.map((item, index) => {
            return (
              <div className='item' key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>

      <Suspense fallback={<div>loading</div>}>
        {renderRoutes(route.routes)}
      </Suspense>
    </DiscoverWrapper>
  )
})
