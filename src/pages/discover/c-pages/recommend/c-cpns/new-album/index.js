import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Carousel } from 'antd'
import JJThemeHeaderRCM from '@/components/theme-header-rcm'
import JJAlbumCover from '@/components/album-cover'
import { AlbumWrapper } from './style'

import { getNewAlbumAction } from '../../store/actionCreators'

export default memo(function JJNewAlbum(props) {
  const carouselRef = useRef()
  const newAlbums = useSelector(
    state => state.getIn(['recommend', 'newAlbums']),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumAction({ limit: 10 }))
  }, [dispatch])

  // console.log(newAlbums)
  return (
    <AlbumWrapper>
      <JJThemeHeaderRCM title='新碟上架' moreLink='/discover/songs' />
      <div className='content'>
        <button
          className='arrow arrow-left sprite_02'
          onClick={e => carouselRef.current.prev()}
        ></button>
        <div className='album'>
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map(item => {
              return (
                <div key={item} className='page'>
                  {newAlbums.slice(item * 5, (item + 1) * 5).map(album => {
                    return (
                      <JJAlbumCover
                        key={album.id}
                        info={album}
                        size={100}
                        width={118}
                        bgp='-570px'
                      />
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className='arrow arrow-right sprite_02'
          onClick={e => carouselRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  )
})
