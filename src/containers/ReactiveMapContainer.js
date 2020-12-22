import React, { useContext } from 'react'
import { ReactReduxContext } from '@appbaseio/reactivesearch/lib/utils'
import { getSelectedItem} from '../redux/mapSelector'
import MapContainer from './MapContainer'
import PolygonLayer from '../components/PolygonLayer'
import { useSelector } from 'react-redux'
import { mapVariables } from '../theme'

function ReactiveMapContainer () {
  const reactiveContext = useContext(ReactReduxContext)
  const selectedItem = useSelector(getSelectedItem)
  
  console.log('RMC ReRender:', selectedItem)
  
  const hits = reactiveContext.storeState.hits.results
    ? reactiveContext.storeState.hits.results.hits
    : []
    
  const items = hits.map(hit => {
    const item = { ...hit._source, _id: hit._id }
    return item
  })

  const highlightPaint = {
    'fill-color': mapVariables.mapHighlightColour,
    'fill-opacity': mapVariables.mapFillOpacity
  }

  return (
    <MapContainer>
      {selectedItem && <PolygonLayer item={selectedItem} id={"highlight-lyr"} paint={highlightPaint}></PolygonLayer>}
      
      {items &&
        items.map(item => {
          return <PolygonLayer item={item} id={item._id} key={item._id} />
        })}
    </MapContainer>
  )
}

export default ReactiveMapContainer