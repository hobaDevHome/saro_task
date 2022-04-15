import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ColorButton from './ColorButton';
import FormHelperText from '@mui/material/FormHelperText';

import Checkbox from '@mui/material/Checkbox';

import style from './SideBarComponent.module.css';

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

const colors = [
  { name: '151515' },
  { name: 'AAAAAA' },
  { name: 'FFFFFF' },
  { name: '745220' },
  { name: '989048' },
  { name: 'C80000' },
  { name: 'FFA3D4' },
  { name: 'FA8111' },
  { name: 'FFE927' },
  { name: '26DD4E' },
  { name: '3988FF' },
  { name: '9000E8' },
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
    <div className={style.sideContianer}>
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
      <Typography variant="body1" component="h4" marginBottom={2}>
        Colors
      </Typography>
      <div className={style.colorsGrid}>
        {colors.map((color, index) => {
          return <ColorButton key={index} color={color} />;
        })}
      </div>
    </div>
  );
};

export default SideBarComponent;
