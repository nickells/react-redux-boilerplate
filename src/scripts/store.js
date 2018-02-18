import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import MainReducer from './main/reducer'

export const history = createHistory()
const combinedReducers = combineReducers({
  MainReducer,
})

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history),
]

// Enable redux dev tools in development
if (process.env.NODE_ENV !== 'production') {
  const { devToolsExtension } = window

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
)

const store = createStore(
  combinedReducers,
  initialState,
  composedEnhancers,
)
// store.subscribe(()=>{
//   console.log('new client state', store.getState());
// });

export default store
