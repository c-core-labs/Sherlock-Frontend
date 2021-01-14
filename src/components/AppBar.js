
import { Grid } from '@material-ui/core'
import { Avatar, Menu, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { themeVariables } from '../theme'
import React from 'react'

import api from '../api'


const useStyles = makeStyles((theme) => ({
  resultsHeaderBar: {
    backgroundColor: '#fff',
    width: '100%',
    height: themeVariables.headerHeight,
    display: 'flex',
    flexWrap: 'no-wrap',
    flexDirection: "row",
    justify: "flex-start",
    alignContent: "stretch",
    alignItems: "center",
    padding: '0px 20px'
  },
  coreLogo: {
    flexGrow: 1,
    padding: '0px 15px'
  },
  resultsHeaderAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  }
}))


const AppBar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogin = () => {
    api.logInGetToken().then(response => {
      console.log(response.data)
    })
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles()

  return (
    <>
      <Grid container item className={classes.resultsHeaderBar}>
        <Grid item className={classes.coreLogo}>
          <img src="c-core-labs-logo.png" alt="C-Core Labs Logo" />
        </Grid>
        <Grid item>
          <Avatar className={classes.resultsHeaderAvatar} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>

          </Avatar>
        </Grid>
      </Grid>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogin}>Login</MenuItem>
      </Menu>
    </>
  )

}

export default AppBar