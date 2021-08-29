import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { HeaderWrapper } from './style'

const JJThemeHeaderRCM = memo(function (props) {
  const { title, keywords, moreLink } = props

  return (
    <HeaderWrapper className='sprite_02'>
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keyword'>
          {keywords.map((item, index) => {
            return (
              <div className='item' key={item}>
                <a className='link' href={`/discover/playlist/?cat=${item}`}>
                  {item}
                </a>
                {index !== keywords.length - 1 && (
                  <span className='divider'>|</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <div className='right'>
        <Link to={moreLink}>更多</Link>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  )
})

JJThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

JJThemeHeaderRCM.defaultProps = {
  keywords: []
}

export default JJThemeHeaderRCM
