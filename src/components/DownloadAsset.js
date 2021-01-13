import React from 'react'
import { Link } from '@material-ui/core'
import { CloudDownloadOutlined } from '@material-ui/icons'

const DownloadAsset = (props) => {

  const canDownload = () => {
    return props.assets.thumbnail ? true : false
  }

  return (
    <>
      {canDownload() &&
        <Link href="#">
          {/* <IconButton> */}
          <CloudDownloadOutlined />
          {/* </IconButton> */}
        </Link>
      }  
    </>
  )
} 

export default DownloadAsset