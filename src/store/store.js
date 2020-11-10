import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import { artwork } from './artwork'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux'
//create store with the root reducer that combines all reducers
const rootReducer = combineReducers({ artwork })

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware.withExtraArgument({ axios }),
    loggingMiddleware
  ))
)
