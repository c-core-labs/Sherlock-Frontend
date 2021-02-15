import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('token') || '',
  email : localStorage.getItem('email') || {},
  exp: localStorage.getItem('exp') || 0
}

function setStorage(email, token, exp) {
  localStorage.setItem('token', token)
  localStorage.setItem('email', email)
  localStorage.setItem('exp', exp)
}

function loginSuccess (state, action) {
  const { payload } = action
  const { id: { email }, access: { exp }, access_token: token } = payload
  setStorage(email, token, exp)

  return {
    ...state,
    token,
    email,
    exp
  }
}

function loginFailure (state, action) {
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  localStorage.removeItem('exp')
  return {
    ...state,
    token: '',
    email: '',
    exp: 0
  }
}

function logout(state, action) {
  localStorage.removeItem('token')
  localStorage.removeItem('email')
  localStorage.removeItem('exp')
  return {
    ...state,
    token: '',
    email: '',
    exp: 0
  }
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      loginSuccess,
      loginFailure,
      logout
  }
})
  
export default auth