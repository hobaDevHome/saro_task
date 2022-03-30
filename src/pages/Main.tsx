import { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WatchCard from '../components/WatchCard';
import style from './Main.module.css';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

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
    <div className={style.mainWrapper}>
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

        {/* <Grid container spacing={1} justifyContent={'center'}>
          <Grid item xs={2}>
            Best Selling
          </Grid>
          <Grid item xs={10} marginTop={1}>
            <Divider variant="middle" sx={{ marginBottom: 5 }} />
          </Grid>
        </Grid> */}

        <div className={style.dividerSection}>
          <div className={style.dividerText}>Best Selling</div>
          <div className={style.dividerLine}></div>
        </div>
        {/* ///////////////// products list /////////////// */}
        <Grid container spacing={5}>
          {productsList.map((prod, index) => (
            <WatchCard watch={prod} key={index} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
