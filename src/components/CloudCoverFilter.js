import React from 'react'
import { RangeSlider } from '@appbaseio/reactivesearch';
import { makeStyles, Box} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  },
  itemControl: {
    width: '100%'
  }
}))

const FilterPopover = () => {
  const classes = useStyles();
  return (
    <Box className={classes.itemControl}>
      <RangeSlider
        componentId="CloudFilter"
        filterLabel="Cloud Cover"
        dataField={"properties.eo:cloud_cover"}
        stepValue={5}
        showHistogram={true}
        showFilter={true}
        interval={2}
        range={{
          start: 0,
          end: 100,
      }}
        rangeLabels={{
          start: 'Min',
          end: 'Max',
      }}
        URLParams={true}
        includeNullValues
        react={{
          and: ['TextSearch', 'DateFilter', 'PlatformFilter']
        }}
      />
    </Box>
  )
}

export default FilterPopover