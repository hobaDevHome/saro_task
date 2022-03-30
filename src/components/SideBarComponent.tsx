import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

import classes from './SideBarComponent.module.css';

const cats = [
  {
    name: 'Clothes',
    checked: true,
  },
  {
    name: 'Watches',
    checked: false,
  },
  {
    name: 'Cars',
    checked: false,
  },
];

const SideBarComponent = () => {
  const [state, setState] = useState({
    Clothes: true,
    Watches: false,
    Cars: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <div className={classes.sideContianer}>
      <Typography variant="body1" component="h4">
        Category
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            {cats.map((cat, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    onChange={handleChange}
                    checked={state['Clothes']}
                    name={cat.name}
                  />
                }
                label={cat.name}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
    </div>
  );
};

export default SideBarComponent;
