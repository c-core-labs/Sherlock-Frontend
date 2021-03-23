import { Box, makeStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip'
import { secondary, themeVariables } from '../theme'
import keywordDuck from '../redux/keywordDuck'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0)
  },
  chip: {
    margin: '2px',
    backgroundColor: secondary,
    radius: themeVariables.borderRadius
  }
}));

const ItemKeywords = (props) => {
  const dispatch = useDispatch()

  const handleSelect = (keyword) => {
    dispatch(keywordDuck.actions.setKeyword(keyword))
  }

  const classes = useStyles()
  return (
    props.data &&
    <Box component="ul" className={classes.root}>
    {props.data.map((keyword, index) => {
      return (
        <li key={index}>
          <Chip
            className={classes.chip}
            label={keyword}
            size='small'
            clickable={true}
            onClick={() => handleSelect(keyword)}
          />
        </li>
      )}
    )}
    </Box>
  )
}

export default ItemKeywords
