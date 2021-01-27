import { createSelector } from '@reduxjs/toolkit'

export const filters = state => state.filters
export const formatFilter = state => state.dataType

export const getFilters = createSelector([filters], filter => {
    return filter
})

export const getActiveFilters = createSelector([filters], filter => {
    return Object.keys(filter).filter(key => filter[key])
})

export const getDataType = createSelector([formatFilter], format => {
    
    return format.dataType === 'all' ? ['raster', 'vector'] : [format.dataType]
})