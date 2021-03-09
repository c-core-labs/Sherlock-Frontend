import React from 'react'
import { MultiList } from '@appbaseio/reactivesearch';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(1)
    },
    itemControl: {
      width: '100%'
    }
  }))

export default function PlatformFilter () {
  const classes = useStyles()
  return (
    <Box className={classes.itemControl}>
      <MultiList
        componentId="PlatformFilter"
        dataField="properties.platform"
        size={20}
        sortBy="asc"
        queryFormat="or"
        selectAllLabel="All Platforms"
        showCheckbox={true}
        showCount={true}
        showSearch={false}
        // placeholder="Filter by Platform"
        react={{
            and: ['DateFilter', 'CloudFilter', 'TextSearch'],
        }}
        showFilter={true}
        URLParams={true}
        loader="Loading ..."
      />
    </Box>        
  )
}
