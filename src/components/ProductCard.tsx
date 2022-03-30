import { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

import classes from "./ProductCard.module.css";
import AddToCartButton from "./AddToCartButton";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
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

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} className={classes.paper}>
        <img
          src={props.prod.image}
          alt='product'
          className={`${classes.cardImage} ${
            cssTest && classes.cardImageBorder
          }`}
        />

        <Box paddingX={0}>
          <Box
            paddingX={1}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant='body2' component='h6'>
              {props.prod.category}
            </Typography>

            <Box
              sx={{ display: "flex", justifyContent: "flex-start" }}
              marginTop={0}
              marginLeft={1}
            >
              <Rating
                name='read-only'
                value={4}
                readOnly
                precision={0.5}
                size='small'
              />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                {4}
              </Typography>
            </Box>
          </Box>

          <Box
            paddingX={1}
            marginBottom={1}
            padding={1}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant='body1' component='h3' marginTop={0}>
              ${props.prod.price}
            </Typography>

            <AddToCartButton />
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default ProductCard;
