import React from "react";
import classes from "./ProductItem.module.css";

const ProductItem = () => {
  return (
    <div className={classes.product}>
      <img className={classes["product__img"]} src={null} alt='product image' />
      <p className={classes["product__title"]}>name</p>
      <p className={classes["product__description"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum enim
        veniam vitae. Possimus ipsum doloremque soluta at aspernatur voluptate
        debitis, ducimus ut non labore dolorem rem, repellendus natus, corporis
        mollitia!
      </p>
      <div className={classes["product__buy"]}>
        <span className={classes['product__cost']}>10.5$</span>
        <button className={classes["product__btn"]}>Buy</button>
      </div>
    </div>
  );
};

export default ProductItem;
