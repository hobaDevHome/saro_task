import React, { HtmlHTMLAttributes } from 'react';
import TextField from '@mui/material/TextField';

import style from './ChangeAmount.module.css';

const ChangeAmount: React.FC<{
  itemCount: number;
  changeCountHandler: (event: any) => void;
}> = (props) => {
  return (
    <div>
      <div className={style.amountText}>
        Amount :
        <form>
          <TextField
            id="number"
            label=""
            type="number"
            style={{ marginTop: 10, width: 80 }}
            color="secondary"
            value={props.itemCount}
            onChange={(event) => props.changeCountHandler(event)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default ChangeAmount;
