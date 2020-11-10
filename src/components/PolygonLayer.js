import { Layer, Source } from 'react-map-gl'
import React from 'react'
import themeVars from '../theme'

const defaultPaint = {
  // 'line-color': 'blue',
  // 'line-opacity': 0.7,
  'fill-color': themeVars.mapFillColour,
  'fill-opacity': themeVars.mapFillOpacity
}

function PolygonLayer ({
  item,
  id,
  paint = defaultPaint,
  type = 'geojson'
}) {
  return (
    <Source type={type} data={item} id={id}>
      <Layer source={item.id} type={'fill'} paint={paint} />
    </Source>
  )
}

export default PolygonLayer