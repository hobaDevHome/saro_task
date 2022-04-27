import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import style from './Details.module.css';

export type ItemType = {
  id: string;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const ProductDetails = () => {
  const [itemCount, setItemCount] = useState(1);
  const { id } = useParams();
  const productsList = useSelector((state: any) => state.products.products);

  const item = productsList.find((product: ItemType) => product.id == id);

  // console.log('productsList', productsList);

  // console.log('item', item);
  const changeCountHandler = (event: any) => {
    setItemCount(event.target.value);
    console.log(itemCount);
  };
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
          <div className={style.prodTitle}>{item.title}</div>
          <div className={style.prodPrice}>${item.price}</div>
          <div className={style.amountText}>
            Amount :{' '}
            <form>
              <TextField
                id="number"
                label=""
                type="number"
                style={{ marginTop: 10, width: 80 }}
                color="secondary"
                value={itemCount}
                onChange={(event) => changeCountHandler(event)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </div>
          <div className={style.amountText}>
            Price :
            <span className={style.amountValue}>
              $ {itemCount * item.price}
            </span>
          </div>
          <div className={style.descriptionTitle}>Description</div>
          <div className={style.descriptionText}>{item.description}</div>
          <div className={style.buttonsDiv}>
            <Link to="/" className={style.linking}>
              <Button variant="outlined">Back</Button>
            </Link>
            {/* <Link to="/cart" className={style.linking}> */}
            <Button variant="contained" color="secondary">
              Add To Cart
            </Button>
            {/* </Link> */}
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={style.imgSection}>
            <img src={item.image} alt="" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
