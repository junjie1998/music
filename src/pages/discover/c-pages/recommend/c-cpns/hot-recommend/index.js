import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shallowEqual } from 'react-redux'
import { useEffect } from 'react'

import { HotRecommendWrapper } from './style'

import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import JJSongsCover from '@/components/songs-cover'
import { getHotRecommendAction } from '../../store/actionCreators'

export default memo(function JJHotRecommend () {
  const hotRecommends = useSelector(
    state => state.getIn(['recommend', 'hotRecommends']),
    shallowEqual
  )
  // const { hotRecommends } = useSelector(
  //   state => ({ hotRecommends: state.getIn(['recommend', 'hotRecommends']) }),
  //   shallowEqual
  // )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction({ limit: 8 }))
  }, [dispatch])

  // console.log(hotRecommends)

  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM
        title='热门推荐'
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink='/discover/songs'
      // keywordClick={keywordClick}
      />
      <div className='recommend-list'>
        {hotRecommends.map((item, index) => {
          return <JJSongsCover info={item} key={item.id} />
        })}
      </div>
    </HotRecommendWrapper>
  )
})
