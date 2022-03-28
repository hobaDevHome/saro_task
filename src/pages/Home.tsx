import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import classes from "./Home.module.css";
import AppBarComponent from "../components/AppBarComponent";

const Home = () => {
  return (
    <Container
      sx={{ marginTop: 5, flexDirection: "column" }}
      className={classes.outerContainer}
    >
      <Grid container className={classes.headerContainer} marginBottom={2}>
        <Grid item xs={12}>
          <AppBarComponent />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.mainContainer}>
        <Grid item xs={2} className={classes.sideContainer}>
          side
        </Grid>
        <Grid item xs={10} className={classes.contentContainer}>
          main
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
