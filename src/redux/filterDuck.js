import { createSlice } from '@reduxjs/toolkit'
import { defaultFilters } from '../config'

const initialState = defaultFilters.reduce((accumulator, filter) => {
  return { ...accumulator, [filter.ext]: filter.default }
}, {})

function setFilter(state, action) {
  const { payload } = action

  state[payload] = !state[payload]
}

const filters = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      setFilter
    }
  })

  export default filters
