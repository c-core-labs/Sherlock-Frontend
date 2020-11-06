import { createSlice } from '@reduxjs/toolkit'
import geoViewport from '@mapbox/geo-viewport'

import { defaultViewport } from '../config'

const initialState = {
  loading: false,
  viewport: defaultViewport
}

// TODO: try builder callback api with flow
// https://redux-toolkit.js.org/api/createreducer/#the-builder-callback-api
function setLoaded (state, action) {
  const { payload } = action

  state.loaded = payload
}

function changeRiver (state, action) {
  return state
}

function setMaxBounds (state, action) {
  // NOTE Max bounds in xmin ymin xmax ymax format
  const { payload } = action

  return { ...state, maxBounds: payload }
}

function setMinZoom (state, action) {
  const { payload } = action

  return { ...state, minZoom: payload }
}

function changeViewport (state, action) {
  const { payload } = action
  const { viewport } = state

  const { latitude, longitude, zoom } = payload
  const { maxBounds, minZoom } = state

  if (!maxBounds) {
    return { ...state, viewport: { ...viewport, ...payload } }
  }
  const [xmin, ymin, xmax, ymax] = maxBounds

  // Prevent latitude or longitude from creeping when user zooms out
  // past minZoom (CORE-699)
  if (zoom < minZoom) {
    return state
  }

  const nextLongitude =
    xmin && xmax ? Math.max(Math.min(xmax, longitude), xmin) : longitude
  const nextLatitude =
    ymin && ymax ? Math.max(Math.min(ymax, latitude), ymin) : latitude
  const nextZoom = minZoom ? Math.max(Math.max(zoom, minZoom), zoom) : zoom

  return {
    ...state,
    viewport: {
      ...viewport,
      ...payload,
      longitude: nextLongitude,
      latitude: nextLatitude,
      zoom: nextZoom
    }
  }
}

function fitBounds (state, action) {
  const { bbox } = action.payload
  const { viewport } = state

  const width = window.innerWidth
  const height = window.innerHeight

  const {
    center: [longitude, latitude],
    zoom
  } = geoViewport.viewport(bbox, [width, height])

  return {
    ...state,
    viewport: { ...viewport, latitude, longitude, zoom: zoom - 1 }
  }
}

const map = createSlice({
  name: 'map',
  initialState,
  reducers: {
    changeRiver,
    changeViewport,
    fitBounds,
    setLoaded,
    setMaxBounds,
    setMinZoom
  }
})

export default map
