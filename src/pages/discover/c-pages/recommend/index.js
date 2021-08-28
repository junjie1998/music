import React, { memo } from 'react'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

import JJTopBanner from './c-cpns/top-banner'
import JJHotRecommend from './c-cpns/hot-recommend'
import JJNewAlbum from './c-cpns/new-album'
import JJRecommendRanking from './c-cpns/recommend-ranking'

function JJRecommend(props) {
  return (
    <RecommendWrapper>
      <JJTopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <JJHotRecommend />
          <JJNewAlbum />
          <JJRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(JJRecommend)

// function JJRecommend(props) {
//   console.log(props)
//   const { getBanners, topBanners } = props
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
//   return (
//     <div>
//       <h2>JJRecommend:{topBanners}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => dispatch(getTopBannerAction())
// })
