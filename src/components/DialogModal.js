import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

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

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ): null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: '600px'
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

export default function CustomizedDialogs({
  anchor,
  buttonStyle,
  buttonLabel,
  dialogTitle,
  children,
  actions,
  isOpen,
  closeButtonTitle
}) {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    isOpen = true
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  React.useEffect(() => {
    handleClose() 
  }, [isOpen])

  return (
    <div>
      <Link href="#" onClick={handleClickOpen}>
        {anchor
          ? anchor
          : <button className={buttonStyle} onClick={handleClickOpen}>{buttonLabel}</button>
        }
      </Link>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {dialogTitle}
        </DialogTitle>
        <DialogContent dividers>
          {children}
        </DialogContent>
        {actions &&
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              {closeButtonTitle}
            </Button>
          </DialogActions>  
        }
      </Dialog>
    </div>
  );
}