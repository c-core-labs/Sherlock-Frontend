import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import SwitchySwitch from './SwitchySwitch'
import { Grid, Box } from '@material-ui/core';
import {defaultFilters} from '../config'
import { useSelector } from 'react-redux'
import { getFilters } from '../redux/filterSelector'
import blue from '@material-ui/core/colors/blue'
// TODO: Convert this into a generic modal component with title, content, and action slots.

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

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
  },

}))

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: '600px'
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

export default function CustomizedDialogs() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const filters = useSelector(getFilters)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <button className={classes.buttonStyle} onClick={handleClickOpen}>
        Data Filtering
      </button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Additional Filters
        </DialogTitle>
        <DialogContent dividers>
          <Typography className={classes.title} variant="h7">Data Types:</Typography>          
          {defaultFilters.map(item => {
            return (
              <Grid container className={classes.itemRow}>
                <Box item className={classes.labelItem}>
                  <Typography>{item.title}</Typography>
                  <Typography className={classes.subheading}>{item.subtitle}</Typography>
                </Box>
                <Box item className={classes.switchItem}>
                  <SwitchySwitch name={item.ext} checked={filters[item.ext]}/>
                </Box>
              </Grid>
            )
          })}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}