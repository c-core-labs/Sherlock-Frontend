import React from 'react'
import { makeStyles, Box, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CloudCoverFilter from '../components/CloudCoverFilter'
import PlatformFilter from './PlatformFilterContainer'


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
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
            <CloudCoverFilter />
            <PlatformFilter />
          </Grid>
        </AccordionDetails>
      </Accordion> 
    </Box>
  );
}