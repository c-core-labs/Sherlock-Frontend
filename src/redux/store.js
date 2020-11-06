import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import mapDuck from './mapDuck'

const reducer = combineReducers({
    map: mapDuck.reducer
  })
  
  const store = configureStore({
    reducer: reducer,
    middleware: [],
    devTools: true
  })

window.store = store

export default store;