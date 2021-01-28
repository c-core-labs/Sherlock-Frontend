import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { dataTypeFilter } from '../config'

const useStyles = makeStyles((theme) => ({
  toggleButton: {
    padding: theme.spacing(0.2,0.7),
    fontSize: '0.8em',
    border: 'none',
    backgroundColor: 'white',
    textTransform: 'none',
    
    color: 'black',
    fontWeight: 'normal'
  }
}));

// TODO: Pass switch values in as props.

const ThreeWaySwitch = ({value, onChange}) => {
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    onChange(newValue)
  }
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <div>
          <ToggleButtonGroup
            value={value}
            exclusive={true}
            onChange={handleChange}
            aria-label="text alignment"
          >
          {dataTypeFilter.map(item => {
            return (
              <ToggleButton value={item.value} aria-label={item.label} key={item.id} className={classes.toggleButton}>
                {item.label}
              </ToggleButton>
            )
          })}
            {/* <ToggleButton value="all" aria-label="Both Raster & Vector" className={classes.toggleButton}>
              All
            </ToggleButton>
            <ToggleButton  value="raster" aria-label="raster" className={classes.toggleButton}>
              Raster
            </ToggleButton>
            <ToggleButton  value="vector" aria-label="Vector" className={classes.toggleButton}>
              Vector
            </ToggleButton>  */}
          </ToggleButtonGroup>
        </div>
      </Grid>
    </Grid>
  );
}

export default ThreeWaySwitch