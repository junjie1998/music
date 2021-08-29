import React, { memo } from 'react'

import { AlbumWrapper } from './style'

import { getSizeImage } from '@/utils/format-utils'

export default memo(function JJAlbumCover(props) {
  const { info, size = 130, width = 130, bgp = '-845px' } = props
  // console.log(info)
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className='album-image' title={info.name}>
        <img src={getSizeImage(info.picUrl, size)} alt='' />
        <a href='/abc' className='cover sprite_covor'>
          cjj
        </a>
      </div>
      <div className='album-info'>
        <div className='name text-nowrap'>{info.name}</div>
        <div className='artist text-nowrap'>{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
