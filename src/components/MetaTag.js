import { GridOn, Brightness1Outlined, CloudQueue } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const getIcon = (icon) => {
  switch (icon) {
    case 'cloud': 
      return <CloudQueue fontSize='inherit' color='inherit' />
    case 'gsd': 
      return <GridOn fontSize='inherit' color='inherit'/>
    default:
      return <Brightness1Outlined fontSize='inherit' color='inherit'/>
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
    marginBottom: '4px',
    marginLeft: '4px',
    marginRight: '4px',
    zIndex: 1000,
    alignContent: 'flex-start',
    borderWidth: '1px',
    borderRadius: '4px',
    borderStyle: 'solid',
    padding: '2px',
    color: 'gray'

  },
  labelText: {
    fontSize: '0.8em',
    marginLeft: '2px'
  }

}))

const MetaTag = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {getIcon(props.label)}
      <span className={classes.labelText}>{props.value}</span>
    </div>
  )
}

export default MetaTag