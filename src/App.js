// React / Redux
import { useState } from 'react';
import defaultStore from './redux/store'
import { Provider } from 'react-redux'
import clsx from 'clsx'

// Appbase.io ES
import { ReactiveBase, DataSearch, DateRange } from '@appbaseio/reactivesearch';
import { es_url, es_key, es_index, es_type } from './config'

// Components
import ReactiveMapContainer from './containers/ReactiveMapContainer'
import Results from './components/Results'

// Style /  MUI
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Hidden, Typography} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { pink } from '@material-ui/core/colors';
import DateRangeIcon from '@material-ui/icons/DateRange';
import themeVars from './theme'

// TODO: Move to theme file
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    // height: `calc(var(--vh, 1vh) * 100)`
  },
  // Base Styles
  flexMiddle: {
    display: 'flex',
    alignItems: 'middle',
    flexDirection: 'row'
  },
  xSmallPadding: {
    padding: themeVars.xSmallPadding,
  },
  xSmallIcon: {
    fontSize: themeVars.textIconSize,
    color: themeVars.primaryIconColour,
    marginRight: '5px'
  },
  mapHeaderContainer: {
    width: 'calc(100vw - 670px)',
    position: 'absolute',
    // height: '70px',
    zIndex: '1000',
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: themeVars.boxBg,
    borderRadius: themeVars.borderRadius
  },
  /** STAC Search Container */
  mapHeaderSearchContainer: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px'
  },
  mapWindow: {
    width: 'auto',
    flexGrow: 1,
    height: 'calc(100vh)',
    order: 2,
    // TODO: Likely remove, no map on small screen size.
    [theme.breakpoints.up('sm')]: {
      order: 1,
    },
    maxWidth: window.innerWidth,
    maxheight: window.innerHeight
  },
  resultsWindow: {
    width: '650px',
    maxWidth: '100%',
    backgroundColor: '#F9F9F9',
    height: '100vh',
    overflow: 'Hidden',
    maxHeight: '100vh',
    order: 1,
    // TODO: Likely remove, no map on small screen size.
    [theme.breakpoints.up('sm')]: {
      order: 2,
    }
  },
  resultsSubWindow: {
    overflow: 'auto',
    height: 'calc(100vh - 100px)'
  },
  avatar: {
    boxShadow: theme.shadows[5],
    top: `calc(100vh - 50px)`,
    left: `calc(100% - 50px)`,
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500]
  },
  resultsAvatar: {
    boxShadow: theme.shadows[5],
    // top: `calc(100vh - 50px)`,
    left: `calc(100% - 50px)`,
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    top: `calc(100vh - 150px)`
  },
  resultsHeaderBar: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100px',
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
  },
  resultsHeaderAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }

}))

function App() {
  const [currentTopics, setTopics] = useState([])

	const toggleTopic = (topic) => {
		const nextState = currentTopics.includes(topic)
			    ? currentTopics.filter(item => item !== topic)
			    : currentTopics.concat(topic);
		setTopics(nextState)
  }

  // setDocHeight()
  const classes = useStyles();
  return (
    <Provider store={defaultStore}>
    <div className={classes.root}>
      <main className={classes.content}>
        <ReactiveBase
          url={es_url}
          app={es_index}
          credentials={es_key}
          type={es_type}
          // theme={theme}
          enableAppbase={true}
        >

        <Grid
          container
          spacing={0}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          alignContent="stretch"
        >
          <Hidden smDown>
            <Grid item className={classes.mapWindow} xs={12} sm>
              <Box className={classes.mapHeaderContainer}>

                <Box className={classes.mapHeaderSearchContainer}>
                  <Box className={ clsx(classes.flexMiddle)}>
                    <DateRangeIcon className={classes.xSmallIcon} />
                    <Typography variant="caption" color="initial">Search term or location</Typography>
                  </Box>
                  <DataSearch
                    componentId="repo"
                    filterLabel="Search"
                    dataField={[
                      'properties.title',
                      'properties.description',
                      'properties.title.raw',
                      'properties.keywords'
                    ]}
                    placeholder="Search STAC"
                    iconPosition="left"
                    autosuggest={true}
                    debounce={300}
                    URLParams
                    // TODO: Create classes for form inputs.
                    className="data-search-container results-container"
                    innerClass={{
                      input: 'search-input',
                    }}
                  />
                </Box>
                <Box className={classes.mapHeaderSearchContainer}>
                  <Box className={ clsx(classes.flexMiddle)}>
                    <DateRangeIcon className={classes.xSmallIcon} />
                    <Typography variant="caption" color="initial">Select a date or date range</Typography>
                  </Box>
                    <DateRange componentId="DateSensor" dataField="timestamp" />
                </Box>
              </Box>
              {/* TODO Merge ReactiveMapContainer and MapContainer */}
              <ReactiveMapContainer />
            </Grid>
          </Hidden>
          <Grid item className={classes.resultsWindow}>
            <Grid container item className={classes.resultsHeaderBar}>
              <Grid item className={classes.coreLogo}>
                <img src="c-core-labs-logo.png" alt="C-Core Labs Logo" />
              </Grid>
              <Grid item>
                <Avatar className={classes.resultsHeaderAvatar}>
                </Avatar>
              </Grid>
            </Grid>
            {/* TODO Move this into SearchContainer */}
            <Grid item className={classes.resultsSubWindow}>
              <Results currentTopics={currentTopics} toggleTopic={toggleTopic} />
            </Grid>
          </Grid>
        </Grid>
        </ReactiveBase>
      </main>
    </div>
    </Provider>
  )
}

export default App;
