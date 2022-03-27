import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import WatchCard from "../components/WatchCard";
import "../App.css";

export type ItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const WatchesList = () => {
  const [watchesList, setWatchesList] = useState([] as ItemType[]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())

      .then((data) => setWatchesList(data));
  }, []);
  return (
    <div className='App'>
      <Container sx={{ marginTop: 5 }}>
        <Grid container spacing={5}>
          {watchesList.map((watch, index) => (
            <WatchCard watch={watch} key={index} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default WatchesList;
