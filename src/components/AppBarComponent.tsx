import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { Person } from '@mui/icons-material';
import { AddCard } from '@mui/icons-material';
import { ShoppingCart } from '@mui/icons-material';

import classes from './AppBarComponent.module.css';

const AppBarComponent = () => {
  return (
    <div className={classes.barWrapper}>
      <Grid container spacing={2} alignItems={'center'}>
        <Grid item xs={2}>
          <img src="./images/logo2.png" alt="logo" className={classes.logo} />
        </Grid>
        <Grid item xs={7}></Grid>
        <Grid item xs={1}>
          <Button variant="contained" color="secondary">
            <Person sx={{ width: 25 }} />
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" color="secondary">
            <AddCard sx={{ width: 25 }} />
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" color="secondary">
            <ShoppingCart sx={{ width: 25 }} />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AppBarComponent;
