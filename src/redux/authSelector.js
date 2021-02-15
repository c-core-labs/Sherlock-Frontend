import { createSelector } from '@reduxjs/toolkit'

export const getUserEmail = state => state.auth.email
export const getToken = state => state.auth.token
export const getExp = state => state.auth.exp

export const getUserInitials = createSelector([getUserEmail], getUserEmail => {
  return getUserEmail.length > 0 ? getUserEmail.charAt(0).toUpperCase() : null
})

export const getBearerToken = createSelector([getToken], token => {
  return `Bearer ${token}`
})

export const getAuthenticated = createSelector([getExp], exp => {
  return exp > Math.round(Date.now() / 1000)
})