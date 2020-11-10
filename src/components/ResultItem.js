import { Card, CardContent, makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  }
}))

const ResultItem = (props) => {
  const classes = useStyles()
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.data.properties.title}
        subheader=""
        
      />
      <CardContent>
      </CardContent>
    </Card>
  )
}
export default ResultItem