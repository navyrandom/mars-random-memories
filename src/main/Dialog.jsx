import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import GameGrid from "./Game/GameGrid";

const useStyles = makeStyles(() => ({
  dial: {
    color: "white",
    textAlign: "justify",
    margin: "100px 50px 0px 50px",
  },
}));

function Dialog() {
  const classes = useStyles();
  const [showGame, setShowGame] = useState(false);
  const [display, setDisplay]=useState(true);

  const handleClick = () => {
    setShowGame(true);
    setDisplay(!display);
  };

  return (
    <div>
   { display && (  <div className={classes.dial}>
      <p>Bonjour Jenny</p>
      <p>Hello Percy</p>
      <p>Alors quoi de neuf</p>
      <p>Rien comme d'habitude je prends des photos pour la Nasa. Et toi?</p>
      <p>Je viens de découvrir un super jeu. Tu veux essayer?</p>
      <p>Pourquoi pas wall-e est encore occuper à ramasser des satellites.</p>
      <p>
        Ok super tu vas voir c'est trés simple même Quentin Bardenet a réussi à
        comprendre. Tu as une grille de carte et tu dois réussir à retourner les
        deux cartes similaires l'une à la suite de l'autre sinon elles se
        remettent dans leur état initial.L'objectif est de retourner toutes les
        cartes le plus rapidement possible.Si tu es prêt appuie sur le bouton!
        Et bonne chance
      </p>
      
        <button onClick={handleClick}>Démarrer le jeu</button>
      </div>)}
        
        {showGame ? <GameGrid /> : null}
   
    </div>
  );
}

export default Dialog;