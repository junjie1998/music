import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { headerLinks } from '@/common/local-data'

export default memo(function JJAppHeader() {
  // 页面代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    } else {
      return <a href={item.link}>{item.title}</a>
    }
  }

  // jsx
  return (
    <HeaderWrapper>
      <div className='content wrap-v1 space-between'>
        <HeaderLeft>
          <a href='#/' className='logo sprite_01'>
            logo
          </a>
          <div className='select-list'>
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className='select-item'>
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className='search'
            placeholder='音乐/视频/电台/用户'
            prefix={<SearchOutlined />}
          />
          <div className='center'>创作中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})
