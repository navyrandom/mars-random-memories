import { Grid, GridList, makeStyles } from "@material-ui/core";
import React from "react";
import Card from "./Card";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: "400px",
  },
  gridList: {
    width: 300,
    height: 400,
  },
}));

export default function GameGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={60} className={classes.gridList}>
        <Grid container>
          <Grid item>
            <Card SrcImage={image1} alt="avion" />
          </Grid>
          <Grid item>
            <Card SrcImage={image2} alt="avion" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <Card SrcImage={image1} alt="boy" />
          </Grid>
          <Grid item>
            <Card SrcImage={image2} alt="boy" />
          </Grid>
        </Grid>
      </GridList>
    </div>
  );
}
