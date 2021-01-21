import { createSlice } from '@reduxjs/toolkit'
import { defaultFilters } from '../config'

let initialState = {}
defaultFilters.forEach(item => {
  initialState[item.ext] = item.default
})

function setFilter(state, action) {
  const { payload } = action
  let { filters } = state

  filters[payload] = !filters[payload]

  console.log(filters)

  return {
      ...state,
      filters : {
        ...filters
      }
  }
}

const filters = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      setFilter
    }
  })
  
  export default filters