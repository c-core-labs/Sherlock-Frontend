import React from 'react'
import { Link, ListItemIcon } from '@material-ui/core'
import { CloudDownloadOutlined } from '@material-ui/icons'
import { Menu, MenuItem } from '@material-ui/core'
import Typography from '@material-ui/core/typography'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const DownloadAsset = (props) => {

  const canDownload = () => {
    return props.assets ? true : false
  }
  
  if (!props.assets) {
    return
  }

  const items = Object.keys(props.assets)
  const itemList = items.map( item => {
    return (
      props.assets[item].title &&
      <MenuItem component={Link} href={props.assets[item].href} target="_blank">
        <ListItemIcon>
          <CloudDownloadOutlined />
        </ListItemIcon>
        <Typography>{props.assets[item].title}</Typography>
      </MenuItem>
    )
  })

  return (
    canDownload && 
      <PopupState variant="popover" popupId="result-item-assets">
        {(popupState) => (
          <>
          <Link {...bindTrigger(popupState)}>
            <CloudDownloadOutlined />
          </Link>
          <Menu {...bindMenu(popupState)}>{itemList}</Menu>
          </>
        )}
      </PopupState>
  )
} 

export default DownloadAsset