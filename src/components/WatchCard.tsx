import { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

import classes from "./WatchCard.module.css";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});

interface Watch {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const WatchCard: React.FC<{ watch: Watch }> = (props) => {
  const [cssTest, setCssTest] = useState(false);

  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img
            src={props.watch.image}
            alt='watchs'
            className={`${classes.watchCardImage} ${
              cssTest && classes.watchCardImageBorder
            }`}
          />
          <Box paddingX={1}>
            <Typography variant='subtitle1' component='h2'>
              {props.watch.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant='body2' component='p' marginLeft={0.5}>
                {props.watch.amount} hours
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
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
            <Box sx={{ display: "flex", alignItems: "center" }} marginTop={3}>
              <Typography variant='h6' component='h3' marginTop={0}>
                From C ${props.watch.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default WatchCard;
