import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import GameGrid from "./Game/GameGrid";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  dial: {
    color: "white",
    textAlign: "justify",
    margin: "100px 50px 0px 50px",
  },
  button: {
    color: "white",
    display: "flex",
    flex: "column",
    alignItems: "center",
    margin: "auto",
    padding: "auto",
    fontSize: "40px",
    textAlign: "center",
    backgroundColor: "#f7a440",
    fontFamily: "Fascinate",
<<<<<<< HEAD
    marginTop: "50px",
    marginBottom: "0"
=======
>>>>>>> dev
  },
}));

function Dialog() {
  const classes = useStyles();
  const [showGame, setShowGame] = useState(false);
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    setShowGame(true);
    setDisplay(!display);
  };

  return (
    <div>
<<<<<<< HEAD
      {/* { display && (  <div className={classes.dial}>
      <p>Bonjour Jenny</p>
=======
      {display && (
        <div className={classes.dial}>
          {/* <p>Bonjour Jenny</p>
>>>>>>> dev
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
<<<<<<< HEAD
      </p>
      
       
      </div>)} */}
      <Link to="/start" style={{ textDecoration: "none" }}>
      <button onClick={handleClick} className={classes.button}>
        Start Game
      </button>
      {showGame ? <GameGrid /> : null}
      </Link>
=======
      </p> */}

          <button onClick={handleClick} className={classes.button}>
            Start Game
          </button>
        </div>
      )}

      {showGame ? <GameGrid /> : null}
>>>>>>> dev
    </div>
  );
}

export default Dialog;
