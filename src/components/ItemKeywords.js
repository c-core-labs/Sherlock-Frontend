import { Box, makeStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip'
import { secondary, themeVariables } from '../theme'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0),
    // margin: 0,
  },
  chip: {
    margin: '2px',
    backgroundColor: secondary,
    radius: themeVariables.borderRadius
  }
}));

const ItemKeywords = (props) => {
  const classes = useStyles()
  return (
    <Box component="ul" className={classes.root}>
    {props.data.map((keyword, index) => {
      return (
        <li key={index}>
        <Chip
          className={classes.chip}
          label={keyword}
          clickable
        />
        </li>

      )}
    )}
    </Box>
  )
}

export default ItemKeywords
