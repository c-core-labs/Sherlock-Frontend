import { createSlice } from '@reduxjs/toolkit'
import geoViewport from '@mapbox/geo-viewport'

import { defaultViewport } from '../config'

const initialState = {
  loading: false,
  viewport: defaultViewport,
  selectedItem: null
}

// TODO: try builder callback api with flow
// https://redux-toolkit.js.org/api/createreducer/#the-builder-callback-api
function setLoaded (state, action) {
  const { payload } = action

  state.loaded = payload
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

  const width = viewport.width
  const height = viewport.height

  const {
    center: [longitude, latitude],
    zoom
  } = geoViewport.viewport(bbox, [width, height])

  return {
    ...state,
    viewport: { ...viewport, latitude, longitude, zoom: zoom - 1 }
  }
}

function setHighlightedItem(state, action) {
  console.log('Quack Quack', action.payload)

  return state

}

function setHighlightedMapItem(state, action) {
  const item = action.payload
  let newItem
  console.log('Quack: ', item)
  // datetime field requried for valid STAC entry, does not exist in other project layers.
  // if (item.features && item.features[0].properties.datetime) {
  //   newItem = item.features[0]
  // }
  newItem = item ? item : null

  return {
    ...state,
    selectedItem: newItem
  }
}

const map = createSlice({
  name: 'map',
  initialState,
  reducers: {
    changeViewport,
    fitBounds,
    setLoaded,
    setMaxBounds,
    setMinZoom,
    setHighlightedItem,
    setHighlightedMapItem
  }
})

export default map
