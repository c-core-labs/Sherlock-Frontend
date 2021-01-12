import React, { useState } from 'react'
import { Link, IconButton } from '@material-ui/core'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';

const ThumbnailPreview = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  const hasThumbnail = () => {
    return props.assets.thumbnail ? true : false
  }

  return (
    <div>
      {hasThumbnail() &&
        <Link onClick={() => setIsOpen(true)}>
          <IconButton>
            <ImageSearchOutlinedIcon />
          </IconButton>
        </Link>
      }  

      {hasThumbnail && isOpen && 
      <>
        <Lightbox
          mainSrc={props.assets.thumbnail.href}
          onCloseRequest={() => setIsOpen(false)}
        />

      </>
    }</div>
  )
} 

export default ThumbnailPreview