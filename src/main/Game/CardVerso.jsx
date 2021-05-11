import { makeStyles } from '@material-ui/core';
import React from 'react';
import Verso from './Verso.png'

const useStyle = makeStyles({
    backgound:{
        backgroundColor:"white",
        width:"120px",
        padding:"3px",
        border: "double",
        borderRadius:"9px",
        height: "120px",
    },
    image:{
        maxWidth: "100%",
        display:"flex",
        justifyContent:"center",
    }
    
    })
function CardVerso() {
    const classes = useStyle()
    return (
        
            <div className={classes.backgound}>
        
        <img src={Verso} className={classes.image}/>
        
    </div>
       
    );
}

export default CardVerso;