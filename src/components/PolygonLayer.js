import { Layer, Source } from 'react-map-gl'
import React from 'react'
import { mapVariables } from '../theme'

function PolygonLayer ({
  item,
  id,
  fillColor = mapVariables.mapFillColour,
  fillOpacity = mapVariables.mapFillOpacity,
  type = 'geojson'
}) {
  const paint = {
    'fill-color': fillColor,
    'fill-opacity': fillOpacity,
  }
  return (
    <Source type={type} data={item} id={id}>
      <Layer source={id} type={'fill'} paint={paint} />
    </Source>
  )
}

export default PolygonLayer
