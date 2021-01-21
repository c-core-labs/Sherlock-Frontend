import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import mapDuck from './mapDuck'
import filterDuck from './filterDuck'

const reducer = combineReducers({
    map: mapDuck.reducer,
    filters: filterDuck.reducer
  })
  
  const store = configureStore({
    reducer: reducer,
    middleware: [],
    devTools: true
  })

window.store = store

export default store;