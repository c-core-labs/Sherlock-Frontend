import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { pink } from '@material-ui/core/colors';
import Map from '../components/Map'

// Icons
import MapIcon from '@material-ui/icons/Map';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';


// const setDocHeight = () => {
//   document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
// }
// window.addEventListener('resize', setDocHeight)
// window.addEventListener('orientationchange', setDocHeight)


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
  searchToolbar: {

  },
  resultsToolbar: {

  },
  mapWindow: {
    width: 'auto',
    flexGrow: 1,
    height: '100vh',
    // height: `calc(var(--vh, 1vh) * 100)`,
    order: 2,
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
    height: window.innerHeight,
    maxHeight: 'calc(100vh)',
    height: '100vh',
    // height: `calc(var(--vh, 1vh) * 100)`,
    overflow: 'auto',
    order: 1,
    [theme.breakpoints.up('sm')]: {
      order: 2, 
    },
    // maxWidth: window.innerWidth
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
  // setDocHeight()
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main className={classes.content}>
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
              {/* map component */}
                <Map />
              {/* <Hidden smUp>
                <Avatar className={classes.avatar}>
                  <VerticalAlignTopIcon/>
                </Avatar>
              </Hidden> */}
            </Grid>
          </Hidden>
          <Grid item className={classes.resultsWindow}>
            <Grid container item className={classes.resultsHeaderBar}>
              <Grid item className={classes.coreLogo}>
                {/* Logo */}
                <img src="c-core-labs-logo.png" alt="C-Core Labs Logo" />
              </Grid>
              <Grid item>
                <Avatar className={classes.resultsHeaderAvatar}>
                </Avatar>
              </Grid>
            </Grid>
            {/* <Hidden smUp>
              <Avatar className={classes.resultsAvatar}>
                <MapIcon/>
              </Avatar>
            </Hidden> */}

          </Grid>
        </Grid>
      </main>
      
    </div>
  )
}

export default App;
