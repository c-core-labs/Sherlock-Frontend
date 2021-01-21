import React from 'react'
import { DataSearch } from '@appbaseio/reactivesearch';
import { useSelector } from 'react-redux'

import { getMapBoundsDebounced } from '../redux/mapSelector'
import { getActiveFilters } from '../redux/filterSelector'
import useDebounce from '../hooks/useDebounce'

function ReactiveSearchContainer () {

  const bbox = useSelector(getMapBoundsDebounced)
  const dbbox = useDebounce(bbox, 800)

  const extensions = useSelector(getActiveFilters)
  const geoQuery = (value) => {
    return {
      query: {
        bool: {
          must: {
            terms: {
              stac_extensions: extensions
            }
          },
          should: { // or 'must' if we want to strictly limit results
            multi_match: {
              query: value,
              fields: [
                'properties.title',
                'properties.description',
                'properties.title.raw',
                'properties.keywords',
              ]
            }
          },
          filter: [
            {
              geo_shape: {
                bbox: {
                  shape: {
                    type: "envelope",
                    coordinates: [ [ dbbox[0], dbbox[3] ], [ dbbox[2], dbbox[1] ] ]
                  },
                  relation: "WITHIN"
                }
              }
            }
          ]
        },
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
      URLParams={true}
      className="es-form"
      innerClass={{
        input: 'form-search',
      }}
    />

  )
}

export default ReactiveSearchContainer
