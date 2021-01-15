import React from 'react'
import { Menu, MenuItem, Link, ListItemIcon, Typography } from '@material-ui/core'
import { CloudDownloadOutlined } from '@material-ui/icons'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const DownloadAsset = (props) => {

  const canDownload = () => {
    return props.assets
  }
  
  if (!props.assets) {
    return
  }

  const items = Object.keys(props.assets)
  const itemList = items.map( (item, index) => {
    const title = props.assets[item].title ? props.assets[item].title : props.assets[item].description
    return (
      title &&
      <MenuItem component={Link} href={props.assets[item].href} target="_blank" key={index}>
        <ListItemIcon>
          <CloudDownloadOutlined />
        </ListItemIcon>
        <Typography>{title}</Typography>
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