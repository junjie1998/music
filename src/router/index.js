import React from 'react'
import { Redirect } from 'react-router-dom'

const JJDiscover = React.lazy(() => import('@/pages/discover'))
const JJAlbum = React.lazy(() => import('@/pages/discover/c-pages/album'))
const JJArtist = React.lazy(() => import('@/pages/discover/c-pages/artist'))
const JJDjradio = React.lazy(() => import('@/pages/discover/c-pages/djradio'))
const JJRanking = React.lazy(() => import('@/pages/discover/c-pages/ranking'))
const JJRecommend = React.lazy(() =>
  import('@/pages/discover/c-pages/recommend')
)
const JJSongs = React.lazy(() => import('@/pages/discover/c-pages/songs'))

const JJPlayer = React.lazy(() => import('@/pages/player'))

const JJMine = React.lazy(() => import('@/pages/mine'))
const JJFriend = React.lazy(() => import('@/pages/friend'))

// import JJDiscover from '@/pages/discover'
// import JJAlbum from '@/pages/discover/c-pages/album'
// import JJArtist from '@/pages/discover/c-pages/artist'
// import JJDjradio from '@/pages/discover/c-pages/djradio'
// import JJRanking from '@/pages/discover/c-pages/ranking'
// import JJRecommend from '@/pages/discover/c-pages/recommend'
// import JJSongs from '@/pages/discover/c-pages/songs'

// import JJPlayer from '@/pages/player'

// import JJMine from '@/pages/mine'
// import JJFriend from '@/pages/friend'

const routes = [
  {
    path: '/',
    exact: true,
    // component: JJDiscover
    render: () => <Redirect to='/discover' />
  },
  {
    path: '/discover',
    component: JJDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend' />
      },
      {
        path: '/discover/recommend',
        component: JJRecommend
      },
      {
        path: '/discover/ranking',
        component: JJRanking
      },
      {
        path: '/discover/songs',
        component: JJSongs
      },
      {
        path: '/discover/djradio',
        // exact: true,
        component: JJDjradio
      },
      {
        path: '/discover/artist',
        component: JJArtist
      },
      {
        path: '/discover/album',
        component: JJAlbum
      },
      {
        path: '/discover/player',
        component: JJPlayer
      }
    ]
  },
  {
    path: '/mine',
    component: JJMine
  },
  {
    path: '/friend',
    component: JJFriend
  }
]

export default routes
