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
    maxHeight:"90%",
    display:"flex",
    justifyContent:"center",
}

})
function Card({URL, handleClick}) {
    const classes = useStyle()
    return (
        
        <div className={classes.backgound} onClick={handleClick} >
            {/* <img className={classes.image}/> */}
            <img src={URL} className={classes.image} alt=""/>
            

        </div>
    );
}

export default Card;