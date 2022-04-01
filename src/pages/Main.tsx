import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';

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
  const [productsList, setProductsList] = useState([] as ItemType[]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())

      .then((data) => setProductsList(data));
  }, []);

  console.log(productsList);
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
        {productsList.map((prod, index) => (
          <ProductCard prod={prod} key={index} />
        ))}
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
