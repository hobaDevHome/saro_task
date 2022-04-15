import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';
import style from './CartItem.module.css';

const CartItem = () => {
  const [itemCount, setItemCount] = useState(1);
  return (
    <Container
      sx={{
        marginTop: 1,
      }}
      maxWidth="lg"
    >
      {/* /////////////// item data////////////// */}
      <Grid container spacing={1}>
        <Grid item xs={2} className={style.cartItemContianer}>
          <img src="./images/prodT.png" alt="" className={style.itemImage} />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className={style.amountValue}>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="5"
              value={itemCount}
              onChange={(event) => setItemCount(itemCount + 1)}
            ></input>
          </div>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className={style.prodTitle}>
            Balance Beam Oil Control Moisturizer
          </div>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className={style.amountValue}>$100</div>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CloseIcon />
        </Grid>
      </Grid>
      {/* /////////////////////// divider ////////////////// */}

      <div className={style.dividerSection}>
        <div className={style.dividerLine}></div>
      </div>
    </Container>
  );
};

export default CartItem;
