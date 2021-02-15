import { apiUrl } from './config'


const api = {

  logInGetToken(username = '', password = '') {
    return fetch(
      `${apiUrl}/login`,
      {
        method:'POST',
        body: JSON.stringify({ username, password })
      }
    )
  }
}

export default api