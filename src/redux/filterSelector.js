import { createSelector } from '@reduxjs/toolkit'

export const filters = state => state.filters

export const getFilters = createSelector([filters], filter => {
    return filter
})