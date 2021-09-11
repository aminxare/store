import React from "react";
import Button from "../ui/Button";
import CartItem from "./CartItem";
import { useCartContext } from "../../context/cartContext";
import classes from "./modal.module.css";

const Modal = ({showHandler}) => {
  const {items,totalPrice}= useCartContext();

  return (
    <div className={classes.container}>
      <div className={classes.modal}>
        <button onClick={()=>showHandler(false)} className={classes.close}>
          <i className={'fas fa-times'} />
        </button>
        <img src="/assets/modal.jfif" alt="modal" />
        <div className={classes.content}>
          <p className={classes.title}>Thanks for shopping</p>
          <div className={classes.items}>
            {items.map((i,index)=><CartItem key={index} cartItem={i} showHandler={showHandler} />)}
          </div>
          <p>Total Price: {totalPrice}</p>
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
