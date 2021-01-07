import React from 'react'
import { makeStyles, Grid, Box} from '@material-ui/core';
import CloudCoverFilter from '../components/CloudCoverFilter'
import PlatformFilter from '../components/PlatformFilter'
import FilterPopperContainer from './FilterPopperContainer'
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  },
}))

const FilterContainer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={1}>
      <Grid item>
        <Box>
          <FilterListIcon/>
        </Box>
      </Grid>
      <Grid item>
        <FilterPopperContainer label="Cloud Cover">
          <CloudCoverFilter />
        </FilterPopperContainer>
      </Grid>
      <Grid item>
        <FilterPopperContainer label="Satellite">
          <PlatformFilter />
        </FilterPopperContainer>
      </Grid>
      {/* TODO: Resolution Filter */}
      {/* TODO: Public/Private Data Filter */}
    </Grid>
  );
}
export default FilterContainer