import React, { useContext } from 'react'
import { ReactReduxContext } from '@appbaseio/reactivesearch/lib/utils'
import { getSelectedItem} from '../redux/mapSelector'
import PolygonLayer from '../components/PolygonLayer'
import { useSelector } from 'react-redux'
import { mapVariables } from '../theme'

function ReactiveLayersContainer () {
  const reactiveContext = useContext(ReactReduxContext)
  const selectedItem = useSelector(getSelectedItem)

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
    <>
      {selectedItem && <PolygonLayer item={selectedItem} id={"highlight-lyr"} key={"highlight-lyr"} fillColor={mapVariables.mapHighlightColour} fillOpacity={mapVariables.mapFillOpacity}></PolygonLayer>}

      {items &&
        items.map(item => {
          return <PolygonLayer item={item} id={item._id} key={item._id} />
        })}
    </>
  )
}

export default ReactiveLayersContainer
