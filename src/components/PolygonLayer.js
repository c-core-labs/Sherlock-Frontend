import { Layer, Source } from 'react-map-gl'
import React from 'react'

const defaultPaint = {
  'line-color': 'blue',
  'line-opacity': 0.7
}

function PolygonLayer ({
  item,
  id,
  paint = defaultPaint,
  type = 'geojson'
}) {
  return (
    <Source type={type} data={item} id={id}>
      <Layer source={item.id} type={'line'} paint={paint} />
    </Source>
  )
}

export default PolygonLayer