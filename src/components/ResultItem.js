import { Box, Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CardMedia from '@material-ui/core/CardMedia'

import ItemKeywords from './ItemKeywords'

import '../Appbase.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '8px'
  },
  thumbnail: {
    width: 120
  },
  cardHeader: {
    fontSize: '1em',
    fontWeight: 'bold'
  },
  summary: {
    height: '4em',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  keywordContainer: {
    height: '90px',
    overflow: 'hidden'

  }

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
        classes={{
          title: classes.cardHeader
        }}        
      />
      <CardMedia
        className={classes.thumbnail}
        image="./blank.png"
        title=""
      />
      <CardContent>
        <Box className={classes.summary}>
          <Typography variant="body2" color="initial" >{data.properties.description}</Typography>
        </Box>
        <Box className={classes.keywordContainer}>
          <ItemKeywords data={data.properties.keywords} key={data.id}/>
        </Box>
      </CardContent>
    </Card>
  )
}
export default ResultItem