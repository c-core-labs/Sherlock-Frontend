import React from 'react'
import { DataSearch } from '@appbaseio/reactivesearch';
import { useSelector } from 'react-redux'

import { getMapBoundsDebounced } from '../redux/mapSelector'
import {
  // getActiveFilters,
  getDataType
} from '../redux/filterSelector'
import useDebounce from '../hooks/useDebounce'


function ReactiveSearchContainer () {

  const bbox = useSelector(getMapBoundsDebounced)
  const dataFilter = useSelector(getDataType)
  const dbbox = useDebounce(bbox, 800)

  // const extensions = useSelector(getActiveFilters)

  const geoQuery = (value) => {
    let query = {
      query: {
        bool: {
          // must: [
          //   {
          //     bool: {
          //       minimum_should_match: 1,
          //       should: [
          //         {
          //           terms: { 'stac_extensions': extensions }
          //         },
          //         {
          //           bool: {
          //             must_not: {
          //               exists: {
          //                 field: "stac_extensions"
          //               }
          //             }
          //           }
          //         }
          //       ]
          //     },
          //   }
          // ],
          should: [
            {
              multi_match: {
                query: value,
                fields: [
                  'properties.title',
                  'properties.description',
                  'properties.keywords',
                ]
              },
            },
          ],
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
            },
          ]
        }
      }
    }

    // terms cannot be empty, so we conditionally add them if not empty
    if (dataFilter && dataFilter.length) {
      query.query.bool.filter.push({terms: { 'properties.meta:asset_types': dataFilter }})
    }

    return query
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
