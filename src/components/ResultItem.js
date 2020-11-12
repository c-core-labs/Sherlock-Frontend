import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CardMedia  from '@material-ui/core/CardMedia'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  thumbnail: {
    width: 120
  },

}))

const ResultItem = (props) => {
  const classes = useStyles()
  const data = props.data
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.properties.title}
        subheader=""
        
      />
      <CardMedia
        className={classes.thumbnail}
        image=""
        title=""
      />
      <CardContent>
        <Typography variant="p" color="initial">{data.properties.title}</Typography>
      </CardContent>
    </Card>
  )
}
export default ResultItem