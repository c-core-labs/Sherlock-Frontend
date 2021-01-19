export const sortOptions = [
    {
      label: 'Best Match',
      dataField: '_score',
      sortBy: 'desc'
    },
    {
      label: 'Newest First',
      dataField: 'properties.datetime',
      sortBy: 'desc'
    },
    {
      label: 'Oldest First',
      dataField: 'properties.datetime',
      sortBy: 'asc'
    }
  ]
  
  export const repoActiveDropdownData = [
    { start: 'now-1M', end: 'now', label: 'Last 30 days' },
    { start: 'now-6M', end: 'now', label: 'Last 6 months' },
    { start: 'now-1y', end: 'now', label: 'Last year' }
  ]
  