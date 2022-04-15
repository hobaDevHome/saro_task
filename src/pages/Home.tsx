import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import style from './Home.module.css';
import AppBarComponent from '../components/AppBarComponent';
import Side from '../components/SideBarComponent';

import Main from './Main';
import MainContainer from './MainContiner';

const Home = () => {
  return (
    <Container
      sx={{ marginTop: 1, flexDirection: 'column' }}
      className={style.outerContainer}
      maxWidth="lg"
    >
      <Grid container className={style.headerContainer} marginBottom={2}>
        <Grid item xs={12}>
          <AppBarComponent />
        </Grid>
      </Grid>
      <Grid container spacing={2} className={style.mainContainer}>
        <Grid item xs={2} className={style.sideContainer}>
          <Side />
        </Grid>
        <Grid item xs={10} className={style.contentContainer}>
          <MainContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
