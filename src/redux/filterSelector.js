import { createSelector } from '@reduxjs/toolkit'

export const filters = state => state.filters

export const getFilters = createSelector([filters], filter => {
    return filter
})

export const getActiveFilters = createSelector([filters], filter => {
    return Object.keys(filter).filter(key => filter[key])
})