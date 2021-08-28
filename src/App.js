import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from '@/router'
import store from '@/store'

import JJAppHeader from 'components/app-header'
import JJAppFooter from 'components/app-footer'
import JJAppPlayerBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <JJAppHeader />
        <Suspense fallback={<div>loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <JJAppFooter />
        <JJAppPlayerBar />
      </HashRouter>
    </Provider>
  )
})
