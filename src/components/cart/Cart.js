import React ,{useState} from "react";
import Button from "../ui/Button";
import { useCartContext } from "../../context/cartContext";
import classes from "./cart.module.css";
import Modal from "./Modal";

const Cart = () => {
  const { count } = useCartContext();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button to="/cart" extraClass="cart" onClick={() => setShowModal(true)}>
        Cart<span>{count}</span>
      </Button>
      {showModal && <Modal showHandler={setShowModal} />}
    </>
  );
};

export default Cart;
