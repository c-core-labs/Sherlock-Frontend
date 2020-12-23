import React from 'react'
import MapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { mapboxAccessToken } from '../config'

function Map ({

  width = '100%',
  height = '100%',
  onClick,
  onViewportChange = console.log,
  viewport = {},
  mapStyle = 'mapbox://styles/mapbox/light-v10',
  scale = true,
  reuseMaps = false,
  mapOptions = {
    hash: false
  },
  children
}) {
  return (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={mapboxAccessToken}
      width={width}
      height={height}
      onViewportChange={onViewportChange}
      onClick={onClick}
      mapStyle={mapStyle}
      reuseMaps={reuseMaps}
      mapOptions={mapOptions}
    >
      {children}
    </MapGL>
  )
}

export default Map