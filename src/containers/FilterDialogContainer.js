import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SwitchySwitch from '../components/SwitchySwitch'
import { Grid, Box } from '@material-ui/core';
import { defaultFilters } from '../config'
import { useSelector } from 'react-redux'
import { getFilters } from '../redux/filterSelector'
import blue from '@material-ui/core/colors/blue'
import DialogModal from '../components/DialogModal'

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: 20,
    fontWeight: 'bold'
  },
  subheading: {
    fontStyle: 'italic',
    color: 'gray',
    fontSize: '0.8em'
  },
  itemRow: {
    direction: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginBottom: 10
  },
  labelItem: {
    width: '75%'
  },
  switchItem: {

  },
  buttonStyle: {
    padding: '5px 7px',
    borderStyle: 'solid',
    borderRadius: '4px',
    borderColor: 'white',
    borderWidth: '0px',
    backgroundColor: blue[500],
    boxShadow: '5px',
    color: 'white'
  }
}))

const FilterContent = ({classes, filters}) => {
  return (
    defaultFilters.map((item, index) => {
      return (
        <Grid container className={classes.itemRow} key={index}>
          <Box item className={classes.labelItem}>
            <Typography>{item.title}</Typography>
            <Typography className={classes.subheading}>{item.subtitle}</Typography>
          </Box>
          <Box item className={classes.switchItem}>
            <SwitchySwitch name={item.ext} checked={filters[item.ext]}/>
          </Box>
        </Grid>
      )
    })
  )
}

const CustomizedDialogs = () => {
  const classes = useStyles()
  const filters = useSelector(getFilters)

  return (
      <DialogModal
        buttonStyle={classes.buttonStyle}
        buttonLabel="Data Filtering"
        dialogTitle="I am interested in:"
        // content={filterContent({classes, filters})}
        closeButtonTitle="close" 
      >
        <FilterContent classes={classes} filters={filters}/>
      </DialogModal>
  )
}
export default CustomizedDialogs