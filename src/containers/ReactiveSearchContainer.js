import React from 'react'
import { DataSearch } from '@appbaseio/reactivesearch';
import { useSelector } from 'react-redux'

import { getMapBounds } from '../redux/mapSelector'

function ReactiveSearchContainer () {

  // Combining the geo_shape filter with the data search may not be the best way of doing this.
  // A separate hidden datafield with just the geo-query portion might be better, separating the query logic...
  // either way, we need to debounce this - running into rate limit response from appbase.

  const bbox = useSelector(getMapBounds)

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
                  coordinates: [ [ bbox[0], bbox[3] ], [ bbox[2], bbox[1] ] ]
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
      debounce={300}
      URLParams
      className="es-form"
      innerClass={{
        input: 'form-search',
      }}
    />

  )
}

export default ReactiveSearchContainer