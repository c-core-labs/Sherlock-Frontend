import React from 'react'
import { RangeSlider } from '@appbaseio/reactivesearch';
import { makeStyles, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { typography } from 'material-ui/styles';

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
            componentId="Cloud"
            dataField="cloudcover"
            URLParams={true}
            includeNullValues
            // title="Cloud cover"
            range={{
                start: 0,
                end: 100,
            }}
          />
        </Box>
        </AccordionDetails>
      </Accordion> 
    </Box>
  );
}