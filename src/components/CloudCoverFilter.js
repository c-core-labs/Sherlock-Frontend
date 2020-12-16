import React from 'react'
import { RangeSlider } from '@appbaseio/reactivesearch';
import { makeStyles, Box, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  },
  itemControl: {
    width: '100%'
  }
}))

export default function FilterPopover() {
  const classes = useStyles();
  return (
    <Box className={classes.itemControl}>
      <Typography>Cloud Cover:</Typography>
      <RangeSlider
        componentId="CloudFilter"
        filterLabel="Cloud Cover"
        dataField={"properties.eo:cloud_cover"}
        stepValue={1}
        showHistogram={true}
        showFilter={true}
        interval={2}
        range={{
          start: 0,
          end: 100,
      }}
        rangeLabels={{
          start: 'Start',
          end: 'End',
      }}
        URLParams={true}
        includeNullValues
        showHistogram={true}
        showFilter={true}
        react={{
          and: ['TextSearch', 'DateFilter', 'PlatformFilter']
        }}
      />
    </Box>
  )
}