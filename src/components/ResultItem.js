import { useSelector, useDispatch } from 'react-redux'

// MUI
import { Box, Card, CardContent, makeStyles, Typography, Link } from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MapOutlined from '@material-ui/icons/MapOutlined'
import CardMedia from '@material-ui/core/CardMedia'

// Components
import ItemKeywords from './ItemKeywords'
import MetaTag from './MetaTag'
import mapDuck from '../redux/mapDuck'
import { getSelectedItem } from '../redux/mapSelector'
import useScroll from '../hooks/useScroll'

import '../Appbase.css'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '8px'
  },
  highlight: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'blue'
  },
  thumbnail: {
    width: 120
  },
  cardHeader: {
    fontSize: '1em',
    fontWeight: 'bold'
  },
  summary: {
    maxHeight: '4em',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  keywordContainer: {
    maxHeight: '90px',
    overflow: 'hidden'
  },
  collectionTitle: {
    fontSize: '0.5em',

  },
  cardContent: {
    height: 'auto'
  },
  mapHighlightIcon: {
    fontSize: '0.9em'
  },
  tagContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    margin: '4px',
    zIndex: 1000,
    alignContent: 'flex-start',
  }
}))

const ResultItem = (props) => {
  const classes = useStyles()
  const [ref, executeScroll] = useScroll()
  const selectedItem = useSelector(getSelectedItem)
  const dispatch = useDispatch()

  // TODO: This needs moving to a MetaTag Container, other tags also needed just an example.
  const metaTypes = [
    { icon: 'cloud', type:"icon", value: props.data.properties['eo:cloud_cover'] },
    { icon: 'gsd', type:"icon", value: props.data.properties['gsd'] }
  ]

  const metaTags = metaTypes.filter( item => typeof(item.value) != "undefined" )
  const title = () => props.data.properties.title ? props.data.properties.title : props.data.collection
  const description = () => props.data.properties.description ? props.data.properties.description : props.data.properties.datetime
  
  const highlightItem = selectedItem && selectedItem.id === props.data.id
  
  const handleSelect = () => {
    dispatch(mapDuck.actions.setHighlightedMapItem(props.data))
  }

  if (highlightItem && ref && ref.current) {
    executeScroll()
  }

  return (
    <Card
      ref={ref}
      id={props.data.id}
      className={clsx({
        [classes.root] : true,
        [classes.highlight] : highlightItem
      })}
    >
      <CardHeader
        action={
          <Link href="#" onClick={handleSelect}><IconButton aria-label="">
            <MapOutlined className={classes.mapHighlightIcon} />
            </IconButton>
          </Link>
        }
        title={title()}
        // subheader={highlightItem && "Selected"}
        classes={{
          title: classes.cardHeader
        }}
      />
      <CardMedia
        className={classes.thumbnail}
        image="./blank.png"
        title=""
      />
      <CardContent className={classes.cardContent}>
        <Box className={classes.summary}>
          <Typography variant="body2" color="initial">{description()}</Typography>
        </Box>
        <Box className={classes.keywordContainer}>
          <ItemKeywords data={props.data.properties.keywords} key={props.data.id} />
        </Box>
      </CardContent>
      <div className={classes.tagContainer}>
        {metaTags.map((item, index) => {
          return <MetaTag key={index} label={item.icon} value={item.value} />
        })}
      </div>
    </Card>
  )
}
export default ResultItem
