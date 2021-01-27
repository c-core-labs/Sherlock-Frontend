import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { getDataType } from '../redux/filterSelector'
import dataTypeDuck from '../redux/dataTypeDuck'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  toggleContainer: {
    // margin: theme.spacing(0.5),
  },
  toggleButton: {
    '&$selected': {
        backgroundColor: 'blue',
        color: 'white'
    },
    padding: theme.spacing(0.2,0.7),
    fontSize: '0.8em',
    border: 'none',
    backgroundColor: 'white',
    textTransform: 'none',
    
    color: 'black',
    fontWeight: 'normal'
  }
}));

export default function ToggleButtonNotEmpty() {
  const dispatch = useDispatch()
  const dataType = useSelector(getDataType)

  const handleChange = (event, newFormat) => {
    dispatch(dataTypeDuck.actions.setDataType(newFormat))
  }

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup
            value={dataType.dataType}
            exclusive={true}
            onChange={handleChange}
            aria-label="text alignment"
          >          
            <ToggleButton value="all" aria-label="Both Raster & Vector" className={classes.toggleButton}>
              All
            </ToggleButton>
            <ToggleButton  value="raster" aria-label="raster" className={classes.toggleButton}>
              Raster
            </ToggleButton>
            <ToggleButton  value="vector" aria-label="Vector" className={classes.toggleButton}>
              Vector
            </ToggleButton> 
          </ToggleButtonGroup>
        </div>
      </Grid>
    </Grid>
  );
}
