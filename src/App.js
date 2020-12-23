// React / Redux
import { useState } from 'react';
import defaultStore from './redux/store'
import { Provider } from 'react-redux'
import clsx from 'clsx'


// Appbase.io ES
import { ReactiveBase, DateRange } from '@appbaseio/reactivesearch';
import { es_url, es_key, es_index, es_type } from './config'

// Components
import ReactiveMapContainer from './containers/ReactiveMapContainer'
import ResultsContainer from './containers/ResultsContainer'
import FilterContainer from './containers/FilterContainer'
import ReactiveSearchContainer from './containers/ReactiveSearchContainer'

// Style /  MUI
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Hidden, Typography} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { themeVariables } from './theme'
import './Appbase.css'


// TODO: Move to theme file
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
  },
  // Base Styles
  flexMiddle: {
    display: 'flex',
    alignItems: 'middle',
    flexDirection: 'row'
  },
  xSmallPadding: {
    padding: themeVariables.xSmallPadding,
  },
  xSmallIcon: {
    fontSize: themeVariables.textIconSize,
    color: themeVariables.primaryIconColour,
    marginRight: '5px'
  },
  mapHeaderContainer: {
    width: 'calc(100vw - 666px)',
    position: 'absolute',
    // height: '70px',
    zIndex: '1000',
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: themeVariables.boxBg,
    borderRadius: themeVariables.borderRadius
  },
  /** STAC Search Container */
  mapHeaderSearchContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 20px 12px 20px'
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
    height: `calc(100vh - ${themeVariables.headerHeight})`
  },
  resultsHeaderBar: {
    backgroundColor: '#fff',
    width: '100%',
    height: themeVariables.headerHeight,
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
    width: theme.spacing(6),
    height: theme.spacing(6),
  }

}))

const App = () => {
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
                  <ReactiveSearchContainer />
                </Box>
                <Box className={classes.mapHeaderSearchContainer}>
                  <Box className={ clsx(classes.flexMiddle)}>
                    <DateRangeIcon className={classes.xSmallIcon} />
                    <Typography variant="caption" color="initial">Select a date or date range</Typography>
                  </Box>
                    <DateRange 
                      componentId="DateFilter" 
                      dataField="datetime" 
                      showFilter={true} 
                      showClear={true} 
                      URLParams={true} 
                      queryFormat="date_time_no_millis" 
                      className="es-form" 
                      />
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
              <FilterContainer />
              <ResultsContainer currentTopics={currentTopics} toggleTopic={toggleTopic} />
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
