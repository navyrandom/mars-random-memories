import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonMorpion from './ButtonMorpion';
import MagicButton from './MagicButton';
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
  background:{
    backgroundColor:"white"
  }
}));

const pictures = [
  {
    name: 'img4',
    URL: '/img/image4.jpg',
  },
  {
    name: 'img3',
    URL: '/img/image3.jpg',
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
    name: 'img3',
    URL: '/img/image3.jpg',
  },
  {
    name: 'img4',
    URL: '/img/image4.jpg',
  },
  {
    name: 'img5',
    URL: '/img/image5.jpg',
  },
  {
    name: 'img2',
    URL: '/img/image2.jpg',
  },
  {
    name: 'img7',
    URL: '/img/image7.jpeg',
  },
  {
    name: 'img5',
    URL: '/img/image5.jpg',
  },
  {
    name: 'img7',
    URL: '/img/image7.jpeg',
  },
  {
    name: 'img1',
    URL: '/img/image1.jpg',
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
    <>
    <Grid
      container
      spacing={2}
      justify="center"
      style={{
        height: 200,
        width:800,
        paddingTop: '5%',
        paddingBottom: '5%',
        marginLeft:'500px',
        maxWidth:"100%",
        marginTop:"80px", 
      }}
    >
      {pictures.map((picture, index) => (
        <Grid item xs={3} style={{ display:'flex',
        justifyContent:'center', 
        backgroundColor:"rgb(255, 255, 255,0.7)",
        maxWidth:"100%",
        
         }} key={index}>
          <MoveCard
          
            {...picture}
            handleClick={handleClick}
            // handleClick2={handleClick2}
          />
        </Grid>
      ))}
      
    </Grid>
    
    <ButtonMorpion />
    <MagicButton />
    </>
  );
}