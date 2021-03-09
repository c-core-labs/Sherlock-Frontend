import React from 'react'
import { Menu, MenuItem, Link, ListItemIcon, Typography } from '@material-ui/core'
import { CloudDownloadOutlined } from '@material-ui/icons'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

const DownloadAsset = (props) => {
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
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments" onClick={() => {navigator.clipboard.writeText(props.assets[item].href)}}>
            <AssignmentOutlinedIcon fontSize="small" />
          </IconButton>
        </ListItemSecondaryAction>
      </MenuItem>
    )
  })

  return (
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