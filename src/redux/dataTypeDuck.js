import { createSlice } from '@reduxjs/toolkit'

const initialState = { dataType: 'all' }

function setDataType(state, action) {
  const { payload } = action

  return {
    ...state,
    dataType: payload
  }
}

const dataTypes = createSlice({
    name: 'dataType',
    initialState,
    reducers: {
      setDataType
    }
  })

  export default dataTypes