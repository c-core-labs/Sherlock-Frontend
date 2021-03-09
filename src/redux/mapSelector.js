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

// wrap bbox across international date line
function sanitizeCoordinate(coordinate) {
  if (coordinate < -180) {
    return 180 + (coordinate % 180)
  } else if (coordinate > 180) {
    return -180 + (coordinate % 180)
  } else {
    return coordinate
  }
}

export const getMapBounds = createSelector([getViewport], viewport => {
  const { width, height, latitude, longitude, zoom } = viewport

  const bounds = geoViewport.bounds([longitude, latitude], (zoom * 1.05 ), [width, height], 512)
  const sanitizedBounds = bounds.map(coordinate => sanitizeCoordinate(coordinate))

  return sanitizedBounds
})

export const getMapBoundsDebounced = createSelector([getMapBounds], bounds => {
  return bounds
})

export const getSelectedItem = createSelector([getHighlighted], item => {
  return item
})
