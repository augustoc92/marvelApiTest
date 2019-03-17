import React from 'react'
import { Route, Switch } from 'react-router'
import App from './components/App'
import Comics from './components/comics'

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/comics" component={Comics} />
      </Switch>
    </App>
  )
}

export default Routes
