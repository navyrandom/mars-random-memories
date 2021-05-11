import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Card from './Card';
import MoveCard from './MoveCard';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: '400px',
  },
  gridList: {
    width: 300,
    height: 400,
  },
}));

const pictures = [
  {
    name: 'img1',
    URL: '/img/image1.jpg',
  },
  {
    name: 'img2',
    URL: '/img/image2.jpg',
  },
  {
    name: 'img1',
    URL: '/img/image1.jpg',
  },
  {
    name: 'img2',
    URL: '/img/image2.jpg',
  },
];

export default function GameGrid() {
  const classes = useStyles();

  const [imageClick, setImageClick] = useState();
  
  const arrayImagesClick = [];

  const handleClick = (e) => {
    setImageClick(e.target.src);
    arrayImagesClick.push(imageClick);
    console.log(arrayImagesClick);
  };

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      style={{
        height: 200,
        paddingTop: '5%',
        paddingBottom: '5%',
      }}
    >
      {pictures.map((picture, index) => (
        <Grid item xs={3} style={{ border: '1px solid black' }} key={index}>
          <MoveCard
          
            {...picture}
            handleClick={handleClick}
            // handleClick2={handleClick2}
          />
        </Grid>
      ))}
    </Grid>
  );
}