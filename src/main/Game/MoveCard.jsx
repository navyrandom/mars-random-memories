import { Button } from '@material-ui/core';
import React from 'react';
import Card from './Card';
import CardVerso from './CardVerso';
function MoveCard({URL}) {
    const [display, setDisplay] = React.useState(false)
    const [verso, setVerso] = React.useState(true)
    
    const handleclick=()=>{
setDisplay(!display)
setVerso(!verso)
    }
    return (
        <div>
            {display &&( <Button onClick={handleclick}>
             <Card URL={URL} />
                </Button>)}
               { verso &&( <Button onClick={handleclick}>
                <CardVerso />
                   </Button>)}
        </div>
    );
}

export default MoveCard;