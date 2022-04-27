import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';

import style from './ProductCard.module.css';
import AddToCartButton from './AddToCartButton';
import ChangeAmount from './ChangeAmount';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 12,
          },
        },
      ],
    },
  },
});

interface Prodcut {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const ProductCard: React.FC<{ prod: Prodcut }> = (props) => {
  const [cssTest, setCssTest] = useState(false);
  const [inCartFlag, setInCartFlag] = useState(true);

  const cartItems = useSelector((state: any) => state.products.cartItems);
  // console.log('cartitems list', cartItems);

  const changeCountHandler = () => {
    console.log('test');
  };

  useEffect(() => {
    const flag = checkIfInCart(props.prod.id);
    setInCartFlag(flag);
  }, []);

  const checkIfInCart = (itemId: number) => {
    const foundItem = cartItems.find((item: any) => item.id === itemId);
    return foundItem !== undefined;
  };
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} className={style.paper}>
        <Link to={`/${props.prod.id}`} className={style.linking}>
          <img
            src={props.prod.image}
            alt="product"
            className={`${style.cardImage} ${cssTest && style.cardImageBorder}`}
          />
        </Link>

        <Box paddingX={0}>
          <Box
            paddingX={1}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" component="h6">
              {props.prod.category}
            </Typography>

            <Box
              sx={{ display: 'flex', justifyContent: 'flex-start' }}
              marginTop={0}
              marginLeft={1}
            >
              <Rating
                name="read-only"
                value={4}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {4}
              </Typography>
            </Box>
          </Box>

          <Box
            paddingX={1}
            marginBottom={1}
            padding={1}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="body1" component="h3" marginTop={0}>
              ${props.prod.price}
            </Typography>

            {!inCartFlag ? (
              <AddToCartButton />
            ) : (
              <ChangeAmount
                itemCount={1}
                changeCountHandler={changeCountHandler}
              />
            )}
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default ProductCard;
