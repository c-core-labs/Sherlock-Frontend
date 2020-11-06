import { createSelector } from '@reduxjs/toolkit'

export const getViewport = state => state.map.viewport

export const getZoom = createSelector([getViewport], viewport => {
  const { zoom } = viewport

  return zoom
})

export const getCoordinates = createSelector([getViewport], viewport => {
  const { latitude, longitude } = viewport
  return { latitude, longitude }
})