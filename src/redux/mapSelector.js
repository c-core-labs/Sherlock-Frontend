import { createSelector } from '@reduxjs/toolkit'
import geoViewport from '@mapbox/geo-viewport'

export const getViewport = state => state.map.viewport

export const getZoom = createSelector([getViewport], viewport => {
  const { zoom } = viewport
  return zoom
})

export const getCoordinates = createSelector([getViewport], viewport => {
  const { latitude, longitude } = viewport
  return { latitude, longitude }
})

export const getMapBounds = createSelector([getViewport], viewport => {
  const { width, height, latitude, longitude, zoom } = viewport
  return geoViewport.bounds([longitude, latitude], zoom, [width, height], 512)
})