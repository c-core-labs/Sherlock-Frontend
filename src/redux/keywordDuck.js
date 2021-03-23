import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    keywords: ''
}

function setKeyword(state, action) {
  const { payload } = action

  return {
    ...state,
    keywords: payload
  }
}

const keywords = createSlice({
    name: 'keywords',
    initialState,
    reducers: {
      setKeyword
    }
  })

export default keywords
