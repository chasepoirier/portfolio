import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import * as reducers from './ducks'

export const history = createBrowserHistory()

const middleware = applyMiddleware(routerMiddleware(history), thunk, logger)
const rootReducer = combineReducers(reducers)
const connectedRouter = connectRouter(history)(rootReducer)

export default createStore(connectedRouter, composeWithDevTools(middleware))
