import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import loadable from '@loadable/component'

import mapDuck from '../redux/mapDuck'
import { getViewport } from '../redux/mapSelector'
import { basemapStyle } from '../config'

const MapComponent = loadable(() => import('../components/Map'))

function MapContainer ({ children }) {
  const dispatch = useDispatch()
  const viewport = useSelector(getViewport)

  const handleViewportChange = useCallback(props => {
      dispatch(mapDuck.actions.changeViewport(props))
    },
    [dispatch]
  )

  const handleLoad = useCallback(() => {
    dispatch(mapDuck.actions.setLoaded(true))
  }, [dispatch])

  return (
    <MapComponent
      onViewportChange={handleViewportChange}
      viewport={viewport}
      onLoad={handleLoad}
      mapStyle={basemapStyle}
    >
      {children}
    </MapComponent>
  )
}

export default MapContainer