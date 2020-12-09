import React from 'react'
import { RangeSlider, MultiList } from '@appbaseio/reactivesearch';
import { makeStyles, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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
    <Box className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}>
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={classes.itemControl}>
            <Typography>Cloud Cover:</Typography>
            <RangeSlider
              componentId="CloudFilter"
              dataField="properties.cloudcover"
              URLParams={true}
              includeNullValues
              // title="Cloud cover"
              range={{
                  start: 0,
                  end: 100,
              }}
            />
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
        </AccordionDetails>
      </Accordion> 
    </Box>
  );
}