// import { routerMiddleware } from 'react-router-redux'
// import createHistory from 'history/createHashHistory'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from 'reducers'
import DevTools from '../devTools'
import thunk from 'redux-thunk'

// const history = createHistory()
// const middleware = routerMiddleware(history)

const enhancer = compose(
  // applyMiddleware(thunk, middleware),
  applyMiddleware(thunk),
  DevTools.instrument(),
)

export default function configureStore(initialstate) {
  const store = createStore(rootReducer, initialstate, enhancer)
  return store
}