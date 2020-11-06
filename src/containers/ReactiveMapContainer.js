import React, { useContext } from 'react'
import { ReactReduxContext } from '@appbaseio/reactivesearch/lib/utils'

import MapContainer from './MapContainer'
import PolygonLayer from '../components/PolygonLayer'

function ReactiveMapContainer () {
  const reactiveContext = useContext(ReactReduxContext)

  const hits = reactiveContext.storeState.hits.results
    ? reactiveContext.storeState.hits.results.hits
    : []
  console.log("RMC: ", reactiveContext)
  const items = hits.map(hit => {
    const item = { ...hit._source, _id: hit._id }
    return item
  })

  return (
    <MapContainer>
      {items &&
        items.map(item => {
          return <PolygonLayer item={item} id={item._id} key={item._id} />
        })}
    </MapContainer>
  )
}

export default ReactiveMapContainer