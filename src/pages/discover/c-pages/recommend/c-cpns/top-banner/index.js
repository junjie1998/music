import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'

import { getTopBannerAction } from '../../store/actionCreators'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

export default memo(function JJTopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const state = useSelector(
    state => ({
      // topBanners: state.get('recommend').get('topBanners')
      banners: state.getIn(['recommend', 'topBanners'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  // hooks
  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to)
    })
  }, [])

  // const bgImage =
  //   state.banners[currentIndex] &&
  //   state.banners[currentIndex].imageUrl + '?imageView&blur=40x20'

  const bgImage =
    state.banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel
            effect='fade'
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
            // dots={'dotStyle'}
          >
            {state.banners.map((item, index) => {
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <img
                    src={item.imageUrl}
                    alt={item.typeTitle}
                    className='image'
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className='btn left'
            onClick={e => bannerRef.current.prev()}
          ></button>
          <button
            className='btn right'
            onClick={e => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
