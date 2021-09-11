import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import Button from "../ui/Button";
import classes from "./cart-item.module.css";

const CartItem = ({cartItem:{product:{id,image,title,price},count},showHandler}) => {
  const {removeItem}=useCartContext();

  const removeHandler=()=>{
    removeItem(id);
  }

  return (
    <div className={classes.item}>
      <img
        className={classes.img}
        src={image}
        alt={title}
      />
      <div className={classes.details}>
        <Link className={classes.title} to={`/products/${id}`} onClick={()=>{showHandler(false)}}>{title}</Link>
        <div className={classes.info}>
          <p>Price: {price}</p>
          <p className={classes.count}>Count: <span>{count}</span></p>
          <p className={classes.sum}>Sum: <span>{count*price}</span>$</p>
        </div>
        <Button extraClass='remove' onClick={removeHandler}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
