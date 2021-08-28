import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import JJThemeHeaderRCM from '@/components/theme-header-rcm'
import JJTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'

import { getTopListAction } from '../../store/actionCreators'

export default memo(function JJRecommendRanking() {
  const { upList, newList, originList } = useSelector(
    state => ({
      upList: state.getIn(['recommend', 'upList']),
      newList: state.getIn(['recommend', 'newList']),
      originList: state.getIn(['recommend', 'originList'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction({ idx: 0 }))
    dispatch(getTopListAction({ idx: 2 }))
    dispatch(getTopListAction({ idx: 3 }))
  }, [dispatch])

  return (
    <RankingWrapper>
      <JJThemeHeaderRCM title='榜单' moreLink='/discover/songs' />
      <div className='tops'>
        <JJTopRanking info={upList} />
        <JJTopRanking info={newList} />
        <JJTopRanking info={originList} />
      </div>
    </RankingWrapper>
  )
})
