import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Game from '../Morpion/Game';

const useStyles = makeStyles(() => ({
  button: {
    color: 'white',
    // display: 'none',
    fontSize: '60px',
    position: 'absolute',
    bottom: '0px',
    // visibility: 'hidden'
    opacity: '0'
  },
}));

function MagicButton() {
  const classes = useStyles();

  const [showCongrats, setShowCongrats] = useState(false);

  const handleClick = () => {
    alert('YOU ARE FUCKING AWESOME LIKE THIS WEBSITE');
    // setShowCongrats(!showCongrats);
  };

  return (
    <button onClick={handleClick} className={classes.button}>
      MAGIC BUTTON
    </button>
  );
}

export default MagicButton;
