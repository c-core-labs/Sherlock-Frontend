import React from 'react'
import { MultiList } from '@appbaseio/reactivesearch';
import { Box, Typography, makeStyles } from '@material-ui/core';

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
        <Typography>Cloud Cover:</Typography>

        <MultiList
        componentId="PlatformSelect"
        dataField="properties.platform"
        title="Platform"
        size={20}
        sortBy="asc"
        // defaultValue={['San Francisco']}
        queryFormat="or"
        selectAllLabel="All Platforms"
        showCheckbox={true}
        showCount={true}
        showSearch={true}
        placeholder="Filter by Satellite"
        react={{
            and: ['DateFilter', 'CloudFilter', 'TextSearch'],
        }}
        showFilter={true}
        filterLabel="platform"
        URLParams={false}
        loader="Loading ..."
    />
    </Box>        
 )
}
