import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import style from './Details.module.css';

const ProductDetails = () => {
  return (
    <Container
      sx={{
        marginTop: 7,
      }}
      className={style.detailsPageContainer}
      maxWidth="lg"
    >
      <Grid container spacing={0} className={style.detailsCard} marginTop={1}>
        <Grid item xs={6} className={style.detailsDataSection}>
          <div className={style.prodTitle}>
            Balance Beam Oil Control Moisturizer
          </div>
          <div className={style.prodPrice}>$14.88</div>
          <div className={style.amountText}>
            Amount :{' '}
            <span className={style.amountValue}>
              {' '}
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="5"
              ></input>
            </span>
          </div>
          <div className={style.amountText}>
            Price : <span className={style.amountValue}>$100</span>
          </div>
          <div className={style.descriptionTitle}>Description</div>
          <div className={style.descriptionText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            eaque quos velit nihil dicta sapiente inventore expedita sed
            reprehenderit repellat quaerat, delectus mollitia dignissimos rerum
            et ut doloribus corrupti molestias?
          </div>
          <div className={style.buttonsDiv}>
            <Button variant="outlined">Back</Button>
            <Button variant="contained" color="secondary">
              Go To Cart
            </Button>
          </div>
        </Grid>
        <Grid item xs={6} className={style.detailsImageSection}>
          <div className={style.imageBG}>
            <img src="./images/imgBG.jpg" alt="" />
            <div className={style.image}>
              <img src="./images/prodT.png" alt="" />
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
