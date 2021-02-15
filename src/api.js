import { apiUrl } from './config'
import React from 'react'
import authSelector from './redux/authSelector'
import { useSelector } from 'react-redux'


const api = {

  logInGetToken(username = '', password = '') {
    return fetch(
      `${apiUrl}/login`,
      {
        method:'POST',
        body: JSON.stringify({ username, password })
      }
    )
  },

  // This is not an api endpoint, but a rendered page
  // itemPreview (collectionId, itemId) {
  //   return fetch(`${apiUrl}/collections/${collectionId}/${itemId}`, { headers: new Headers()})
  // }
}

export default api