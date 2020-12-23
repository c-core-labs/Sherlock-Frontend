import React from 'react'
import { DataSearch } from '@appbaseio/reactivesearch';
import { useSelector } from 'react-redux'

import { getMapBoundsDebounced } from '../redux/mapSelector'
import useDebounce from '../hooks/useDebounce'

function ReactiveSearchContainer () {

  // Combining the geo_shape filter with the data search may not be the best way of doing this.
  // A separate hidden datafield with just the geo-query portion might be better, separating the query logic...
  // either way, we need to debounce this - running into rate limit response from appbase.

  // TODO: Move this debounce logic into the selector to reduce re-rendering
  const bbox = useSelector(getMapBoundsDebounced)
  const dbbox = useDebounce(bbox, 500)

  const geoQuery = (value) => {
    return {
      query: {
        bool: {
          should: { // or 'must' if we want to strictly limit results
            multi_match: {
              query: value,
              fields: [
                'properties.title',
                'properties.description',
                'properties.title.raw',
                'properties.keywords',
                // 'properties.bbox'
              ]
            },
          },
          filter: {
            geo_shape: {
              bbox: {
                shape: {
                  type: "envelope",
                  coordinates: [ [ dbbox[0], dbbox[3] ], [ dbbox[2], dbbox[1] ] ]
                },
                relation: "INTERSECTS"
              }
            }
          }
        }
      }
    }
  }
  return (
      <DataSearch
      customQuery={geoQuery}
      dataField={[
        'properties.title',
        'properties.description',
        'properties.title.raw',
        'properties.keywords'
      ]}
      queryFormat="or"
      componentId="TextSearch"
      filterLabel="Search"
      placeholder="Search STAC"
      iconPosition="left"
      autosuggest={true}
      debounce={500}
      URLParams
      className="es-form"
      innerClass={{
        input: 'form-search',
      }}
    />

  )
}

export default ReactiveSearchContainer
