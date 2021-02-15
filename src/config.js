
// Mapbox
export const mapboxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

// ES
export const es_key = process.env.REACT_APP_ES_KEY
export const es_index= process.env.REACT_APP_ES_INDEX
export const es_type = process.env.REACT_APP_ES_TYPE
export const es_url = process.env.REACT_APP_ES_URL
export const apiUrl = process.env.REACT_APP_API_URL


// Default map values
export const defaultViewport = {
  latitude: 65.28,
  longitude: -100,
  zoom: 2,
  width: 250,
  height: 250
}

export const defaultFilters = [
  {title: 'Unclassified', subtitle: 'Data that has no type assigned', ext: 'null', default: true},
  {title: 'SAR', subtitle: 'Sentinel 1, RADARSAT...', ext: 'sar', default: true},
  {title: 'Optical Satellite', subtitle: 'Sentinel 2, LANDSAT...', ext: 'eo', default: true},
  {title: 'RPAS', subtitle: 'Drone/UAV', ext: 'drone', default: true},
  {title: 'FMV', subtitle: 'Full Motion Video', ext: 'fmv', default: true},
  {title: 'Point Cloud', subtitle: '', ext: 'pointcloud', default: true},
  {title: 'Tiled Assets', subtitle: 'WMS, WMTS, MVT', ext: 'tiled-assets', default: true},
  {title: 'Data Cube', subtitle: '', ext: 'datacube', default: true}
]

export const dataTypeFilter = [
  {id: 1, label: 'All', value: 'all'},
  {id: 2, label: 'Raster', value: 'raster'},
  {id: 3, label: 'Vector', value: 'vector'}
]

// export const basemapStyle = 'mapbox://styles/gnoseworthy/ck37pn6rv7o0a1cmm2l4h5xsi'
export const basemapStyle = 'mapbox://styles/mapbox/satellite-v9'