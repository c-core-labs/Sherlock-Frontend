import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import React from 'react'

const HeaderAvatar = (props) => {

  const useStyles = makeStyles((theme) => ({
    resultsHeaderAvatar: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      backgroundColor: () => {
        return props.isAuthenticated ? deepOrange[500] : null
      }  
    }
  }))

  const classes = useStyles()

  return (
    <>
      <Avatar 
        className={classes.resultsHeaderAvatar} 
        aria-controls="simple-menu" 
      >
        {props.letter}
      </Avatar>
    </>
  )

}

export default HeaderAvatar