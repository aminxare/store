import React from "react";
import { Link,useRouteMatch } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ProductItem = ({ product: { id, image, price, title } }) => {
  const {url}=useRouteMatch();
  
  return (
    <div className={classes.product}>
      <img className={classes["product__img"]} src={image} alt={title} />
      <p className={classes["product__title"]}>{title}</p>
      <div className={classes["product__buy"]}>
        <span className={classes["product__cost"]}>{price}$</span>
        <Link to={`${url}/${id}`} className={classes["product__btn"]}>Buy</Link>
      </div>
    </div>
  );
};

export default ProductItem;
