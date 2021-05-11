import React from 'react';
import Card from './Card';
import image1 from './image1.jpg'
import image2 from './image2.jpg'


function GameGrid() {
    return (
        <div>
           
            <Card SrcImage={image1}/>
            <Card SrcImage={image2}/>
            <Card SrcImage={image1}/>
            <Card SrcImage={image2}/>


        </div>
           
        
    );
}

export default GameGrid;