import React from 'react';
import CartItem from '../components/CartItem';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import style from './Cart.module.css';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

const Cart = () => {
  return (
    <Container
      sx={{
        marginTop: 7,
      }}
      maxWidth="lg"
    >
      <Paper elevation={3}>
        <Grid container spacing={0} marginTop={1} marginBottom={3}>
          <Grid item xs={9} className={style.cartContianer} marginBottom={3}>
            <div className={style.summaryItemContiner}>
              <div className={style.summaryTitle}>Shopping Cart</div>
              <div>3 items</div>
            </div>
            <div className={style.dividerSection}>
              <div className={style.dividerLine}></div>
            </div>
            <div>
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <Link to="/">Back to shop</Link>
          </Grid>
          <Grid item xs={3} className={style.cartSummary}>
            <div className={style.summaryTitle}>Summary</div>

            <div className={style.summaryItemContiner}>
              <div className={style.summaryItemText}>Subtotal : </div>
              <div className={style.summaryItemValue}>$10</div>
            </div>
            <div className={style.dividerSection}>
              <div className={style.dividerLine}></div>
            </div>
            <div className={style.summaryItemContiner}>
              <div className={style.summaryItemText}>Discount : </div>
              <div className={style.summaryItemValue}>$10</div>
            </div>
            <div className={style.dividerSection}>
              <div className={style.dividerLine}></div>
            </div>
            <div className={style.summaryItemContiner}>
              <div className={style.summaryItemText}>Shipping : </div>
              <div className={style.summaryItemValue}>$10</div>
            </div>
            <div className={style.dividerSection}>
              <div className={style.dividerLine}></div>
            </div>
            <div className={style.summaryItemContiner}>
              <div className={style.summaryItemText}>Total : </div>
              <div className={style.summaryItemValue}>$10</div>
            </div>
            <div className={style.buttonDiv}>
              <Button variant="contained" color="secondary">
                Checkout
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Cart;
