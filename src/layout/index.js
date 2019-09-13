import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import BottomBar from '../components/BottomBar'
import Home from '../pages/Home'

const LoadableOrder = Loadable({
  loader: () => import('../pages/Order'),
  loading: () => null,
})

const LoadableUserCenter = Loadable({
  loader: () => import('../pages/UserCenter'),
  loading: () => null,
})

function Layout() {
  return (
    <div style={{ paddingBottom: '1rem' }}>
      <Route path="/home" exact component={Home}/>
      <Route path="/order" exact component={LoadableOrder}/>
      <Route path="/me" exact component={LoadableUserCenter}/>
      <Redirect from="/" to="/home"/>
      <BottomBar/>
    </div>
  )
}

export default Layout
