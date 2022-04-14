import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
// import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'

// const saga = createSagaMiddleware()

const middleware = [logger] // , thunk, saga


export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(...middleware))
}
