import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import style from "./AddToCartButton.module.css";

const AddToCartButton = () => {
  return (
    <div className={style.addToCartBtn}>
      <AddCircleOutlineOutlinedIcon className={style.addToCartBtnIcon} />
      <div>Add to Cart</div>
    </div>
  );
};

export default AddToCartButton;
