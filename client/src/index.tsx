import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import registerServiceWorker from 'utils/registerServiceWorker.js'

import store, { history } from 'modules/store'
import App from 'views/App'

import './index.css'

/* eslint-disable react/jsx-filename-extension */
const Index = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App} />
    </ConnectedRouter>
  </Provider>
)
/* eslint-enable react/jsx-filename-extension */

ReactDOM.render(<Index />, document.getElementById('root'))
registerServiceWorker()
