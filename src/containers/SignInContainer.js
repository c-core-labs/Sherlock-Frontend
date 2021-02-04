import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import api from '../api'
import SignIn from '../components/SignIn'
import authDuck from '../redux/authDuck'
import Logout from '../components/Logout'

function SignInContainer ({
  closeModal = console.log,
  isAuthenticated
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(undefined)
  const dispatch = useDispatch()

  function handleLogin (event) {
    if (email === '') {
      setError('Enter your email')
    } else if (password === '') {
      setError('Enter your password')
    } else {
      setError(undefined)
      setFetching(true)

      api.logInGetToken()
      .then(response => response.json())
      .then(data => {
        dispatch(authDuck.actions.loginSuccess(data))
        setFetching(false)
        closeModal()
    }).catch(error => {
      setError('Could not authenticate')
      setFetching(false)
      dispatch(authDuck.actions.loginFailure())
    })
    }
  }

  function handleLogout () {
    dispatch(authDuck.actions.logout())
    closeModal()
  }

  if (!isAuthenticated) {
    return (
      <SignIn
      handleLogin={handleLogin}
      email={email}
      password={password}
      error={error}
      fetching={fetching}
      setEmail={setEmail}
      setPassword={setPassword}
      isAuthenticated={isAuthenticated}
    />
    )
  } else {
    return (
      <Logout handleLogout={handleLogout} />
    )
  }
}

export default SignInContainer