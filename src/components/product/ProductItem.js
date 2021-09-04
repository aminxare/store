import React from "react";
import classes from "./ProductItem.module.css";

const ProductItem = ({product:{category,description,id,image,price,title}}) => {
  return (
    <div className={classes.product}>
      <img className={classes["product__img"]} src={image} alt={title} />
      <p className={classes["product__title"]}>{title}</p>
      <div className={classes["product__buy"]}>
        <span className={classes['product__cost']}>{price}$</span>
        <button className={classes["product__btn"]}>Buy</button>
      </div>
    </div>
  );
};

export default ProductItem;
