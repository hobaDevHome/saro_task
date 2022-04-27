import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProdcuts } from '../store/actions';

import Typography from '@mui/material/Typography';
import ProductCard from '../components/ProductCard';
import style from './Main.module.css';

export type ItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const Main = () => {
  const productsList = useSelector((state: any) => state.products.products);
  const dispatch = useDispatch();
  // console.log('cat', productsList);

  useEffect(() => {
    dispatch(fetchProdcuts());
  }, [dispatch]);

  return (
    <Container sx={{ marginTop: 1 }}>
      {/* //////////////// header /////////////////// */}

      <div className={style.mainHeaderContainer}>
        <div className={style.whiteRect}>
          <Typography
            padding={1}
            fontSize={25}
            variant="subtitle1"
            component="h2"
            color={'white'}
          >
            SHINOLA‘ S BEST
          </Typography>
        </div>
      </div>
      {/* /////////////////////// divider ////////////////// */}

      <div className={style.dividerSection}>
        <div className={style.dividerText}>Best Selling</div>
        <div className={style.dividerLine}></div>
      </div>

      {/* /////////////////best selling products list /////////////// */}
      <div className={style.productsListContainer}>
        {productsList.length > 0 &&
          productsList.map((prod: ItemType, index: number) => {
            return <ProductCard key={prod.id} prod={prod} />;
          })}
      </div>

      {/* //////////// footer ad /////////////// */}

      <div className={style.addContainer}>
        <div className={style.whiteRect}>
          <Typography
            padding={1}
            fontSize={18}
            variant="subtitle1"
            component="h2"
            color={'white'}
          >
            HUNTERS RACE
          </Typography>

          <Typography
            padding={1}
            fontSize={16}
            variant="subtitle1"
            component="h6"
            color={'white'}
            className={style.addText}
          >
            for love
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Main;
