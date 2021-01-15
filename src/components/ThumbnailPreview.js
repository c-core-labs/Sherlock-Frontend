import React, { useState } from 'react'
import { Link } from '@material-ui/core'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';

const ThumbnailPreview = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  const values = Object.values(props.assets)
  const hasRole = values.find(asset => asset.roles && asset.roles.includes('thumbnail'))

  return (
    <>
      {hasRole &&
        <Link href="#" onClick={() => setIsOpen(true)}>
          {/* <IconButton> */}
            <ImageSearchOutlinedIcon />
          {/* </IconButton> */}
        </Link>
      }  

      {hasRole && isOpen && 
      <>
        <Lightbox
          mainSrc={hasRole.href}
          onCloseRequest={() => setIsOpen(false)}
        />
      </>
    }</>
  )
} 

export default ThumbnailPreview