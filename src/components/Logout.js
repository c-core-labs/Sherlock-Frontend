import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp"
import IconButton from '@material-ui/core/IconButton'
import { Box } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(3)
  },
  logoutIcon: {
    fontSize: '3em'
  }
}))

const Logout = (props) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h5">Sign Out</Typography>
      <IconButton onClick={props.handleLogout}>
        <ExitToAppSharpIcon className={classes.logoutIcon} />
      </IconButton>
    </Box>
  )
}

export default Logout