import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(3)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  }
}))

function SignIn ({
  handleLogin = console.log,
  RouterLink,
  email,
  setEmail = console.log,
  password,
  setPassword = console.log,
  error,
  fetching,
  includeResetPassword = false,
  includeSignUp = false,
  isAuthenicated,
}) {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <div className={classes.wrapper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {fetching && (
            <CircularProgress size={55} className={classes.fabProgress} />
          )}
        </div>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        {error && (
          <Typography component='h1' variant='subtitle1'>
            {error}
          </Typography>
        )}
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete="email"
            autoFocus
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplpete="current-password"
            onChange={event => setPassword(event.target.value)}
            value={undefined}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            fullWidth
            id='sign-in-button'
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Grid container>
            {includeResetPassword && (
              <Grid item xs>
                <Link
                  to='/resetpassword'
                  variant='body2'
                  component={RouterLink}
                >
                  Forgot password?
                </Link>
              </Grid>
            )}
            {includeSignUp && (
              <Grid item>
                <Link to='/signup' variant='body2' component={RouterLink}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            )}
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default SignIn