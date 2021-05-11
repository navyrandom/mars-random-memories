import { makeStyles } from '@material-ui/core';
import React from 'react';

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
function Card({SrcImage}) {
    const classes = useStyle()
    return (
        <div className={classes.backgound}>
        
            <img src={SrcImage} className={classes.image} alt="" />
            
        </div>
    );
}

export default Card;