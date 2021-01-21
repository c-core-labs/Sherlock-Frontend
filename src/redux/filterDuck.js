import { createSlice } from '@reduxjs/toolkit'
import { defaultFilters } from '../config'

const initialState = defaultFilters.reduce((accumulator, filter) => {
  accumulator[filter.ext] = filter.default

  return accumulator
}, {})

function setFilter(state, action) {
  const { payload } = action

  const filter = state[payload]

  return {
    ...state,
    [payload]: !filter
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
