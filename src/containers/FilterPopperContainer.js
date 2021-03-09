import React, { useState, useRef } from 'react'
import { makeStyles, Paper } from '@material-ui/core';
import { Fragment } from 'react';
import { usePopper } from 'react-popper';

// TODO: Add popper/button styles to a theme.
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1)
  },
  itemControl: {
    width: '100%'
  },
  cloudFilter: {
    width: '300px',
    padding: '10px',
  },
  buttonStyle: {
    padding: '5px 7px',
    borderStyle: 'solid',
    borderRadius: '4px',
    borderColor: 'white',
    borderWidth: '0px',
    backgroundColor: 'white',
    boxShadow: '5px'
  },
  container: {
    display: 'none',
    position: 'absolute',
    zIndex: 1000
  }
}))

const FilterPopover = ({label, children}) => {
  const classes = useStyles()
  const [showPopper, setShowPopper] = useState(false);
  const buttonRef = useRef(null);
  const popperRef = useRef(null);

  const { attributes } = usePopper(
    buttonRef.current,
    popperRef.current,
    {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 0]
          }
        }
      ]
    }
  );

  return (
    <Fragment>
      <button type="button" ref={buttonRef} className={classes.buttonStyle} onClick={() => setShowPopper(!showPopper) }>
        {label}
      </button>
      <div
        style={{display: showPopper ? 'block' : 'none'}}
        className={classes.container}
        ref={popperRef}
        // style={styles.popper} TODO: check styles for additional alignment properties.
        {...attributes.popper}>
        <Paper className={classes.cloudFilter}>
          {children}
        </Paper>
      </div>
    </Fragment>
  );
}

export default FilterPopover