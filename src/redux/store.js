import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import mapDuck from './mapDuck'
import filterDuck from './filterDuck'
import dataTypeDuck from './dataTypeDuck'

const reducer = combineReducers({
    map: mapDuck.reducer,
    filters: filterDuck.reducer,
    dataType: dataTypeDuck.reducer,
  })
  
  const store = configureStore({
    reducer: reducer,
    middleware: [],
    devTools: true
  })

window.store = store

export default store;