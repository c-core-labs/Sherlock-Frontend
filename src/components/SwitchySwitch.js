import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core'
import filterDuck from '../redux/filterDuck'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: 'none',
    backgroundColor: theme.palette.text.secondary,
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))

export default function SwitchySwitch(props) {
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleChange = () => {
    dispatch(filterDuck.actions.setFilter(props.name))
  }
  
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      // checked={state.filters[props.name]}
      onChange={handleChange} 
      name={props.name}
      checked={props.checked}
    />
  )
}