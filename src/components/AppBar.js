
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { themeVariables } from '../theme'
import React from 'react'

import HeaderAvatarContainer from '../containers/HeaderAvatarContainer'

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
  }
}))

const AppBar = () => {
  const classes = useStyles()
  return (
    <>
      <Grid container item className={classes.resultsHeaderBar}>
        <Grid item className={classes.coreLogo}>
          <img src="c-core-labs-logo.png" alt="C-Core Labs Logo" />
        </Grid>
        <Grid item>
          <HeaderAvatarContainer/>
        </Grid>
      </Grid>
    </>
  )
}

export default AppBar