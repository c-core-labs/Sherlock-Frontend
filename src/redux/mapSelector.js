import { createSelector } from '@reduxjs/toolkit'
import geoViewport from '@mapbox/geo-viewport'

export const getViewport = state => state.map.viewport
export const getHighlighted = state => state.map.selectedItem

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
  return geoViewport.bounds([longitude, latitude], (zoom * 1.05 ), [width, height], 512)
})

export const getMapBoundsDebounced = createSelector([getMapBounds], bounds => {
  return bounds
})

export const getSelectedItem = createSelector([getHighlighted], item => {
  return item
})
